<!--
This is the place I can discuss things, whether for various projects or work experiences I've had or just
my current plans as a member of the industry etc. 
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
            Blog Page
        </v-content>
    </v-app>
   
</template>

<script>
import NavigationToolbar from "../components/NavigationToolbar";
import NavigationDrawer from "../components/NavigationDrawer";

export default {
    data: ()=>({
        drawer: false
    }),
    components: {
        NavToolbar: NavigationToolbar,
        NavDrawer: NavigationDrawer
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