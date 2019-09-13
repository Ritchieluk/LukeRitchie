<template>
  <v-app dark>
    <NavDrawer
        :display="drawer"
        @input="checkDrawer"
        />
        <NavToolbar
        @toggle="drawer=!drawer"/>
        <v-content>
          <router-view></router-view>
        </v-content>
  </v-app>
</template>

<script>
import NavigationToolbar from "./components/NavigationToolbar";
import NavigationDrawer from "./components/NavigationDrawer";

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
