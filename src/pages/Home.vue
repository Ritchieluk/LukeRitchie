<!-- 
This page could stand to have basic contact info, a featured section of work of my choice, a
current status could be interesting. 
-->
<template>
    <v-app>
        <NavDrawer
        :display="drawer"
        @input="checkDrawer"
        />
        <NavToolbar
        @toggle="drawer=!drawer"/>
        <v-content>
            <v-container align-content-start>
                <v-layout align-content-start>
                        <v-flex md4 class="pa-3">
                            <Profile/>
                        </v-flex>
                        <v-flex md8 class="pa-3">
                            <Details/>
                        </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
   
</template>

<script>
import NavigationToolbar from "../components/NavigationToolbar";
import NavigationDrawer from "../components/NavigationDrawer";
import Profile from "../components/HomePage/ProfilePicture";
import Details from "../components/HomePage/HomeDetails";

//test test
export default {
    data: ()=>({
        drawer: false
    }),
    components: {
        NavToolbar: NavigationToolbar,
        NavDrawer: NavigationDrawer,
        Profile: Profile,
        Details: Details
    },
    methods: {
        checkDrawer: function(value){
            this.drawer=value;
        }
    }
}
</script>

<style>

</style>
