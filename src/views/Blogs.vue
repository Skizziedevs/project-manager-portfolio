<script setup>

</script>

<template>
<a href="/News">
<div class="w-[351px] mx-auto my-[101px] md:flex md:w-[870px] md:my-[150px] lg:w-[1000px]">
  <img src="../../../img/buildblog.png" class="h-[250px] md:w-[332px] md:h-[319px] object-fill" alt="">
  <div class="w-[351px] pl-[20px] bg-black h-[142px] md:pl-[70px]  md:h-[319px]  md:w-[538px]">
    <p class="gradient date pt-[22px] pb-[16px] md:pt-[71px] md:pb-[14px]">April 11, 2022</p>
    <h2 class="title pb-[19.5px] md:w-[383px] md:pb-[28px]">Goodbye New York City</h2>
    <div class="flex">
       <p class="link pr-2">View Blog Post </p><img src="../../../img/ic.png" alt="">
    </div>
   
  </div>
</div>
</a>
</template>

<style scoped>
.gradient{
  background: linear-gradient(108deg, #B16CEA 8.00%, #FF5E69 40.00%, #FF8A56 77.00%, #FFA84B 91.00%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
 
}
.title{
  color: #FFF;
font-family: Inter;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: 31.2px; /* 124.8% */
letter-spacing: 0.5px;
}
.date{
  font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 700;
line-height: 13px; /* 100% */
letter-spacing: 4px;
text-transform: uppercase;
}
.link{
  color: #FFF;
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 14px; /* 107.692% */
}
@media screen and (min-width: 1024px){
  .date{
    font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 700;
line-height: 14px; /* 107.692% */
letter-spacing: 4px;
text-transform: uppercase;
  }
  .title{
    color: #FFF;
font-family: Inter;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: 48px; /* 120% */
letter-spacing: 1px;
  }
  .link{
    color: #FFF;
font-family: Inter;
font-size: 17px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 105.882% */
  }
}
</style>
