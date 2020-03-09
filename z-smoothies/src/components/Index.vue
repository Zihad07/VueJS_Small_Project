<template>
  <div class="index container">
    <div class="card deep-purple lighten-2"
    v-for="smoothie in smoothies" :key="smoothie.id"
    >
      <div class="card-content">
        <i class="material-icons delete" @click="deleteSmoothie(smoothie.id)">delete</i>
        <span class="card-title">{{smoothie.title}}</span>
        <ul class="ingredients">
          <li v-for="(ing,index) in smoothie.ingredients" :key="index">
            <span class="chip">{{ing}}</span>
          </li>
        </ul>
      </div>
      <span class="btn-floating btn-large halfway-fab pink">
        <router-link :to="{name: 'EditSmoothie', params:{smoothie_slug:smoothie.slug}}">
          <i class="material-icons edit">edit</i>
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
  import db from  '@/firebase/init'
export default {
  name: 'Index',
  data () {
    return {
      smoothies:[],
    }
  },

  created(){
  //  fetch data from the firbase
      db.collection('smoothies').get()
    .then(snapshot=>{
      snapshot.forEach(doc=>{
        // console.log(doc.data(),doc.id)
        let smoothie = doc.data()
        smoothie.id  = doc.id
        this.smoothies.push(smoothie)

      })
    })
  },

  methods: {
    deleteSmoothie(id) {
      // delete a smoothie form fire base
      db.collection('smoothies').doc(id).delete()
      .then(()=>{
        this.smoothies = this.smoothies.filter(smoothie=>{return smoothie.id != id})
      });
      // console.log(id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    margin-top: 20px;
  }

  .card-title {
    font-weight: bold;
  }

  .ingredients {
    margin: 1.5rem auto;
  }

  .ingredients li {
    display: inline-block;
  }

  .index .delete {
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
    color: #e53935;
    font-size: 20px;
  }
</style>
