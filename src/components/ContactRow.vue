<template>
    <div 
     
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

export default {
  name: 'ContactRow',
   props:['contactData'],
   data: function() {
     
    return {
     
     item:this.contactData,
    };
   },
}



</script>

<style>
.customGray{
  background-color: #EFEFEF;
}
.bg-color-home{
  background-color: #F5F5F5;
}
.margin-menu {
 margin: 14px;
 
}
.online-green {
  background-color: #34C700;
}
.online-red {
  background-color: #E41B1B;
}


.search-input-box {
padding-left: 45px;
    
            } 
.position-div-plus{
  top:53px;
}
.contact-div-color{
  background-color:#F9F9F9;
}
.full-content-height {
  overflow-y: scroll;
  height: calc(100vh - 330px);
}
</style>