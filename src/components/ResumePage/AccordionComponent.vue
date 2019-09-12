<template>
    <v-expansion-panels>
        <v-expansion-panel
        v-for="(item, key) in data"
        :key="key">
        <v-expansion-panel-header>
            {{item.title}}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <h3>{{item.subheader}}</h3>
            {{item.description}}
        </v-expansion-panel-content>

        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
    export default {
        
        props: {
            data: {
                required: true,
                type: Object
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>