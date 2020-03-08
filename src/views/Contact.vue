<template>
    <div class="contact">
        <div class="introduction w-100 d-block">
            <Navigation></Navigation>      
            <div class="carousel-caption d-none d-md-block">
                <h1>Jonathan Durón</h1>
                <h3>Welcome to my personal website folks</h3>
            </div>
        </div>
        <div class="text-white">
        <div class="container">
            <section class="mb-4 my-4">
            <h2 class="h1-responsive font-weight-bold text-center my-4">Contact me</h2>
            <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                a matter of hours to help you.</p>
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
                            <a class="btn btn-primary">Send information</a>
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
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default {
  name: 'Contact',
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