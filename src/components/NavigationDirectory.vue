<template>
    <v-list>
        <v-list-tile>
            <v-list-tile-action>
                <v-icon>mdi-home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                Home
            </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
            <v-list-tile-action>
                <v-icon>fas fa-clipboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                Resume
            </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
            <v-list-tile-action>
                <v-icon>fas fa-code</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                Work
            </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
            <v-list-tile-action>
                <v-icon>fas fa-info-circle</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                Details
            </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
            <v-list-tile-action>
                <v-icon>fas fa-book</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                Blog
            </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="github">
            <v-list-tile-action>
                <v-icon>fab fa-github</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                Github
            </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="linkedin">
            <v-list-tile-action>
                <v-icon>fab fa-linkedin</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                LinkedIn
            </v-list-tile-content>
        </v-list-tile>
    </v-list>
</template>

<script>
export default {
    methods: {
        github: function(){
            console.log("routing to github");
            window.location.href = "https://github.com/ritchieluk";
        },
        linkedin: function(){
            window.location.href = "https://www.linkedin.com/in/luke-ritchie-798b8b15b/";
        }
    }
}
</script>

<style>

</style>
