<template>
    <v-container align-content-start>
        <v-layout align-content-start>
                <v-flex md4 class="pa-3">
                    <Profile/>
                </v-flex>
                <v-flex md8 class="pa-3">
                    <Details/>
                </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Profile from "../components/HomePage/ProfilePicture";
import Details from "../components/HomePage/HomeDetails";

//test test
export default {
    data: ()=>({
        drawer: false
    }),
    components: {
        Profile: Profile,
        Details: Details
    }
}
</script>

<style>

</style>
