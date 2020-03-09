<template>
<div class="edit-smoothie container">
  <h2>Edit Smoothie</h2>
  <form v-if="smoothie" @submit.prevent="editSmoothie" class="form">
    <div class="field title">
      <label for="title">Smoothie Title</label>
      <input type="text" name="title" id="title" v-model="smoothie.title">
    </div>

    <div class="field"
         v-for="(ing,index) in smoothie.ingredients" :key="index"
    >
      <label for="an-ingredient">An ingredient</label>
      <input type="text"  v-model="smoothie.ingredients[index]" name="an-ingredient" id="an-ingredient">

      <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
    </div>

    <div class="field add-ingredient">
      <label for="add-ingredient">Add an ingredient</label>
      <input type="text" @keydown.enter.prevent="addIng" v-model="another" name="add-ingredient" id="add-ingredient">
    </div>

    <div class="field center-align">
      <p v-if="feedback" class="red-text">{{ feedback }}</p>
      <button class="btn pink">Update Smoothie</button>
    </div>
  </form>
</div>
</template>

<script >
  import db from '@/firebase/init'
  import slugify from 'slugify'
  export default {
    name:'EditSmoothie',
    data() {
      return {
        smoothie:null,
        another: null,
        feedback:null

      }
    },

    created() {
      let ref = db.collection('smoothies').where('slug','==',this
      .$route.params.smoothie_slug)

      ref.get().then((snapshot)=>{
        snapshot.forEach(doc=>{
          // console.log(doc.data())
          this.smoothie = doc.data()
          this.smoothie.id=doc.id
        })
      }).catch(err=> {alert(err)})
    },

    methods: {
      editSmoothie(){
        // console.log(this.smoothie)
        if(this.smoothie.title){
          this.feedback = null
          //  Create Slug
          this.smoothie.slug = slugify(this.smoothie.title,{
            replacement:'-',
            remove:/[*+~.()'"!^:@]/g,
            lower:true
          });
          // console.log(this.slug)
          db.collection('smoothies').doc(this.smoothie.id).update({
            title: this.smoothie.title,
            ingredients: this.smoothie.ingredients,
            slug: this.smoothie.slug
          }).then(()=>{
            this.$router.push({name:'Index'})
          }).catch(err=>{
            alert(err)
          })
        }else{
          this.feedback = "You must enter a smoothie title"
        }
      },
      addIng(){
        if(this.another){
          this.smoothie.ingredients.push(this.another)
          this.another = null
          this.feedback = null
        } else {
          this.feedback = "You must enter a value to add an ingredient"
        }
      }
    ,
      deleteIng(ing){
          this.smoothie.ingredients = this.smoothie.ingredients.filter(item=>{
            return item != ing
          })
      }

    }

  }
</script>

<style scoped>
 .edit-smoothie {
   margin-top: 20px;
   max-width: 500px;
   padding: 10px;
   border: 1px solid gray;
   border-radius: 5px;
 }

 .edit-smoothie h2 {
   font-size: 20px;
   /*margin: 0;*/
   text-transform: uppercase;
 }
  .form {
    padding: 10px;
  }

  .btn {
    border-radius: 20px !important;
  }

  .edit-smoothie .field {
    position: relative;
  }

  .edit-smoothie .delete {
    position: absolute;
    right: 0;
    bottom: 16px;
    color: #aaa;
    font-size: 1.4rem;
    cursor: pointer;
  }

</style>
