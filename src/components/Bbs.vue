<template>
  <div class="bbs">
    <h1>一言掲示板</h1>
    <p>
      足跡や、あいさつ、キリ番報告、等に使用していただいて構いません。
      <br>
      誹謗中傷、個人情報などの書き込みはご遠慮ください。
    </p>
    <div class="message-form">
      <div class="message-form-group">
        <label for="nameInput">HN(ハンドルネーム)</label>
        <input type="text" id="nameInput" maxlength="20" v-model="name">
      </div>
      <div class="message-form-group">
        <label for="messageInput">メッセージ</label>
        <input type="text" id="messageInput" maxlength="100" v-model="message">
      </div>
      <button type="button" @click="sendMessage">送信</button>
    </div>
    <div>
      <ul class="message-list">
        <li v-for="(item, key) in messageList" v-bind:key="key">
          <p>
            {{item.message}} by {{item.name}}
          </p>
          <p class="time-label">
            {{item.createdAt}}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import moment from 'moment';
import Vue from 'vue';
import database from '../firebase-config.ts';


interface Message {
  name: string,
  message: string,
  createdAt: Date,
  sortKey: number
}

interface BbsData {
  messageList: Message[],
  name: string,
  message: string
}

export default Vue.extend({
  name: 'bbs',
  data() :BbsData {
    return {
      messageList: [],
      name: '',
      message: '',
    };
  },
  created() {
    this.listen();
  },
  methods: {
    listen() {
      database.ref('messages/').on('value', (snapshot) => {
        if (snapshot) {
          const list = snapshot.val();
          const keys = Object.keys(list);

          const values = keys.map(v => list[v]);
          this.messageList = values.sort((a, b) => {
            if (a.sortKey > b.sortKey) return 1;
            if (a.sortKey < b.sortKey) return -1;
            return 0;
          });
        }
      });
    },
    sendMessage() {
      if (!this.name || !this.message) return;

      database.ref('messages/').push({
        name: this.name,
        message: this.message,
        createdAt: moment(new Date()).format('YYYY/MM/DD H:mm:ss'),
        sortKey: -(new Date()),
      });

      this.name = '';
      this.message = '';
    },
  },
});
</script>

<style scoped>
  .message-form {
    padding: 10px;
    box-sizing: border-box;
  }

  @media all and (min-width: 480px) {
    .message-form {
      width: 400px;
      margin: auto;
    }
  }

  .message-form-group {
    margin-bottom: 10px;
  }

  .message-form-group label {
    font-weight: bold;
  }

  .message-form-group input {
    display: block;
    box-sizing: border-box;
    padding: 5px;
    width: 100%;
  }

  .message-form button {
    background-color: gray;
    width: 100px;
    color: white;
    padding: 5px;
    margin-right: 10px;
    margin-left: 10px;
  }

  .message-list {
    padding: 0;
    margin-left: auto;
    margin-right: auto;
    list-style: none;
    text-align: left;
    max-width: 90%;
  }

  .message-list li {
    position: relative;
    background-color: white;
    padding: 5px 10px;
    margin-bottom: 5px;
  }

  .message-list .time-label {
    font-size: smaller;
    text-align: right;
    margin-bottom: 0;
  }
</style>
