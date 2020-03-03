<template>
  <div class="home"> 
    <div class="introduction w-100 d-block">
      <Navigation></Navigation>      
      <div class="carousel-caption d-none d-md-block">
        <h1>Jonathan Durón</h1>
        <h3>Welcome to my personal website folks</h3>
      </div>
    </div>
    <div class="cv w-100 h-100">
      <div class="two-columns p-2 d-flex justify-content-around">
        <div class="p-2 w-50">
          <img src="../assets/prof.jpg" width="300" height="450">
        </div>
        <div class="p-2 w-50">
          <div class="jumbotron bg-transparent text-white">
            <h1 class="card-title">Resumé</h1>
            <h4 class="my-4">Know me through my education and profesional path</h4>
            <div class="row d-flex justify-content-center">
              <div class="col-xl-7 pb-2">
                <p class="card-text">I started studying in my native country, Mexico, where I started loving programming and started doing some really interested projects, then I moved to France where the web technologies became the most important path to my career.</p>
              </div>
            </div>
            <hr class="my-4 rgba-white-light">
            <div class="pt-2">
              <button type="button" class="btn btn-primary">See my complete resumé<i class="fas fa-download ml-1"></i></button>
            </div>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>     
    <div class="portfolio">
      
    </div>
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';

export default {
  name: 'Home',
  components: {
    Navigation
  }
}
</script>
<style scoped>
.introduction {
  background-image: url('https://businessfirstfamily.com/wp-content/uploads/2016/03/online-coding-classes-example.jpg');
  min-height: 630px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.carousel-caption {
  margin-bottom: 100px;
}
</style>