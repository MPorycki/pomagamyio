<template>
    <div class="background">
        <div class="big-image"> </div>
        <div class="big-text">
            <h1>{{title}}</h1>  
        </div>
    </div>
</template>

<script>
export default {
    name:"BackgroundPic",
    props: {
        title: String
    }
}
</script>

<style scoped>
.background{
    height:28%;
}
.big-image {
    background-image: url("https://tse2.mm.bing.net/th?id=OIP.KN1hZZtINXWBWHe3-vWHtAHaEo");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    filter: blur(8px);
    height: 100%;
}

.big-text{
  font-weight: bold;
  position: relative;
  top: -50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  padding: 20px;
  text-align: center;
}
</style>