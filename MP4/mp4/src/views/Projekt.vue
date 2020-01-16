<template>
    <div class="truebody">
        <ProjektItem v-bind:ProjektData="projekt" v-bind:UsersProjekt="projektUsers" v-bind:CommentsProjekt="projektComments"/>  
    </div>
</template>

<script>
import ProjektItem from "../components/ProjektItem.vue"

export default {
    name: "projekt",
    components: {
        ProjektItem
        },
        props: {
            projekt1: Object
        },
    data() {
        // TODO do ogarniecia wczytywanie tego z App.vue
        return {
            projekt: {
                    id: 1,
                    title: "Ciekawa Inicjatywa 1",
                    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                    logo: "../img/traj2.gif",
                    upvotes: 14,
                    downvotes: 2,
                    ownerId: 1,

                },
            projektUsers: [
                {
                id: 1,
                username: "JKowalski92",
                role: "Twórca"
                },
                {
                id: 2,
                username: "KNowak12",
                role: "Grafik"
                },
                {
                id: 1,
                username: "Zjanczak",
                role: "Stolarz"
                }
                ],
            projektComments: [
                {
                    id: 1,
                    date: "17.10.2019 15:00",
                    text: "ABC TEST",
                    upvotes: 5,
                    downvotes: 2,
                    userId : 1   
                },
                {
                    id: 2,
                    date: "17.10.2019 15:02",
                    text: "ABC2 TEST",
                    upvotes: 5,
                    downvotes: 2,
                    userId : 2   
                },
                {
                    id: 1,
                    date: "17.10.2019 15:05",
                    text: "ABC3 TEST",
                    upvotes: 5,
                    downvotes: 2,
                    userId : 3   
                }
            ]
            } 
        }   
    }
</script>

<style scoped>
</style>