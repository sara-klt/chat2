<template>
<main class="bg-color-home">
  
  <div class="px-5  overflow-hidden">
   <div class="flex justify-between  ">
    <div class="flex items-center mt-5 w-11/12">
   <img
      class=" rounded-lg w-12 h-12  "
      v-bind:src="require('../assets/' + imgPerson)"
      
    />
    <p class=" text-base text-left  pl-3">
        <span class="text-gray-400 text-sm">Hello,</span><br/>
     Rahul Ornob</p>
    </div>
  
   <div  v-on:click="say('menu')"
   class=" mt-7 w-11 h-11 rounded-lg  customGray " >
        <img
      class="w-4 h-3.5 m-3.5 margin-menu "
      v-bind:src="require('../assets/' + imgMenu)"
      
       />
    </div>
 
    
  </div>
  <div class="flex justify-between mt-6 relative">
      <input type="text" placeholder="search your friend" 
      class="search-input-box  border  border-white w-9/12 h-12 customGray rounded-xl"/>
      <img class="ml-4 mr-2.5 w-4 h-4 absolute position-search-img"
       v-bind:src="require('../assets/' + imgSerch)">
      <div class="flex items-center justify-center border border-white w-3/12 h-12 rounded-lg  customGray ml-2"   >
       <div class=" w-3 h-3 rounded-full online-green " />
          <p class="pl-1.5" >{{getOnlines(listOfContact)}}</p>
        
      </div>
    </div>
<div class="flex ">
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
<profile-image  v-for="(item, index) in listOfContact"
          v-bind:key="index"  :contactData="item" />
</div>

  <div class="full-content-height">
    
    <contact-row  v-for="item in listOfContact"
     v-bind:key="item"
     :contactData="item"/>
  </div>
</template>

<script>
import ContactRow from "../components/ContactRow.vue"
import {userList} from "../../user list"
import ProfileImage from '../components/ProfileImage.vue';
export default {
  methods: {
   getOnlines: (listUser) => {
     console.log(listUser);
      let onlineNum = 0;
     listUser.forEach((item) => {
        if (item.online) onlineNum += 1;
      });
      return onlineNum;
    },
    getListOfOnlines: (listUser) => {
      let onlineList = [];
      listUser.forEach((item) => {
        if (item.online) onlineList.push(item);
      });
      return onlineList;
      //console.log(onlineList)
      // this.listOfOnlineContact = onlineList;
      // return onlineList ;
    },
  components: { ContactRow, ProfileImage },
  name: 'Home',
   //props:['listOfContact'],

   data: function() {
     
    return {
      imgPerson: "Rahul.png",
      imgMenu: "menu.svg",
      imgSerch:"search.svg",
      imgPlus:"plus.png",
      imgPerson2:"per.png",
      imgMsg:"msg.svg",
      imgContact:"contact.png",
      imgLine:"line.svg",
      imgMenu: "menu.svg",
      listOfContact: userList,
      smallList : userList.splice(0,5)
     
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

.position-search-img {
  top: 15px;
    left: 6px;
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