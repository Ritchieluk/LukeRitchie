<template>
    <v-toolbar>
        <v-toolbar-side-icon
        @click.stop="$emit('toggle')">
        </v-toolbar-side-icon>
        <v-btn icon>
                <v-icon>mdi-home</v-icon>
            </v-btn>
        <v-toolbar-title class="headline">
            <span>Luke Ritchie</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn>
                Resume
            </v-btn>
            <v-btn>
                Work
            </v-btn>
            <v-btn>
                Details
            </v-btn>
            <v-btn>
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
