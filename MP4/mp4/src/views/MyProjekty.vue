<template>
    <div class="truebody">
        <cProjekty v-bind:projekty="projects"/>
    </div>
</template>

<script>
import cProjekty from "../components/cProjekty.vue"
export default {
    name: "Projekty",
    components: {
        cProjekty
    },
    data (){
        return {
            projects: [
                {
                    id: 1,
                    title: "Ciekawa Inicjatywa 1",
                    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                    logo: "../img/traj2.gif",
                    upvotes: 14,
                    downvotes: 2
                },
                {
                    id: 2,
                    title: "Ciekawa Inicjatywa 1",
                    description: "Lorem ipsum2",
                    logo: "~assets/img/traj2.gif",
                    upvotes: 143,
                    downvotes: 21
                },
                {
                    id: 3,
                    title: "Ciekawa Inicjatywa 1",
                    description: "Lorem ipsum3",
                    logo: "../img/traj2.gif",
                    upvotes: 1337,
                    downvotes: 6
                }
                ,
                {
                    id: 4,
                    title: "Ciekawa Inicjatywa 1",
                    description: "Lorem ipsum3",
                    logo: "../img/traj2.gif",
                    upvotes: 1337,
                    downvotes: 6
                }
                ,
                {
                    id: 5,
                    title: "Ciekawa Inicjatywa 1",
                    description: "Lorem ipsum3",
                    logo: "../img/traj2.gif",
                    upvotes: 1337,
                    downvotes: 6
                }
            ]
        }
    }
}
</script>