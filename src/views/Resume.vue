<template>
    <div class="resume">
        <div class="introduction w-100 d-block">
            <Navigation></Navigation>      
            <div class="carousel-caption d-none d-md-block">
                <h1>Jonathan Durón</h1>
                <h3>Welcome to my personal website folks</h3>
            </div>
        </div>
        <div class="container text-white">
            
        </div>
        <Footer></Footer>
    </div>    
</template>

<script>
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default {
  name: 'Resume',
  components: {
      Navigation,
      Footer
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
  background-image: url('https://businessfirstfamily.com/wp-content/uploads/2016/03/online-coding-classes-example.jpg');
  min-height: 350px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.carousel-caption {
  margin-bottom: 100px;
}
</style>