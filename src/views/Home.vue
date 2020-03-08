<template>
  <div class="home"> 
    <div class="introduction w-100 d-block">
      <Navigation></Navigation>      
      <div class="carousel-caption d-none d-md-block">
        <h1>Jonathan Durón</h1>
        <h3>Welcome to my personal website folks</h3>
      </div>
    </div>
    <div class="profile text-white">
        <div class="container-fluid">
          <div class="jumbotron bg-transparent text-center">
            <h2 class="card-title h2">Professional profile</h2>
            <div class="view overlay my-4">
              <img src="../assets/cover.jpg" class="img-fluid" alt="">
            </div>
            <p class="blue-text my-4 font-weight-bold">Know about my studies and career</p>
            <div class="row d-flex justify-content-center">
              <div class="col-xl-7 pb-2">
                <p class="card-text">I have studied in different countries and worked and different projects, here you can know more about me, my story and my profession.</p>
              </div>
            </div>
            <div class="pt-2">
              <button type="button" class="btn btn-primary" @click="goTo('/profile')">Go and see my profile</button>
            </div>
          </div>
        </div>
    </div>  
    <div class="cv w-100 h-100">
      <div class="container text-white">
        <h1 class="card-title">Resumé</h1>
        <div class="two-columns p-2 d-flex justify-content-around">
          <div class="p-2 w-50" style="margin-top: 0px;">
            <img src="../assets/prof.jpg" width="300" height="430">
          </div>
          <div class="p-2 w-50">
            <div class="jumbotron bg-transparent text-white">
              <h4 class="my-4">Know me through my education and profesional path</h4>
              <div class="row d-flex justify-content-center">
                <div class="col-xl-9 pb-2">
                  <p class="card-text">I started studying in my native country, Mexico, where I started loving programming and started doing some really interested projects, then I moved to France where the web technologies became the most important path to my career.</p>
                </div>
              </div>
              <div class="pt-2">
                <button type="button" class="btn btn-primary" @click="goTo('/resume')">See my complete resumé</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
    <div class="portfolio">
      <div>
        <h1 class="text-white">Portfolio</h1>
      </div>  
      <div class="container">
        <div class="d-flex my-4">
          <div class="p-2">
            <div class="card">
              <img class="card-img-top" src="../assets/barbershopresize.jpg">
              <div class="card-body">
                <h5 class="card-title">BarberShop App</h5>
                <!--<p class="card-text">This text is used by example for a true text about a project.</p>-->
              </div>
            </div>
          </div>
          <div class="p-2">
            <div class="card">
              <img class="card-img-top" src="../assets/learningplatformresize.png">
              <div class="card-body">
                <h5 class="card-title">E-Learning Platform</h5>
                <!--<p class="card-text">This text is used by example for a true text about a project.</p>-->
              </div>
            </div>
          </div>
          <div class="p-2">
            <div class="card">
              <img class="card-img-top" src="../assets/spacelogoresize.jpg">
              <div class="card-body">
                <h5 class="card-title">Space Missions App</h5>
                <!--<p class="card-text">This text is used by example for a true text about a project.</p>-->
              </div>
            </div>
          </div>
        </div>
        <div>
          <button class="btn btn-primary my-4" @click="goTo('/portfolio')">See all my projects</button>
        </div>
      </div>
    </div>
    <div class="blog text-white">
      <div class="container">
        <div class="d-flex flex-column justify-content-center">
          <div class="p-2">
            <h1 class="my-4 pt-4">My blog</h1>
            <youtube height="480" width="720" :video-id="videoId" ref="youtube" @playing="playing"></youtube>
          </div>
          <div class="p-2 pt-2">
            <p>Life as a developer can be scary and exciting at the same time, in my blog I talk about how this life is, <br>how the heroes of nowdays (as me) live every single days of their lives.</p>
            <button class="btn btn-primary my-4" @click="goTo('/blog')">Go to blog</button>
          </div>
        </div>
      </div>
    </div>
    <div class="contact text-white">
      <div class="container">
        <section class="mb-4">
          <h2 class="h1-responsive font-weight-bold text-center my-4">Contact me</h2>
          <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact me directly.</p>
          <div class="row">
              <div class="col-md-12 mb-md-0 mb-5">
                  <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                      <div class="row">
                          <div class="col-md-6">
                              <div class="md-form mb-0">
                                  <input type="text" id="name" name="name" class="form-control">
                                  <label for="name" class="">Your name</label>
                              </div>
                          </div>
                          <div class="col-md-6">
                              <div class="md-form mb-0">
                                  <input type="text" id="email" name="email" class="form-control">
                                  <label for="email" class="">Your email</label>
                              </div>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-md-12">
                              <div class="md-form mb-0">
                                  <input type="text" id="subject" name="subject" class="form-control">
                                  <label for="subject" class="">Subject</label>
                              </div>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-md-12">
                              <div class="md-form">
                                  <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                  <label for="message">Your message</label>
                              </div>
                          </div>
                      </div>
                  </form>
                  <div class="text-center text-md-left">
                      <a class="btn btn-primary">Send</a>
                  </div>
                  <div class="status"></div>
              </div>
          </div>
      </section>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navigation,
    Footer
  },
  props: {
    playerVars: {
      type: Object,
      default: function() {
        return { autoplay: 0 }
      }
    }
  },
  data() {
    return {
      videoId: 'nhhZ4QeEnHg'
    }
  },
  methods: {
    playVideo() {
      this.player.playVideo()
    },
    playing() {
      console.log('we are watching')
    },
    goTo(url) {
      this.$router.push(url);
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    }
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