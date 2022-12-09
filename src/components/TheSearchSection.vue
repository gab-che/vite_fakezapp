<script>
    import TheSearchBar from './TheSearchBar.vue';
    import UserList from './UserList.vue';

    export default{
    components: { TheSearchBar, UserList },
    data() {
        return {};
    },
}
</script>

<template>
    <TheSearchBar></TheSearchBar>
    <UserList></UserList>
</template>

<style scoped lang="scss">
    @use '../styles/general.scss';
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/utilities' as *;
</style>