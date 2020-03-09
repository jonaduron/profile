<template>
    <div class="portfolio container-fluid m-0 p-0">
        <div class="introduction w-100 d-block">
            <Navigation></Navigation>      
            <div class="carousel-caption d-none d-md-block">
                <h1>Welcome to my very own portfolio</h1>
            </div>
        </div>
        <div class="container-fluid text-white">
            <div class="container-fluid"> 
                <div class="row">
                    <div class="col-lg-6">
                        <img class="img-responsive" src="../assets/barbershop.jpg" width="680" height="700">
                    </div>
                    <div class="col-lg-6 bg-primary">
                        <div class="m-4"> 
                           <br><br><br><br><h1><b>BarberShop Santana Sales Manager</b></h1><br><br>
                           <h5>Application to the manage of everyting going on in a barbershop, such as incomes and outcomes,
                             the provider and material management, money administration, and even the contact with the clients.
                             But the main task was to have a following of all the appointments and the contact with the clients.
                             <br><br>
                             This one has been developed using technologies such as: <br>
                             <br><b>.NET</b>
                             <br><b>MySQL</b>
                             <br><b>UML</b>
                           </h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid"> 
                <div class="row">
                    <div class="col-lg-6 bg-warning">
                      <div class="m-4"> 
                        <br><br><br><h1><b>Learning Platform</b></h1><br><br>
                        <h5>This application was made to be used for students and do courses online to improve in the college by using
                          all the necessary tools such as: manage the courses and the time to do them, have a control of what they know 
                          and what they are still missing, and they had also the chance of using artificial intelligence to have a personal
                          path and to be followed in a unique way.<br><br>
                          This application has been developed using technologies such as: <br>
                          <br><b>PHP</b>
                          <br><b>Codeigniter</b>
                          <br><b>MySQL</b>
                          <b>UML</b>
                        </h5>
                      </div>
                    </div>
                    <div class="col-lg-6 m-0 p-0">
                      <img class="img-responsive" src="../assets/learningplatformresize.png" width="640" height="700">
                    </div>
                </div>
            </div>
            <div class="container-fluid"> 
                <div class="row">
                    <div class="col-lg-6">
                      <img class="img-responsive" src="../assets/spacelogo.jpg" width="680" height="700">
                    </div>
                    <div class="col-lg-6 bg-success">
                        <div class="m-4"> 
                          <br><br><br><br><h1><b>Space App</b></h1><br>
                          <h5>This particular application has been created for a special group of persons interested in space
                            and in technology, and everything composed by the universe and all the information we already have
                            about the solar system, the galaxy and the whole universe. From starts, planets and galaxies, until 
                            black holes, meteorites and many other things.<br><br>    
                            This application has been developed using technologies such as: <br>
                            <br><b>Java</b>
                            <br><b>Android Studio</b>
                            <br><b>MongoDB</b>
                            <br><b>API REST</b>
                          </h5>     
                        </div>
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
  background-image: url('../assets/portfolio.jpg');
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