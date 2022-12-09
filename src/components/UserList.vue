<script>
    import SingleUser from './SingleUser.vue';
    import { store, fetchUser } from '../store';

    export default{
    components: { SingleUser },

    data() {
        return {
            store,
        };
    },

    created(){
        this.fetchUsers();
    },

    methods: {
        fetchUsers() {
            for (let i = 0; i < store.counter; i++) {
            fetchUser();
    }
}
    }
}
</script>

<template>
    <SingleUser></SingleUser>
</template>

<style scoped lang="scss">
    @use '../styles/general.scss';
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/utilities' as *;
</style>