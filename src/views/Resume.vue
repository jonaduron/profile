<template>
    <div class="resume">
        <div class="introduction w-100 d-block">
            <Navigation></Navigation>      
            <div class="carousel-caption d-none d-md-block">
                <h1>Welcome to my very own resume</h1>
            </div>
        </div>
        <div class="container text-white">
            <div class="my-4">
              <h1>About me</h1>
              <div class="d-flex w-100 justify-content-around p-2">
                <div class="p-2 w-50">
                  <img src="../assets/resume2.jpg" width="300" height="400">
                </div>
                <div class="p-2 w-50 my-4 py-4">
                  <p>I am a foreign student in Nancy, France and now I am searching a company to do my internship.<br><br>
                    I study a Bachelor's Degree in Web Services and Applications Development. I have already had the chance to 
                    make really interested projects and that has actually given me the opportunity to go beyond and improve myself working for yout enterprise.
                  </p>
                </div>
              </div>
            </div>
            <div class="my-4">
              <h1>Professional experience</h1>
              <div class="d-flex w-100 justify-content-around p-2">
                <div class="p-2 w-50">
                  <img src="../assets/resume3.jpg" width="300" height="400">
                </div>
                <div class="text-left p-2 w-50 my-4 py-4">
                  <p><b>Developer</b> January - June 2019 <br>
                  At the Universidad Tecnológica de Aguascalientes<br>
                  <br>Make the design and the model of an application to take online courses for the university, program the client and server side with the PHP framework, Codeigniter, using and API to connect to the database.</p>
                  <p> <br><b>Bilingual agent</b> 2017 - 2018 <br>
                  At Teleperformance<br>
                  <br>Perform technical assistance for cable, telephone and above all Internet services to customers with computer software and an intranet service as well.
                  </p>
                </div>
              </div>
            </div>
            <div class="my-4">
              <h1>Education</h1>
              <div class="d-flex w-100 justify-content-around p-2">
                <div class="p-2 w-50">
                  <img src="../assets/resume4.png" width="300" height="400">
                </div>
                <div class="text-left p-2 w-">
                  <p><b>Bachelor's Degree</b> 2019 - 2020 (In progress) <br><br>
                  At the Institut Universitaire de Technologie Nancy-Charlemagne<br>
                  <b><br>Career name:</b><br>Bachelor's Degree in Modeling and Design of Web Services and Applications 
                  <p><br><br><b>Foundation Degree</b> 2017 - 2019 <br><br>
                  At the Universidad Tecnológica de Aguascalientes<br>
                  <br><b>Career name:</b><br>Senior university technician in computer systems
                  </p>
                </div>
              </div>
            </div>
            <div class="my-4">
              <h1>Qualifications</h1>
              <div class="d-flex w-100 justify-content-around p-2">
                <div class="p-2 w-50 mt-4 pt-4">
                  <img src="../assets/resume6.jpg" width="300" height="400">
                </div>
                <div class="text-left p-2 w-50">
                  <p><b>Web development</b><br>
                    Web documents integration using <b>HTML5, CSS3, layout, SASS, CSS Grid</b><br>
                    Develop frontend web applications: <b>JavaScript</b> (functions, objects, events, asynchrone programming), <b>DOM, Ajax</b> (web services access), framework UI <b>JQuery </b>and<b> VueJS</b><br>
                    Develop backend web applications: <b>MVC,</b> URL routing, micro-framework, ORM, sessions, authentification, <b>PHP</b> security, <b>NodeJS</b>
                  </p>
                  <p><b>Mobile and desktop development</b><br>
                    Develop mobile applications: <b>Android Studio</b> using <b>Java</b><br>
                    Develop desktop applications: <b>Visual Studio</b> with <b>.NET</b> and <b>Netbeans </b>with <b>Java</b><br>
                    Develop hybrid mobile applications: <b>NativeScript</b>                   
                  </p> 
                  <p><b>General IT qualifications</b><br>
                    Manage projects with a versionning system such as <b>Git, Github</b> and <b>Bitbucket</b><br>
                    Create and manage web services and web micro-services <b>REST</b> principles, build Restful APIs and manage <b>JSON</b> and <b>XML</b> data.<br>
                    Analyse and design applications using <b>UML</b> diagrams<br>
                    Manage applications and processesusing <b>Docker</b> and <b>Docker-Compose</b><br>
                    Apache management and working poste management knowledge<br>
                    Manage relational and non-relational databases such as <b>MySQL </b> and <b>MongoDB </b>, use <b>ORM</b>
                  </p>
                </div>
              </div>
            </div>
            <div class="my-4">
              <h1>Skills</h1>
              <div class="d-flex w-100 justify-content-around p-2">
                <div class="p-2 w-50">
                  <img src="../assets/resume5.jpg" width="300" height="400">
                </div>
                <div class="text-left p-2 mt-4 pt-4">
                  <ul>
                    <li class="mt-4">
                      <h4><b>Interpersonal communication</b></h4>
                    </li>
                    <li class="mt-4">
                      <h4><b>Autonomy and teamwork</b></h4>
                    </li>
                    <li class="mt-4">
                      <h4><b>Leadership skills</b></h4>
                    </li>
                    <li class="mt-4">
                      <h4><b>Under pressure work</b></h4>
                    </li>
                    <li class="mt-4">
                      <h4><b>Emergent technologies appropiation</b></h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="my-4">
              <h1>Languages</h1>
              <div class="d-flex w-100 justify-content-around p-2">
                <div class="p-2 w-50">
                  <img src="../assets/resume7.jpg" width="300" height="400">
                </div>
                <div class="p-2 w-50">
                  <h2 class="mt-4 pt-4"><b>Spanish</b></h2>
                  <h2 class="mt-4 pt-4"><b>English</b></h2>
                  <h2 class="mt-4 pt-4"><b>French</b></h2>
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
  background-image: url('../assets/resume1.jpg');
  min-height: 600px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.carousel-caption {
  margin-bottom: 100px;
}
li {
  list-style: none;
}
</style>