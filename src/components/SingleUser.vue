<script>
    export default{
        props: {
                    user:{
                        /**
                         *  @param {String} gender
                            @param {Object} name
                            @param {Object} location
                            @param {String} email
                            @param {Object} login
                            @param {Object} dob
                            @param {Object} registered
                            @param {String} phone
                            @param {String} cell
                            @param {Object} id
                            @param {Object} picture
                            @param {String} nat
                         */
                        type: Object,
                        required: true,
                    }
                },

        data(){
            return{}
        }
    }
</script>

<template>
    <div class="single_user">
        <div class="profile d-flex gap-3">
            <div class="profile_img">
                <img :src="user.picture.thumbnail" alt="profile icon" class="img-fluid">
            </div>
            <div class="profile_text">
                <span>{{user.name.first}}</span>
                <span>Tutto fatto!</span>
            </div>
        </div>
        <div class="time">12:00</div>
    </div>
</template>

<style scoped lang="scss">
    @use '../styles/general.scss';
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/utilities' as *;

    .single_user{
        @include flex_just_between;
        padding: $standard_gap calc($standard_gap * 2);
    }

    .profile_img{
        @include round_icon;
    }

    .profile_text{
        @include flex_col;

        span:first-child{
            @include main_text;
        }

        span:nth-child(2){
            @include sub_text;
        }
    }

    .time{
        @include sub_text;
    }
</style>