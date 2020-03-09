<template>
  <div id="gmap">
    <div class="container">
      <div class="google-map" id="map"></div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Gmap',
    data() {
      return {
        lat: 23.8 ,
        lng: 90.4
      }
    },
    methods:{
      renderMap(){
        const map = new google.maps.Map(document.getElementById('map'),{
          center:{lat:this.lat,lng:this.lng},
          zoom:6,
          maxZoom:15,
          minZoom:3,
          streetViewControl:false

        })
      }
    },
    mounted() {
      this.renderMap()
    }
  }
</script>

<style scoped>
  .google-map {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

  }
</style>
