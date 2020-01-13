<template>
    <div class="background">
        <div class="big-image"> </div>
        <div class="big-text">
            <h1>Pomagajmy.io</h1>  
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.background{
    height:200px;
}
.big-image {
    background-image: url("https://tse2.mm.bing.net/th?id=OIP.KN1hZZtINXWBWHe3-vWHtAHaEo");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    filter: blur(8px);
    height: 200px;
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