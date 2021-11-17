<template>
    <router-link to="/chat">
    <div class="full-content-height"  id="infinite-list2">
    
     <div v-for="(item, index) in filteredlList(search, items, dataItems)" v-bind:key="index"
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
    </div>
     </router-link>
</template>
 
<script>
import ContactRow from "../components/ContactRow.vue"
export default {
  components: { ContactRow },
    name: 'VerticalScroll',
    props:['dataItems', 'search'],
    data: function(){
        console.log("search",this.search)
        return{
            
            loading: false,
            nextItem: 1,
            items: [],
            search:this.search,
            dataItems:this.dataItems
           
        }
    }, 
    mounted () {

        // Detect when scrolled to bottom.
        const listElm = document.querySelector('#infinite-list2');
        
        listElm.addEventListener('scroll', e => {
        
        if(listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
            this.loadMore();
        }
        });

        // Initially load some items.
        this.loadMore();

    },

    methods: {
        loadMore () {
        
        /** This is only for this demo, you could 
            * replace the following with code to hit 
            * an endpoint to pull in more data. **/
        this.loading = true;
        setTimeout(e => {
            
            for (var i = 0; i < 10; i++) {
                this.items.push(this.dataItems[this.nextItem++]);
            }
            this.loading = false;
        }, 200);
        
        /**************************************/
        
        },
         filteredlList:function(searchName, infList, allItem){ 
            console.log('run func', searchName);
            if (searchName) {
                console.log("searchName",searchName)
                let searchedList =  allItem.filter((item)=>{
                    return item.name.match(searchName);
                });
                console.log(searchedList);
                return searchedList;
            } 
        console.log('??');
        return infList;
    },
    },
}



</script>
