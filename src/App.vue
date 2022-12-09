<script>
  import TheSidebar from './components/TheSidebar.vue';
  import TheMain from './components/TheMain.vue';

  export default{
    components: { TheSidebar, TheMain }
  }

</script>

<template>
  <div class="container main_container">
    <TheSidebar></TheSidebar>
    <TheMain></TheMain>
  </div>
</template>

<style lang="scss">
  @use './styles/general.scss';
  @use './styles/partials/variables' as *;
  @use './styles/partials/utilities' as *;

  .main_container{
    height: calc(100vh - 6rem);
    box-shadow: 0 0 8px $color_bottom_nav_accent;
    padding-left: 0;
    padding-right: 0;
    display: flex;
  }
</style>
