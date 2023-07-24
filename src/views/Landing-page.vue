<script setup>
import Hero from "../components/Landing-page-components/Hero.vue"
import Icons from "../components/Landing-page-components/Icons.vue"
import Lists from "../components/Landing-page-components/Lists.vue"
import Pictures from "../components/Landing-page-components/Pictures.vue"
import Mid from "../components/Landing-page-components/Mid.vue"
import Schools from "../components/Landing-page-components/School.vue"
</script>
<template >


<div class="overflow-x-hidden">
    <Hero />
    <Icons />
   <Lists />
   <Mid />
   <Pictures />
   <Schools />
    





</div>
</template>
<style scoped>
.hero{
    width: 351px;
height: 264px;
flex-shrink: 0; 
}
.gradient{
  background: linear-gradient(108deg, #B16CEA 8.00%, #FF5E69 40.00%, #FF8A56 77.00%, #FFA84B 91.00%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
 
}
.herotext{
  display: flex;
width: 387.731px;
height: 427px;
flex-direction: column;
justify-content: center; 
    font-family: Inter;
font-size: 72px;
font-style: normal;
font-weight: 700;
line-height: 82.5px; /* 114.583% */
letter-spacing: -2px;
}
.lgtext{
  font-family: Inter;
font-size: 72px;
font-style: normal;
font-weight: 700;
line-height: 82.5px; /* 114.583% */
letter-spacing: -2px;
color:black;
display: flex;
width: 527.481px;
height: 262px;
flex-direction: column;
justify-content: center; 

}
</style>
