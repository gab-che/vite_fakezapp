<script>
    import TheSearchBar from './TheSearchBar.vue';
    import UserList from './UserList.vue';
    import { store, fetchUsers } from '../store';
    export default{
    components: { TheSearchBar, UserList },
    data() {
        return {
            store,
        };
    },

    methods: {
        onSearch(input){
            this.store.searchNames = input;
            // fetchUsers();
            console.log(input);
        },
    },
}
</script>

<template>
    <TheSearchBar @search="onSearch"></TheSearchBar>
    <UserList></UserList>
</template>

<style scoped lang="scss">
    @use '../styles/general.scss';
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/utilities' as *;
</style>