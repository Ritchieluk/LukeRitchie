<!--
The obvious question with this page is... why not just view my LinkedIn profile? 
I think the goal here should be that this page can provide even further details via 
expansion panels that continue to expand outward into deeper details. Additionally 
sections could contain links to pages within the work/blog so that the resume
allows functional viewing of my experiences. 

This also needs to have contact information

e.g. Under Work Experience could be Humana, which then links to a blog post about my project
    or under CS316 could be a link to the projects I did in that class 
    or under Accomplishments/Skills could be blog posts discussing them or links to projects
        I used those skills
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
            <v-container>
                <v-layout wrap  >
                    <v-flex md4>
                        <v-card>
                            <v-img src="https://via.placeholder.com/300">
                            </v-img>
                        </v-card>
                    </v-flex>
                    <v-flex md8>
                        <v-card>
                            <v-card-title>
                            Work Experience
                            </v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex md8>
                        <v-card>
                            <v-card-title>
                            Education
                            </v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex md6>
                        <v-card>
                            <v-card-title>
                            Skills
                            </v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex md6>
                        <v-card>
                            <v-card-title>
                            Accomplishments
                            </v-card-title>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
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