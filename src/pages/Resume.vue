<template>
    <v-card>
        Resume Page
        <Accordion :data="WorkExperience" />
    </v-card>
</template>

<script>
import WorkExperience from "@/assets/WorkExperience";
import AccordionComponent from "@/components/ResumePage/AccordionComponent";


export default {
    data: ()=>({
        WorkExperience: WorkExperience
    }),
    components: {
        Accordion: AccordionComponent
    }
}
</script>

<style>

</style>