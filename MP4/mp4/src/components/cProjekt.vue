<template>
        <div class="cprojekt">
            <router-link :to="{path: '/projekt', query: {project_id: projekt.id}}"><h4>{{projekt.name}}</h4></router-link>
            <h6>{{shorten_desc(projekt.Description)}}</h6>
            <div class="votes">
                <div class="upvotes" grid-column:1 style="display:flex; background-color: lightgreen">
                    <img src="../assets/img/upvote.png" v-on:click="emitUpvote(projekt.id)"  alt="Oceń projekt pozytywnie">
                    <p>{{projekt.upvotes}}</p>
                </div>
                <div class="downvotes" grid-column:2 style="display:flex; background-color:indianred">
                    <img src="../assets/img/downvote.png" v-on:click="emitDownvote(projekt.id)" alt="Oceń projekt negatywnie">
                    <p>{{projekt.downvotes}}</p>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: "cProjekt",
    props: ["projekt"],
    methods: {
        emitUpvote(projekt_id){
            this.$emit('upvote-projekt', projekt_id);
        },
        emitDownvote(projekt_id){
            this.$emit('downvote-projekt', projekt_id);
        },
        shorten_desc(Description){
            if (Description.length > 200) {
                return Description.substring(0, 200) + "..."
            } else {
                return Description;
            }
        }
    }
}

</script>


<style scoped>

.cprojekt h6 {
    margin-bottom: 40px;
    display: block;
}
.cprojekt {
    display: flex;
    flex-direction: column;
    border-style: solid;
    border-color: black;
    border-width: 1px;
    width: 300px;
    min-height: 190px;
    position: relative;
}

.votes {
    display: flex;
    position: absolute;
    bottom:0;
    width: 100%;
}

.votes p {
    font-size: 20px;
    margin: 0;
    margin-top: 5%;
}

.votes div {
    width: 50%;
}

.votes img {
    height:30px; 
    margin-right:20%; 
    padding-left:20%;
    margin-top:2px;
}
</style>