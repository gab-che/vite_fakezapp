import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    temporaryUserList: [],
    userList: [],
    messagesList: [],
    counter: 5,
});

export function fetchUser() {
    axios.get('https://randomuser.me/api/')
        .then((resp) => {
            store.temporaryUserList.push(resp.data.results);
            store.counter--;

            if (store.counter === 0) {
                store.userList = store.temporaryUserList;
            }
        })
};

export function fetchMessages() {
    axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((resp) => {
            store.messagesList = resp.data
        })
};