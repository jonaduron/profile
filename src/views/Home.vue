<template>
  <div class="home"> 
    <div class="about me">

    </div>
    <div class="introduction w-100 d-block">
      <Navigation></Navigation>      
      <div class="carousel-caption d-none d-md-block">
        <h1>Jonathan Durón</h1>
        <h3>Welcome to my personal website folks</h3>
      </div>
    </div>
    <div class="profile bg-secondary">
        <div class="container-fluid">
          <div class="jumbotron text-center text-white bg-transparent">
            <h4 class="card-title h4 pb-2"><strong>Professional profile</strong></h4>
            <div class="view overlay my-4">
              <img src="../assets/cover.jpg" class="img-fluid" alt="">
            </div>
            <h5 class="indigo-text h5 mb-4">Me</h5>
            <p class="card-text">I am a Mexican guy who is really interested in technologies, who is always looking for improvement and for getting better as a person and as a professional. I have my mind full of dreams, which I try to come true with day by day work.</p>
            <a class="fa-lg p-2 m-2 li-ic"><i class="fab fa-linkedin-in grey-text"></i></a>
            <a class="fa-lg p-2 m-2 tw-ic"><i class="fab fa-twitter grey-text"></i></a>
            <a class="fa-lg p-2 m-2 fb-ic"><i class="fab fa-facebook-f grey-text"></i></a>
          </div>
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
    </div> 
    <div class="portfolio">
      <div>
        <h1 class="text-white">Portfolio</h1>
      </div>  
      <div class="container-fluid">
        <div class="d-flex my-4">
          <div class="p-2">
            <div class="card">
              <img class="card-img-top" src="https://cdn2.vectorstock.com/i/1000x1000/50/16/code-programming-monitor-simple-logo-template-vector-23925016.jpg">
              <div class="card-body">
                <h5 class="card-title">Project name</h5>
                <p class="card-text">This text is used by example for a true text about a project.</p>
              </div>
            </div>
          </div>
          <div class="p-2">
            <div class="card">
              <img class="card-img-top" src="https://cdn2.vectorstock.com/i/1000x1000/50/16/code-programming-monitor-simple-logo-template-vector-23925016.jpg">
              <div class="card-body">
                <h5 class="card-title">Project name</h5>
                <p class="card-text">This text is used by example for a true text about a project.</p>
              </div>
            </div>
          </div>
          <div class="p-2">
            <div class="card">
              <img class="card-img-top" src="https://cdn2.vectorstock.com/i/1000x1000/50/16/code-programming-monitor-simple-logo-template-vector-23925016.jpg">
              <div class="card-body">
                <h5 class="card-title">Project name</h5>
                <p class="card-text">This text is used by example for a true text about a project.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button class="btn btn-primary">See all my projects</button>
        </div>
      </div>
    </div>
    <div class="blog">
      <div class="container">

      </div>
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