<template>
  <div class="bbs">
    <h1>一言掲示板</h1>
    <div class="message-form">
      <label for="messageInput">メッセージ</label>
      <input type="text" id="messageInput" maxlength="20px" v-model="message">
      <button type="button" @click="sendMessage">送信</button>
    </div>
    <div>
      <ul class="message-list">
        <li v-for="(item, key) in messageList" v-bind:key="key">
          {{item.message}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import database from '../firebase-config.ts';


interface Message {
  message: string,
  sortKey: number
}

interface BbsData {
  messageList: Message[],
  message: string
}

export default Vue.extend({
  name: 'bbs',
  data() :BbsData {
    return {
      messageList: [],
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
          this.messageList = snapshot.val();
        }
      });
    },
    sendMessage() {
      if (!this.message) return;

      database.ref('messages/').push({
        message: this.message,
        sortKey: -(new Date()),
      });

      this.message = '';
    },
  },
});
</script>

<style scoped>
  .message-form {
    display: flex;
    justify-content: center;
  }

  .message-form label {
    width: 5em;
    font-weight: bold;
    margin-right: 10px;
  }
  .message-form input {
    padding: 5px;
  }

  .message-form button {
    background-color: gray;
    width: 50px;
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
    background-color: white;
    padding: 5px 10px;
    margin-bottom: 5px;
  }
</style>
