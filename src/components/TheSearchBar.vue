<script>
    import { store, fetchUsers } from '../store';

    export default{
        data(){
            return{
                store,
                searchInput: {
                    name: '',
                }
            }
        },

        emits: ['search'],

        computed: {
            userNamesList(){
                const toReturn = [];
                this.store.userList.forEach((element)=>{
                    if(!toReturn.includes(element.name.first)){
                        toReturn.push(element.name.first)
                    }
                });
                
                return toReturn;
            }
        },

        methods: {
            searchUser(){
                this.$emit('search', this.searchInput.name);
            }
        }
    }
</script>

<template>
    <div class="searchbar">
        <div class="input-group input-group-sm">
            <button class="btn btn-outline-secondary" type="button" id="button-addon1"
                @click="searchUser">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <input type="text" class="form-control" placeholder="Cerca o inizia una nuova chat"
                v-model="searchInput.name"
                @input="searchUser">
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