<script>
    import { store, fetchMessages } from '../store';
    export default{
        data(){
            return{
                store,
            }
        },

        created(){
            fetchMessages();
        }
    }
</script>

<template>

</template>

<style scoped lang="scss">
    @use '../styles/general.scss';
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/utilities' as *;
</style>