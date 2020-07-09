<template>
  <div>
    <div class="hero">
      <div class="hero__image" alt="Logo">
        <div class="hero__overlay">
          <h1>
            Find Out About Our Awesome
            <br class="break" />Dog breeds
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero {
  height: 410px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: unset;
  background-size: contain;
  background-color: #2d283e;
  margin-top: 4rem;
}
.hero__image {
  height: 306px;
  width: 100%;
  background-image: url("../images/dog-hero.png");
  background-size: contain;
  background-position: center 24%;
  background-repeat: no-repeat;
}

.hero__overlay {
  height: 410px;
  width: 100%;
  background-color: #2d283e52;
  display: flex;
  align-items: flex-end;
}
.hero__overlay h1 {
  
  text-align: center;
  color: #f2f2f2;
  font-size: 22px;
  text-transform: uppercase;
  line-height: 1.5;
  letter-spacing: 2px;
  width: 100%;
  padding: 0 1rem 2rem 1rem;
}
.break {
  display: none;
}

@media (min-width: 800px) {
  .hero {
    height: 450px;
  }

  .hero__image {
    height: 450px;
    background-position: unset;
  }
  .break {
    display: block;
  }
  .hero__overlay {
    height: 450px;
    width: 100%;
    background-color: #2d283e52;
    align-items: flex-start;
    justify-content: flex-end;
  }
  .hero__overlay h1 {
    text-align: right;
    font-size: 40px;
    padding: 10rem 5rem 0 0;
  }
}

@media (min-width: 800px) and (max-width: 1210px) {
  .hero__image {
    height: 345px;
    background-position: unset;
  }

  .hero {
    height: 345px;
  }

  .hero__overlay {
    height: 345px;
  }

  .hero__overlay h1 {
    width: 50%;
    text-align: right;
    font-size: 25px;
    padding: 10rem 2rem 0 0;
  }
  .break {
    display: none;
  }
}
</style>
