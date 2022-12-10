<script>
    import SingleUser from './SingleUser.vue';
    import { store, fetchUsers } from '../store';

    export default{
    components: { SingleUser },

    data() {
        return {
            store,
        };
    },

    created(){
        fetchUsers();
    },
}
</script>

<template>
    <ul class="userlist_container list-unstyled">
        <li v-for="(user, i) in store.userList" :key="i">
            <SingleUser :user="user"></SingleUser>
        </li>
    </ul>
</template>

<style scoped lang="scss">
    @use '../styles/general.scss';
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/utilities' as *;

    .userlist_container{
        @include flex_grow;
        background-color: white;

        li:not(:last-child){
            border-bottom: 1px solid $color_selected;
        }
    }
</style>