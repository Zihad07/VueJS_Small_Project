<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
     <div class="container">
       <a class="navbar-brand" href="#">GeoMapZ</a>
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>

       <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
         <ul class="navbar-nav ml-auto mt-2 mt-lg-0 pr-5">
           <li class="nav-item active">
             <a class="nav-link" href="#">Signup <span class="sr-only">(current)</span></a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="#">Login</a>
           </li>

         </ul>

       </div>
     </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'navbar',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
