<template>
    <v-content>
        <v-container>
            <v-layout>
                <v-flex md6>
                    <v-card>
                    Testing Page
                    </v-card>
                </v-flex>
                <v-flex md6>
                    <Profile/>
                </v-flex>
            </v-layout>
        </v-container>   
    </v-content>
</template>

<script>
import Profile from "./../components/HomePage/ProfilePicture";

export default {
    components: {
        Profile: Profile
    }
}
</script>

<style>

</style>
