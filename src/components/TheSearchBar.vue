<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>

<template>
    <div class="searchbar">
        <div class="input-group input-group-sm">
            <button class="btn btn-outline-secondary" type="button" id="button-addon1">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <input type="text" class="form-control" placeholder="Cerca o inizia una nuova chat">
        </div>
    </div>
</template>

<style scoped lang="scss">
    @use '../styles/general.scss';
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/utilities' as *;
    
    .searchbar{
        background-color: $color_nav_secondary;
        padding: $standard_gap;
    }
</style>