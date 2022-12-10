<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>

<template>
    <div class="profile_container">
        <div class="profile">
            <div class="profile_img">
                <img src="https://picsum.photos/seed/picsum/200/200" alt="profile picture" class="img-fluid">
            </div>
            <div class="profile_text">Me</div>
        </div>

        <ul class="button_list list-unstyled">
            <li><button><i class="fa-solid fa-circle-notch"></i></button></li>
            <li><button><i class="fa-solid fa-message"></i></button></li>
            <li><button><i class="fa-solid fa-ellipsis-vertical"></i></button></li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
    @use '../styles/general.scss';
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/utilities' as *;

    .profile_container{
        @include flex_just_between;
        padding: .3rem .5rem;
        background-color: $color_nav_primary;
    }

    .profile {
        @include flex_align_center;
        gap: $standard_gap;
    }

    .profile_text{
        @include main_text;
    }

    .profile_img{
        @include round_icon;
    }

    .button_list{
        @include flex_align_center;
        gap: $standard_gap;
    }
</style>