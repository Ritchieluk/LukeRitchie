<!--
I think this will function similarly to the App gallery, where we feature some segments of work I've done
and then clicking on them takes you to a fuller page with a link to the related blog post, a demo of the project
and snippets of code. This will basically be Github++ is the hope.
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
            Work Page
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