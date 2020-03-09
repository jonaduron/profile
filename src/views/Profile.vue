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
              <img src="../assets/profile2.jpg">
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
          <div class="m-4 p-4">
            <h1>About me</h1>
            <div class="d-flex p-2 justify-content-around w-100">
              <div class="p-2 w-50">
              <div class="m-4">
               <img src="../assets/profile3.jpg" width="400" height="560">
              </div>
              </div>
              <div class="p-2 w-50 m-4">
                <h4 class="m-4 p-4">Random facts about me:</h4>
                  <p><br><br>I used to play soccer and baseball
                    <br>I am a really sports fan
                    <br>I use to dance and sing when I am happy or at whatever time of the day
                    <br>I would love to learn to play piano
                    <br>I love fast food
                    <br>I am 21 years old
                    <br>I am the oldest of my brothers
                  </p> 
              </div>
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