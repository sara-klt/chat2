<template>
    <div class="mt-6 pb-4 flex flex-col ml-4 overflow-x-scrol">
      <div class="rounded-2xl border border-white customGray w-16 h-20 " >
        <div class="flex flex-col items-center  relative">
          <img  
          class="m-auto mt-3 mb-6 w-10 h-12 rounded-lg "
           v-bind:src="item.image">

        </div>
      </div>
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
