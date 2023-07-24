<script setup>

</script>

<template>
  <div class="bg-black footer    w-[100%]">
    <div class="w-[315px] pb-[110px]   md:w-[890px] lg:w-[1215px] md:flex justify-around mx-auto">
    <div class="w-[351px] pb-[80px] ">
        <h2 class=" gradient blog pb-[17px]">Blog</h2>
        <h1 class="late pb-[29px]">Latest Blog</h1>
        <div class="flex pl-[49px] md:pl-0">
            <p class="view pr-[19px]">View all</p>
            <img src="../../../img/ic.png" alt="">
        </div>
    </div>
    <div class="second w-[351px] md:w-[500px] lg:w-[692px]">
        <p class="date pb-[23px]">April 11, 2022  .5 minuites</p>
        <h2 class="sub pb-[32px]">Goodbye New York City</h2>
        <div class="flex pl-[49px] md:pl-0 pb-[24px] ">
            <p class="view pr-[19px]">Read the article</p>
            <img src="../../../img/ic.png" alt="">
        </div>
       
    </div>
  </div></div>
</template>

<style scoped>
.second{
    border-bottom: 2px solid gray;
}
.footer{
    padding: 43px 19.5px 0px 19.5px; 
}
.sub{
    color: #FFF;
font-family: Inter;
font-size: 21px;
font-style: normal;
font-weight: 700;
line-height: 30px; /* 142.857% */
}
.date{
    color: rgba(255, 255, 255, 0.70);
font-family: Inter;
font-size: 15px;
font-style: normal;
font-weight: 300;
line-height: 16px; /* 106.667% */
}
.blog{
    font-family: Inter;
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: 22px; /* 100% */
letter-spacing: 4px;
text-transform: uppercase; 
}
.gradient{
  background: linear-gradient(108deg, #B16CEA 8.00%, #FF5E69 40.00%, #FF8A56 77.00%, #FFA84B 91.00%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
 
}
.view{
    color: #FFF;
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 14px; /* 107.692% */
}
.late{
    color: #FFF;
font-family: Inter;
font-size: 39px;
font-style: normal;
font-weight: 700;
line-height: 48px; /* 123.077% */
letter-spacing: 0.5px;
}

 @media screen and (min-width: 1024px){

    .date{
        color: rgba(255, 255, 255, 0.70);
font-family: Inter;
font-size: 15px;
font-style: normal;
font-weight: 300;
line-height: 16px; /* 106.667% */
    }
    .sub{
        color: #FFF;
font-family: Inter;
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: 36px; /* 133.333% */
    }
    
      .footer{
        padding: 200px 76.813px 0px 76.797px; 
      }
      .late{
        width: 168px;
        color: #FFF;
font-family: Inter;
font-size: 53px;
font-style: normal;
font-weight: 700;
line-height: 59.4px; /* 112.075% */
letter-spacing: 1px;
      }
 }
</style>
