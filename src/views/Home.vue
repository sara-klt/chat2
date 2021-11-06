<template>

  

    <div v-for="item in listOfContact"
     v-bind:key="item.id"
     
      class="flex  rounded-2xl border
      border-white mt-5 contact-div-color mb-4 w-full h-24">
      
        <div v-if="item.online==1" class="border border-white mt-16 ml-3 w-2  h-2 rounded-full online-green text-left" />
        <div v-else class="border border-white mt-16 ml-3  w-2 h-2 rounded-full  online-red  text-left" />
          
         <div class=" w-8/12 my-5 pl-10 pr-4"> 
          <p >{{item.name }}</p>
          <p class="text-sm"> {{item.description}} </p>

        </div>
        <p class="w-4/12 text-xs mt-8">{{item.Date}}</p>
    </div>
  

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
   props:['listOfContact'],

   data: function() {
     
    return {
      imgPerson: "Rahul.png",
      imgMenu: "menu.svg",
      listOfContact: this.listOfContact,
    
     
    };
   },
}



</script>