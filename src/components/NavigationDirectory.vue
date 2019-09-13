<template>
    <v-list>
        <v-list-item @click.stop="goHome">
            <v-list-item-action>
                <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                Home
            </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{name: 'Resume'}">
            <v-list-item-action>
                <v-icon>fas fa-clipboard</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                Resume
            </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{name: 'Work'}">
            <v-list-item-action>
                <v-icon>fas fa-code</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                Work
            </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{name: 'Details'}">
            <v-list-item-action>
                <v-icon>fas fa-info-circle</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                Details
            </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{name: 'Blog'}">
            <v-list-item-action>
                <v-icon>fas fa-book</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                Blog
            </v-list-item-content>
        </v-list-item>
        <v-list-item @click="github">
            <v-list-item-action>
                <v-icon>fab fa-github</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                Github
            </v-list-item-content>
        </v-list-item>
        <v-list-item @click="linkedin">
            <v-list-item-action>
                <v-icon>fab fa-linkedin</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                LinkedIn
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
export default {
    methods: {
        goHome: function(){
            this.$router.push({name: 'Home'});
        },
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
