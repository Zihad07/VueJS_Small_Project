<template>

  <div class="navbar">
   <div class="contianer">
     <nav class="nav-extended  blue lighten-3">
       <div class="nav-content">
         <router-link :to="{name:'Index'}">
           <span class="nav-title">Z-Smoothies</span>
         </router-link>
         <a class="btn-floating btn-large halfway-fab waves-effect waves-light teal">
           <router-link :to="{name:'AddSmoothie'}">
             <i class="material-icons">add</i>
           </router-link>
         </a>
       </div>
     </nav>
   </div>
  </div>
</template>

<script >
  export default {
    name:'Navbar',
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  .navbar nav {
    padding: 0 5%;
  }
</style>
