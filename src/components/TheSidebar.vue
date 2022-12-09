<script>
    import TheProfile from './TheProfile.vue';
    import TheAlert from './TheAlert.vue';
    import TheSearchSection from './TheSearchSection.vue';

    export default{
    components: { TheProfile, TheAlert, TheSearchSection },
    data() {
        return {};
    },
}
</script>

<template>
    <div class="sidebar">
        <TheProfile></TheProfile>
        <TheAlert></TheAlert>
        <TheSearchSection></TheSearchSection>
    </div>
</template>

<style scoped lang="scss">
    @use '../styles/general.scss';
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/utilities' as *;

    .sidebar{
        @include flex_col;
        width: 300px;
        border-right: 1px solid $color_nav_accent;
        flex-shrink: 0;
    }
</style>