<script setup>

</script>

<template>
  <div class="w-[100%] px-[10px] bg-black">
   <div class="mx-auto w-[351px] md:w-[870px] pt-[60px] md:pt-[150px] pb-[80px] ">
    <h1 class="w-[239px] md:w-[629px]">Want to make awesome products?</h1>
    <h1 class="gradient">Let's get in touch</h1>
   </div>
   <div class="mx-auto w-[351px] md:w-[870px] md:flex ">
    <div>
    <img src="../../img/footerlogo.png" class="pb-[12px]" alt="">
    <p class="email">justintsn10@gmail.com</p>
    </div>
    <div class="h-[65px] mt-[84px] flex md:hidden">
        <ul class="flex-col space-y-[28px]">
            <li>Blog</li>
            <li>Linkedin</li>
        </ul>
        <ul class="flex-col pl-[156px] space-y-[28px] md:flex-row">
            <li>Projects</li>
            <li>Resume</li>
        </ul>
    </div>
    <div class="w-[405px] pl-[116px] hidden md:block">
     <ul class="flex justify-between">
        <li>Blog</li>
        <li>Projects</li>
        <li>Linkedin</li>
     </ul>
      <ul class="pt-[40px]">
        <li>Contact</li>
      </ul>
    </div>

   
</div>
  <p class="last mt-[169px] w-[870px] mx-auto">Justin Hinh | Product Manager</p>
   
  </div>
</template>

<style scoped>
h1{
    color: #FFF;
font-family: Inter;
font-size: 35px;
font-style: normal;
font-weight: 700;
line-height: 43.2px; /* 123.429% */
letter-spacing: 0.5px;
}
.email{
    color: #5C5C5C;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 36px; /* 225% */
}
.gradient{
    font-family: Inter;
font-size: 29px;
font-style: normal;
font-weight: 700;
line-height: 33px; /* 113.793% */
letter-spacing: 0.5px;
 background: linear-gradient(108deg, #B16CEA 8.00%, #FF5E69 40.00%, #FF8A56 77.00%, #FFA84B 91.00%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
 
}
li{
    color: #FFF;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 100% */
}
.last{
    color: #8A95AD;
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 21px;
}
@media screen and (min-width: 1024px){
    h1{
        color: #FFF;
font-family: Inter;
font-size: 54px;
font-style: normal;
font-weight: 700;
line-height: 59.4px; /* 110% */
letter-spacing: 1px;
    }
    .gradient{
        color: #FFF;
font-family: Inter;
font-size: 54px;
font-style: normal;
font-weight: 700;
line-height: 59.4px; /* 110% */
letter-spacing: 1px;
    }
}

</style>
