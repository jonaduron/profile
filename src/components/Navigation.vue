<template>
  <div class="navigation">
    <div>
        <nav class="navbar navbar-expand-md fixed-top navbar-dark main-nav">
            <div class="container">
                <div>
                    <img src="../assets/transparent-logo.png" width="50" height="50">
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="nav navbar-nav mx-auto">
                        <li class="nav-item active">
                            <b-link class="nav-link" to="/home">Home</b-link>
                        </li>
                        <li class="nav-item">
                            <b-link class="nav-link" to="/cv">Resumé</b-link>
                        </li>
                        <li class="nav-item">
                            <b-link class="nav-link" to="/portfolio">Portfolio</b-link>
                        </li>
                        <li class="nav-item">
                            <b-link class="nav-link" to="/blog">Blog</b-link>
                        </li>
                        <li class="nav-item">
                            <b-link class="nav-link" to="/about_me">About me</b-link>
                        </li>
                        <li class="nav-item">
                            <b-link class="nav-link" to="/contact">Contact</b-link>
                        </li>
                    </ul>
                </div>    
            </div>
        </nav>
    </div>    
  </div>
</template>

<script>

export default {
  name: 'Navigation',
  components: {
    
  }
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
}
.nav-item {
    margin-left: 10px;
    margin-right: 10px;
    font-weight: bold;
}
.navbar {  
  background-position: auto,center top;
  background-color: rgb(black, black, black);
}
</style>
