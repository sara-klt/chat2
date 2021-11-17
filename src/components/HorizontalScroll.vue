<template>
    <div class="flex overflow-x-scroll" id="infinite-list">
        <div class="mt-6 flex flex-col ">
        <div class="rounded-2xl border border-white customGray w-16 h-20" >
            <div class="flex flex-col items-center  relative">
            <img  class="m-auto mt-3 mb-6 w-10 h-12 rounded-lg "
            v-bind:src="require('../assets/' + imgPerson)">
            <div class="absolute rounded w-4 h-4 bg-white position-div-plus">
                <img class="m-auto mt-1 w-2 h-2"
                v-bind:src="require('../assets/' + imgPlus)">
            </div>
            </div>
        </div>
        </div>
            <profile-image v-for="(item, index) in items"
            v-bind:key="index"  :contactData="item" />
    </div>
    
</template>

<script>
import ProfileImage from './ProfileImage.vue';
import ContactRow from "../components/ContactRow.vue"

export default {
    components: { ProfileImage,ContactRow },
    name: 'HorizontalScroll',
    props:['dataItems'],
    data: function(){
        return{
            imgPerson: "Rahul.png",
            imgPlus:"plus.png",
            loading: false,
            nextItem: 1,
            items: []
        }
    }, 
    mounted () {

        // Detect when scrolled to bottom.
        const listElm = document.querySelector('#infinite-list');
        
        listElm.addEventListener('scroll', e => {
        
        if(listElm.scrollLeft + listElm.clientWidth >= listElm.scrollLeft) {
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
            for (var i = 0; i < 20; i++) {
                this.items.push(this.dataItems[this.nextItem++]);
            }
            this.loading = false;
        }, 200);
        /**************************************/
        
        },
         filteredlList:function(searchName, list){ 

          return list.filter((item)=>{
          return item.name.match(searchName);
        });
    },
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