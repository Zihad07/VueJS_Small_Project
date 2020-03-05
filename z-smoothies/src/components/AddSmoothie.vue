<template>
  <div class="add-smoothie container">
    <h2 class="center-align indigo-text">Add New Smoothie Receipe</h2>

    <form @submit.prevent="addSubmit" class="form">
      <div class="field title">
        <label for="title">Smoothie Title</label>
        <input type="text" name="title" id="title" v-model="title">
      </div>

      <div class="field add-ingredient">
        <label for="add-ingredient">Add an ingredient</label>
        <input type="text" name="add-ingredient" id="add-ingredient">
      </div>

      <div class="field center-align">
        <button class="btn pink">Add Smoothie</button>
      </div>
    </form>
  </div>
</template>

<script >
  export default {
    name:'AddSmoothie',
    data() {
      return {
        title: null
      }
    },

    methods: {
      addSubmit(){
        console.log(this.title)
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
</style>
