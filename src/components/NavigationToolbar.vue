<template>
    <v-toolbar>
        <v-toolbar-side-icon
        @click.stop="$emit('toggle')">
        </v-toolbar-side-icon>
        <v-btn @click.stop="goHome" icon>
                <v-icon>mdi-home</v-icon>
            </v-btn>
        <v-toolbar-title class="headline">
            <span>Luke Ritchie</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn :to="{name: 'Resume'}">
                Resume
            </v-btn>
            <v-btn  :to="{name: 'Work'}">
                Work
            </v-btn>
            <v-btn :to="{name: 'Details'}">
                Details
            </v-btn>
            <v-btn :to="{name: 'Blog'}">
                Blog
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    methods: {
        goHome: function(){
            this.$router.push("/");
        }
    }
}
</script>

<style>

</style>
