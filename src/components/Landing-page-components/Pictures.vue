<script setup>

</script>

<template>
<div class="w-[315px]  md:w-[870px] lg:w-[1250px] mx-auto">

    <div class="md:flex justify-around md:pt-[165px] md:pb-[86px] lg:w-[1240px]">
     <h2 class="head gradient pt-[50px] md:relative md:bottom-9">Product Manager</h2>
   <h1 class="sub pt-[10px] md:hidden   pb-[34px]">That's me!</h1>
   <p class="pg pb-[34px] md:w-[401px] lg:w-[611px] ">Over the past 7 years, I've worked with a diverse range of clients, from startups to Fortune 10 companies. I love creating products that delight users and help businesses grow.</p>
    </div>

    <div class='pt-[51px] md:hidden'>
        <img class=" w-[351px] h-[316px]" src="../../../img/jimmy.png" />
        <div class="flex"><img class="w-[167.50px] p-[10px] h-[150px] " src="../../../img/jim3.png" />
    <img class="w-[167.50px] p-[10px] h-[150px] " src="../../../img/jim4.png" /></div>
    <img class=" w-[351px] h-[525.81px]" src="../../../img/teach.png" />
    
    </div>

    <div class="hidden md:flex  ">
     <img class="w-[239.53px] h-[358.81px] lg:w-[338px] lg:h-[506px]" src="../../../img/teach.png" />
    <img class="w-[359.31px] h-[359.31px] lg:w-[507px] lg:h-[506px]" src="../../../img/jimmy.png" />
    <div class="flex-col pl-[10px] ">
    <img class="w-[239.55px] h-[194.83px] lg:w-[338px] lg:h-[258px] " src="../../../img/jim3.png" />
    <img class="w-[239.55px]  pt-[10px] h-[148.48px]  lg:w-[338px] lg:h-[258px]" src="../../../img/jim4.png" /></div>
    </div>
</div>
</template>

<style scoped>
.gradient{
  background: linear-gradient(108deg, #B16CEA 8.00%, #FF5E69 40.00%, #FF8A56 77.00%, #FFA84B 91.00%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
 
}
.head{
    font-family: Inter;
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: 22px; /* 100% */
letter-spacing: 4px;
text-transform: uppercase;
}
.pg{
    color: #666;
font-family: Inter;
font-size: 19px;
font-style: normal;
font-weight: 400;
line-height: 36px; /* 189.474% */
}
.sub{
    color: #000;
font-family: Inter;
font-size: 37px;
font-style: normal;
font-weight: 700;
line-height: 48px; /* 129.73% */
letter-spacing: 0.5px;
}
 @media screen and (min-width: 1024px){
 .pg{
    color: #666;
font-family: Inter;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: 40px; /* 181.818% */
 }
 }
</style>
