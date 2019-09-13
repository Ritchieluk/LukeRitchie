<template>
    <v-toolbar max-height="64">
        <v-btn
        icon
        @click.stop="$emit('toggle')">
        <v-icon>mdi-menu</v-icon>
        </v-btn>
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
