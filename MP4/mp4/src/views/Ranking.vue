<template>
    <div class="truebody">
                
                <table>
                        <colgroup>
                            <col span="1" style="width: 10%;">
                            <col span="1" style="width: 55%;">
                            <col span="1" style="width: 35%;">
                        </colgroup>
                        <tr style="background-color: lightslategray">
                            <td>Miejsce</td>
                            <td>Uzytkownik</td>
                            <td>Rola</td>
                        </tr>
                        <tr>
                            <td>1.</td>
                            <td>JKowalski92</td>
                            <td>Twórca</td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>KNowak12</td>
                            <td>Grafik</td>
                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>ZJanczak</td>
                            <td>Stolarz</td>
                        </tr>
                </table>
        
            
        </div>
</template>

<script>
export default {
   
}
</script>

<style scoped>
.truebody {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
}

.truebody table {
    width: 25%;
    text-align: center;
}
</style>