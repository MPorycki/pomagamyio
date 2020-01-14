<template>
    <div class="truebody">
        <div class="project" grid>
            <div class="strona_projektu">
                <button onclick="location.href='projekt.html';">Strona Projektu</button>
            </div>
            <div class="project_description">
                <h6>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</h6>
            </div>
            <div class="project_image">
                <img src="../img/traj2.gif" alt="">
            </div>
            
            <div class="up_downvote">
                <img src="../img/upvote.png" class="upvote_img" alt="">
                <p class="upvote_no">14</p>
                <img src="../img/downovote.png" class="downvote_img" alt="">
                <p class="downvote_no">2</p>
            </div>
        </div>

        <div grid-row=2 class="project" grid>
                <div class="strona_projektu">
                    <button onclick="location.href='projekt.html';">Strona Projektu</button>
                </div>
                <div class="project_description">
                    <h6>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</h6>
                </div>
                <div class="project_image">
                    <img src="img/traj2.gif" alt="">
                </div>
                
                <div class="up_downvote">
                    <img src="img/upvote.png" class="upvote_img" alt="">
                    <p class="upvote_no">5</p>
                    <img src="img/downovote.png" class="downvote_img" alt="">
                    <p class="downvote_no">0</p>
                </div>
            </div>
            <div grid-row=2 class="project" grid>
                <div class="strona_projektu">
                    <button onclick="location.href='projekt.html';">Strona Projektu</button>
                </div>
                <div class="project_description">
                    <h6>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</h6>
                </div>
                <div class="project_image">
                    <img src="img/traj2.gif" alt="">
                </div>
                
                <div class="up_downvote">
                    <img src="img/upvote.png" class="upvote_img" alt="">
                    <p class="upvote_no">5</p>
                    <img src="img/downovote.png" class="downvote_img" alt="">
                    <p class="downvote_no">0</p>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name: "Projekty",
    components: {
    },
}
</script>

<style scoped>
    .truebody {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        grid-row: 3;
    }

    .project {
        height: 200px;
        display: grid;
        grid-template-columns: 3fr 10fr 4fr 2fr;
        width: 100%;
        margin-top: 50px;
    }

    .strona_projektu {
        display: flex;
        grid-column: 1;
        justify-content: center;
        align-items: center;
    }

    .project_description{
        grid-column: 2;
        border-style: solid;
        border-width: 1px;
        
        margin-right: 50px;
    }

    .project_image {
        grid-column: 3;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .project_image img{
        width: 300px;
        height: 200px;
    }

    .up_downvote {
        grid-column: 4;
        margin-left: 15px;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
    }

    .up_downvote img {
        width: 30px;
        height: 30px;
    }

    .up_downvote p {
        border-style: solid;
        border-width: 1px;
    }

    .upvote_no {
            grid-row: 3;
            grid-column: 1; 
            text-align: center;
            margin-left: 25%;
            margin-right: 25%;
    }

    .upvote_img {
        grid-row: 2;
        grid-column: 1;
        align-items: center;
    }

    .downvote_img {
        grid-row: 2;
        grid-column: 2;
    }

    .downvote_no {
        grid-row: 3;
        grid-column: 2; 
        text-align: center;
        margin-left: 25%;
        margin-right: 25%;
    }

    .footer {
        margin-top: 50px;
    }

</style>