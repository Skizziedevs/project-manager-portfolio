<script setup>
</script>

<template>
  <div class="mx-auto w-[351px] pt-[25px] md:pt-[112px] md:flex md:w-[870px] lg:w-[1215px] justify-between">
    <div class="md:w-[387px] lg:w-[527px] lg:pt-[92px] ">
      <span class="gradient hero">i build products</span>
      <h1 class="w-[266px] md:w-[387px] lg:w-[527px] hero">that delight and inspire people</h1>

      <p class="paragraph pt-[28px] md:text-[22px] w-[304px]">
        Hello! I’m Justin, a Product Manager based in Denver, Colorado.
      </p>
      <p class="cv pt-[26px] md:text-[23px]">Download cv</p>
    </div>

    <div class="pt-[31px]">
      <img src="../../../img/jim.png" class="md:hidden" alt="" />
      <img src="../../../img/jimmd.png" class="md:block hidden lg:hidden" alt="" />
      <img src="../../../img/large.png" class="hidden w-[500px]  lg:block" alt="" />
    </div>
  </div>
</template>

<style scoped>
.hero {
  font-family: Inter;
  font-size: 41px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px; /* 115.789% */
  letter-spacing: -2px;
}

.gradient {
  background: linear-gradient(
    108deg,
    #b16cea 8%,
    #ff5e69 40%,
    #ff8a56 77%,
    #ffa84b 91%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.paragraph {
  color: #666;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 28.5px; /* 167.647% */
}
.cv {
  color: #000;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
}
@media screen and (min-width: 1024px){
  .hero{
   font-family: Inter;
font-size: 72px;
font-style: normal;
font-weight: 700;
line-height: 82.5px; /* 114.583% */
letter-spacing: -2px;
  }
 }
 @media screen and (min-width: 1900px){
  .hero{
    font-family: Inter;
font-size: 72px;
font-style: normal;
font-weight: 700;
line-height: 82.5px; /* 114.583% */
letter-spacing: -2px;
  }
 }
</style>
