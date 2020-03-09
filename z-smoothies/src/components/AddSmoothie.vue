<template>
  <div class="add-smoothie container">
    <h2 class="center-align indigo-text">Add New Smoothie Receipe</h2>

    <form @submit.prevent="addSubmit" class="form">
      <div class="field title">
        <label for="title">Smoothie Title</label>
        <input type="text" name="title" id="title" v-model="title">
      </div>

      <div class="field"
      v-for="(ing,index) in ingredients" :key="index"
      >
        <label for="an-ingredient">An ingredient</label>
        <input type="text"  v-model="ingredients[index]" name="an-ingredient" id="an-ingredient">

        <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
      </div>

      <div class="field add-ingredient">
        <label for="add-ingredient">Add an ingredient</label>
        <input type="text" @keydown.enter.prevent="addIng" v-model="another" name="add-ingredient" id="add-ingredient">
      </div>

      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn pink">Add Smoothie</button>
      </div>
    </form>
  </div>
</template>

<script >
  import db from '@/firebase/init'
  import slugify from 'slugify'
  export default {
    name:'AddSmoothie',
    data() {
      return {
        title: null,
        another:null,
        ingredients:[],
        feedback:null,
        slug:null
      }
    },

    methods: {
      addSubmit(){
        // console.log(this.title,this.ingredients)
        if(this.title){
          this.feedback = null
        //  Create Slug
          this.slug = slugify(this.title,{
            replacement:'-',
            remove:/[*+~.()'"!^:@]/g,
            lower:true
          });
          // console.log(this.slug)
          db.collection('smoothies').add({
            title: this.title,
            ingredients: this.ingredients,
            slug: this.slug
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
          this.ingredients.push(this.another)
          this.another = null
          this.feedback=null
        }else{
          this.feedback="You must enter a value to add an ingredient"
        }
      }
      ,
      deleteIng(ing) {
        this.ingredients = this.ingredients.filter((ingredient)=>{
          return ingredient != ing
        })
      }

    }
  }
</script>

<style scoped>
 .add-smoothie {
   margin-top: 20px;
   max-width: 500px;
   padding: 10px;
   border: 1px solid gray;
   border-radius: 5px;
 }

 .add-smoothie h2 {
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

  .add-smoothie .field {
    position: relative;
  }

  .add-smoothie .delete {
    position: absolute;
    right: 0;
    bottom: 16px;
    color: #aaa;
    font-size: 1.4rem;
    cursor: pointer;
  }

</style>
