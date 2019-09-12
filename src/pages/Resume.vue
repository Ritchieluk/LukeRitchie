<template>
    <v-app>
        <NavDrawer
        :display="drawer"
        @input="checkDrawer"
        />
        <NavToolbar
        @toggle="drawer=!drawer"/>
        <v-content>
            Resume Page
            <Accordion :data="WorkExperience" />
        </v-content>
    </v-app>
   
</template>

<script>
import NavigationToolbar from "../components/NavigationToolbar";
import NavigationDrawer from "../components/NavigationDrawer";
import WorkExperience from "@/assets/WorkExperience";
import AccordionComponent from "@/components/ResumePage/AccordionComponent";


export default {
    data: ()=>({
        drawer: false,
        WorkExperience: WorkExperience
    }),
    components: {
        NavToolbar: NavigationToolbar,
        NavDrawer: NavigationDrawer,
        Accordion: AccordionComponent
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