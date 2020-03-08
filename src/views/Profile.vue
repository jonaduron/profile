<template>
    <div class="profile">
        <div class="introduction w-100 d-block">
            <Navigation></Navigation>      
            <div class="carousel-caption d-none d-md-block">
                <h1>Welcome to my professional profile</h1>
            </div>
        </div>
        <div class="container text-white">
          <h1 class="my-4">Who am I?</h1>
            <div class="d-flex w-100 justify-content-around">
              <div class="p-2 w-50"> 
                <div>
                  <h3 class="my-4 p-4">Just an introduction</h3>
                  <p class="my-4 p-4">Born and raised in México, I has always been someone interested in helping others and in improving myself.
                    <br>
                    <br>
                    I have always dreamed big, inspired by many others who have made awesome things through time. I am today making things in my very own way and I am so happy to share it with you.
                  </p>
                </div>
              </div>
              <div class="p-2 w-50">
                <img src="../assets/profile1.jpg" width="360" height="500">
              </div>
            </div>
          <h1 class="my-4">A more detailed explanation</h1>
          <div class="">
            <div class="p-2">
              
            </div>
            <div class="p-2">
              <p>I am 21 years old and I’m currently studying web development in France. 
                Before I came here I spent two really good years of my life at a university in Mexico. 
                There, I learned the fundamentals about programming, networking, design and the French language. 
                Now in the Gallic country I have learned many different things such as web services, API 
                development and everything related to website creation. I can be described as a person who faces
                the problems and the challenges always with a smile. I am able to work efficiently on my own but
                also in a team, and I can take the lead to do awesome things. After doing some interesting projects, 
                I can say I am ready to start working and to turn great ideas into reality.</p>
            </div>
          </div>
          <div class="w-100">
            <h1>About me</h1>
            <div class="w-50">
              <div>
                <p>I have a lot of passions, as traveling, dancing and many other things, you can follow me on my facebook or instagram to know me better.</p> 
              </div>
            </div>
            <div class="w-50">
              <vue-instagram token="youraccessTokenHere" username="UsernameHere" :count="3">
                <template slot="feeds" scope="props">
                    <li class="instagram-media fancy-list"> {{ props.feed.link }} </li>
                    <img :src=" props.feed.images.standard_resolution.url " alt="">
                </template>
                <template slot="error" scope="props">
                    <div class="fancy-alert"> {{ props.error.error_message }} </div>
                </template>
              </vue-instagram>
            </div>
          </div>
        </div>
        <Footer></Footer>
    </div>    
</template>

<script>
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import VueInstagram from 'vue-instagram'

export default {
  name: 'AboutMe',
  components: {
      Navigation,
      Footer,
      VueInstagram
  },
  props: {
    
  },
  data() {
    return {

    }
  },
  methods: {
    
  },
  computed: {
    
  }
}
</script>
<style scoped>
.introduction {
  background-image: url('../assets/profile-background.jpg');
  min-height: 600px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.carousel-caption {
  margin-bottom: 100px;
}
</style>