<script>
import TheTopDisplay from './TheTopDisplay.vue';
import TheMainDisplay from './TheMainDisplay.vue';
import TheBottomDisplay from './TheBottomDisplay.vue';

    export default{
    data() {
        return {};
    },
    components: { TheTopDisplay, TheMainDisplay, TheBottomDisplay }
}
</script>

<template>
    <main>
        <TheTopDisplay></TheTopDisplay>
        <TheMainDisplay></TheMainDisplay>
        <TheBottomDisplay></TheBottomDisplay>
    </main>
</template>

<style scoped lang="scss">
    @use '../styles/general.scss';
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/utilities' as *;

    main{
        @include flex_col;
        flex-grow: 1;
    }
</style>