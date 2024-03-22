<template class="bg">
  <div class="animate__animated animate__bounce animate__delay-2s" id="contain">
    <div class="aboutCard">
      <div class="aboutPage">
      <p>At JS Pastry, we believe that every delightful bite tells a story. Our passion for baking transcends mere ingredients; it's an art form that we pour into every cake, pastry, and confection we create.
    From the flaky layers of our croissants to the velvety richness of our chocolate ganache cakes, each treat is a labor of love. Our team of skilled bakers and pastry artists infuse their creativity into every dessert, ensuring that your taste buds embark on a sweet adventure.
    JS Pastry is more than a bakery; it's a haven for those who seek comfort in the aroma of freshly baked goods. Whether you're celebrating life's milestones or simply indulging in a midday treat, we're here to make your moments memorable.
    Join us as we whisk together flour, sugar, and dreams, crafting joy one pastry at a time.
    Remember, life is short—eat dessert first!</p>
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

.aboutCard {
  margin-bottom: 20%;
}

.card3 {
  font-size: 15px;
  color:white;
  backdrop-filter: blur(5px) saturate(100%);
    -webkit-backdrop-filter: blur(100px) saturate(200%);
    background-color: rgba(17, 25, 40, 0.83);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    width:100%;
    height: 53vh;
    box-shadow: 1px 1px 5px rgb(255, 255, 255);
    margin-left: 30%;
    

}

@media screen and (max-width: 300px) {
.aboutPage {
  width: 280px;
  font-size: 30px;
  padding-top: 60%;
 }
.aboutCard {
  margin-top: 40%;
}
p {
  font-size: 1px;
}

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

height : 70vh;
font-size: 1px;

border:1px solid black;
}

.aboutCard:hover {
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