<template>
  <div class="footer text-white">
    <footer class="page-footer font-small indigo">
  <div class="container">
    <div class="row text-center d-flex justify-content-center pt-5 mb-3">
      <div class="col-md-2 mb-3">
        <h6 class="text-uppercase font-weight-bold">
          <b-link class="nav-link" to="/">Home</b-link>
        </h6>
      </div>
      <div class="col-md-2 mb-3">
        <h6 class="text-uppercase font-weight-bold">
          <b-link class="nav-link" to="/profile">Profile</b-link>
        </h6>
      </div>
      <div class="col-md-2 mb-3">
        <h6 class="text-uppercase font-weight-bold">
          <b-link class="nav-link" to="/resume">Resumé</b-link>
        </h6>
      </div>
      <div class="col-md-2 mb-3">
        <h6 class="text-uppercase font-weight-bold">
          <b-link class="nav-link" to="/portfolio">Portfolio</b-link>
        </h6>
      </div>
      <div class="col-md-2 mb-3">
        <h6 class="text-uppercase font-weight-bold">
          <b-link class="nav-link" to="/blog">Blog</b-link>
        </h6>
      </div><div class="col-md-2 mb-3">
        <h6 class="text-uppercase font-weight-bold">
          <b-link class="nav-link" to="/blog">Contact</b-link>
        </h6>
      </div>
    </div>
    <hr class="rgba-white-light" style="margin: 0 15%;">
    <div class="row d-flex text-center justify-content-center mb-md-0 mb-4">
      <div class="col-md-8 col-12 mt-3">
        <p style="line-height: 1.7rem">If you want to know me better go to my social network profiles,
          I post stuff about my professional and personal live, so go and follow me and you can even 
          contact me through them.
        </p>
      </div>
    </div>
    <hr class="clearfix d-md-none rgba-white-light" style="margin: 10% 15% 5%;">
    <div class="row pb-3">
      <div class="col-sm-12">
        <div class="mb-5 flex-center">
          <div class="d-flex justify-content-center">
            <div class="icon">
              <img width="50" height="50" src="https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/facebook_icon-128.png">
            </div>  
            <div class="icon">
              <img width="50" height="50" src="https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/Twitter_icon-128.png">
            </div>  
            <div class="icon">
              <img width="50" height="50" src="https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/instagram_icon-128.png">
            </div>  
            <div class="icon">
              <img width="50" height="50" src="https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/You_Tube_icon-128.png">
            </div>
            <div class="icon">
              <img width="50" height="50" src="https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/Linkedin_icon-128.png">
            </div>
          </div>  
        </div>
      </div>
    </div>
  </div>
  <div class="footer-copyright text-center py-3 text-dark bg-white">© 2020 Copyright - Jonathan Durón - All Rights Reserved
  </div>
</footer>
  </div>
</template>

<script>

export default {
  name: 'Footer',
  components: {
    
  }
}
</script>

<style scoped>
.icon {
  margin: 5px;
}
</style>