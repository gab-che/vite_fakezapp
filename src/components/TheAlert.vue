<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>

<template>
    <div class="alert_container">
        <div class="alert_icon">
            <i class="fa-solid fa-bell-slash"></i>
        </div>
        <div class="alert_text">
            <span>Ricevi notifiche di nuovi messaggi</span>
            <a href="#">Attiva notifiche desktop</a>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @use '../styles/general.scss';
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/utilities' as *;

    .alert_container{
        background-color: $color_alert;
        padding: $standard_gap calc($standard_gap * 2);
        display: flex;
        gap: $standard_gap;
    }

    .alert_icon{
        @include round_icon;
        @include flex_align_center;
        justify-content: center;
        background-color: white;
        color: $color_alert;
    }

    .alert_text{
        @include flex_col;

        span{
            @include main_text;
        }

        a{
            @include sub_text;
        }
    }
</style>