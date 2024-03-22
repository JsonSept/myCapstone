<template class="bg">
  <div class="animate__animated animate__bounce animate__delay-2s" id="contain">
  <div class="about-page">
    <div class="card2">
<img class="img1" src="https://i.ibb.co/hy5z6s2/R.jpg" alt="">
    </div>
    <!-- <div class="animate__animated animate__bounce animate__delay-2s">Example</div> -->
    <div class="card3">
      <div class="overflow-y-auto">
      <p>At JS Pastry, we believe that every delightful bite tells a story. Our passion for baking transcends mere ingredients; it's an art form that we pour into every cake, pastry, and confection we create.
    From the flaky layers of our croissants to the velvety richness of our chocolate ganache cakes, each treat is a labor of love. Our team of skilled bakers and pastry artists infuse their creativity into every dessert, ensuring that your taste buds embark on a sweet adventure.
    JS Pastry is more than a bakery; it's a haven for those who seek comfort in the aroma of freshly baked goods. Whether you're celebrating life's milestones or simply indulging in a midday treat, we're here to make your moments memorable.
    Join us as we whisk together flour, sugar, and dreams, crafting joy one pastry at a time.
    Remember, life is short—eat dessert first!</p>
  </div>
</div>
 
</div>
</div>
</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

<style>

.overflow-y-auto{
  property: overflow-y;
  values: auto hidden visible scroll;
}

.card3 {
  color:white;
  backdrop-filter: blur(5px) saturate(100%);
    -webkit-backdrop-filter: blur(100px) saturate(200%);
    background-color: rgba(17, 25, 40, 0.83);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    width:100%;
    height: 58vh;
    box-shadow: 1px 1px 5px rgb(255, 255, 255);
    margin-left: 30%;
    

}
.about-page {
text-align: center;
justify-content: center;
display: flex;
  color: white;
  background-size: cover;
  padding: 5%;
  padding-bottom: 5%;
}
.img1 {
  border-radius: 100px;
  height: 60%;
  width:100%;
}
.card {

flex-wrap: nowrap;
/* padding: 20px; */
height : 70vh;

border:1px solid black;
}
.card2 .card3 {
  width: 50%;
}
.card3:hover {
  box-shadow: 1px 1px 5px rgb(255, 255, 255);
}

:root {
  --animate-delay: .01s;
}

/* All delay classes will take half the time to start */
:root {
  --animate-delay: 0.1s;
}
</style>