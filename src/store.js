import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    userList: [],
    messagesList: [],
    counter: 10,
    searchNames: '',
});

export function fetchUsers() {
    axios.get('https://randomuser.me/api/', {
        params: {
            results: store.counter,
            search: store.searchNames,
        }
    })
        .then((resp) => {
            store.userList = resp.data.results;
        })
};

export function fetchMessages() {
    axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((resp) => {
            store.messagesList = resp.data
        })
};