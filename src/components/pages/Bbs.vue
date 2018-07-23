<template>
  <tbt-default>
    <div class="bbs">
      <tbt-h1>一言掲示板</tbt-h1>
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
  </tbt-default>
</template>

<script lang="ts">
import moment from 'moment';
import Vue from 'vue';
import Component from 'vue-class-component';
import TbtDefault from '@/components/templates/TbtDefault.vue';
import TbtH1 from '@/components/atoms/TbtH1.vue';
import firebase from 'firebase';
import database from '@/firebase-config';

interface Message {
  name: string;
  message: string;
  createdAt: string;
  sortKey: number;
}

interface BbsData {
  messageList: Message[];
  name: string;
  message: string;
}

@Component({
  components: {
    TbtDefault,
    TbtH1,
  },
})
export default class Bbs extends Vue implements BbsData {
  messageList: Message[] = [];
  name: string = '';
  message: string = '';

  created() {
    this.listen();
  }

  listen() {
    database
      .ref('messages/')
      .on('value', (snapshot: firebase.database.DataSnapshot | null) => {
        if (snapshot) {
          const list = snapshot.val();
          const keys = Object.keys(list);

          const values = keys.map((v) => list[v]);
          this.messageList = values.sort((a: Message, b: Message) => {
            if (a.sortKey > b.sortKey) return 1;
            if (a.sortKey < b.sortKey) return -1;
            return 0;
          });
        }
      });
  }

  sendMessage() {
    if (!this.name || !this.message) return;

    const message: Message = {
      name: this.name,
      message: this.message,
      createdAt: moment(new Date()).format('YYYY/MM/DD H:mm:ss'),
      sortKey: -new Date(),
    };
    database.ref('messages/').push(message);

    this.name = '';
    this.message = '';
  }
}
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
