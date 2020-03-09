<template>
    <div class="blog">
        <div class="introduction w-100 d-block">
            <Navigation></Navigation>      
            <div class="carousel-caption d-none d-md-block">
                <h1>Welcome to my blog</h1>
            </div>
        </div>
        <div class="container text-white">
            <div class="container">
              <div class="d-flex flex-column justify-content-center">
                <div class="p-2">
                  <h1 class="my-4 pt-4">My last video</h1>
                  <youtube height="480" width="720" :video-id="videoId" ref="youtube" @playing="playing"></youtube>
                </div>
                <div class="p-2 pt-2">
                  <p>Life as a developer can be scary and exciting at the same time, in my blog I talk about how this life is, <br>how the heroes of nowdays (as me) live every single days of their lives.</p>
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

export default {
  name: 'Blog',
  components: {
      Navigation,
      Footer
  },
  props: {
    
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
  background-image: url('../assets/blog1.jpg');
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