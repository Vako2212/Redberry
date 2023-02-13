<template>
   <div class="flex justify-between px-4 py-4 h-screen">
     <div class="w-1/4">
       <ChevronLeft @click="NavigateStart"></ChevronLeft>
     </div>


     <div class="w-1/2 mx-auto border border-gray-700">
       <div class="flex justify-between px-8 py-6 " >
         <div class="block">
           <div class="">
             <h1 class="text-3xl text-red-600">{{firstname + ' ' + lastname}}</h1>
             <div class="flex justify-start text-center items-center">
               <MailIcon class="mt-4"></MailIcon>
               <h1 class="mt-4 ml-2 text-gray-400">{{mail}}</h1>
             </div>
             <div class="flex justify-start text-center items-center">
               <PhoneIcon class="mt-4"></PhoneIcon>
               <h1 class="mt-4 ml-2 text-gray-400">{{phone}}</h1>
             </div>
             <h1 class="text-red-600 text-xl mt-8">ჩემს შესახებ</h1>
           </div>
           <div class="mt-3">
             {{about_me}}
           </div>
         </div>
         <div class="d-flex">
           <img v-if="photo" class="h-48 w-74 rounded-full object-fill" :src="photo" alt="">
         </div>
       </div>
       <div class="w-11/12 mx-auto border-b border-gray-400"></div>

       <div class="w-full px-8 py-4  mb-2" >
         <div class="block w-full">
           <h1 class="text-3xl text-red-600 mt-2">გამოცდილება</h1>
         </div>
         <div class="block w-full">
           <div class="mt-2" v-for="(p,i) in position">
             <h1 class="text-gray-700 mt-2">{{position[i] +','+ employer[i]}}</h1>
             <p class="text-gray-300 mt-2 italic">{{start_date[i] + ' ' +'-'+' '+ end_date[i]}}</p>
             <p class="mt-2">
               {{description[i]}}
             </p>
           </div>
         </div>
       </div>
       <div class="w-11/12 mx-auto border-b border-gray-400"></div>

       <div class="w-full px-8 py-4 ">
         <div class="block w-full">
           <h1 class="text-3xl text-red-600 mt-2">განათლება</h1>
         </div>
         <div class="block w-full">
           <div class="mt-2" v-for="(m,k) in educations">
             <h1 class="text-gray-700 mt-2">{{educations[k] + ' '+ ' ' + degree[k]}}</h1>
             <p class="text-gray-300 mt-2 italic">{{date_end[k]}}</p>
             <p class="mt-2">
               {{desc[k]}}
             </p>
           </div>
         </div>
       </div>

       <div class="w-11/12 mx-auto border-b border-gray-400"></div>


       <div class="mt-12">
         <img class="float-left bottom-0 absolute mb-12 ml-4" src="../assets/bt.png" alt="Logo">
       </div>
     </div>


     <div class="flex justify-center w-1/4 h-16">
       <div v-if="showIcon === true" class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
         <div class="p-4">
           <div class="flex items-start">
             <div class="flex-shrink-0">
               <!-- Heroicon name: outline/check-circle -->
               <svg class="h-6 w-6 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
             </div>
             <div class="ml-3 w-0 flex-1 pt-0.5">
               <p class="text-sm font-medium text-gray-900">რეზიუმე წარმატებით გაიგზავნა</p>
             </div>
             <div class="ml-4 flex flex-shrink-0">
               <button @click="Close"  type="button" class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                 <span class="sr-only">Close</span>
                 <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                   <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                 </svg>
               </button>
             </div>
           </div>
         </div>
       </div>
     </div>


   </div>
</template>

<script>
import MainLayout from '../components/MainLayout.vue';
import WrapperLayout from '../components/WrapperLayout.vue';
import { RouterLink } from "vue-router";
import SuccessIcon from "../components/icons/SuccessIcon.vue";
import { ref, onMounted } from 'vue';
import ChevronLeft from "../components/icons/ChevronLeft.vue";
import axios from 'axios';
export default {
  name: "FinalPage",
  components: { MainLayout,WrapperLayout,RouterLink,SuccessIcon ,ChevronLeft},
  data(){
    return{
      firstname:'',
      photo:'',
      lastname:'',
      about_me:'',
      mail:'',
      phone:'',
      position:[],
      employer:[],
      start_date:[],
      end_date:[],
      description:[],
      educations:[],
      degree:[],
      date_end:[],
      desc:[],
      showIcon:true
    }
  },

  mounted(){


    let personal_info = JSON.parse(sessionStorage.getItem('personal_info'));
    if (personal_info !== null){
      this.firstname=personal_info[0].firstname;
      this.photo = personal_info[2].photo;
      this.lastname=personal_info[1].lastname;
      this.about_me = personal_info[3].about
      this.mail=personal_info[4].mail;
      this.phone=personal_info[5].phone;
    }

    let experience =JSON.parse(sessionStorage.getItem('experience'));
    if (experience !== null){
      this.position = experience[0].position
      this.employer = experience[1].employer
      this.start_date = experience[2].start_date
      this.end_date = experience[3].end_date
      this.description = experience[4].description
    }

    let education_info =JSON.parse(sessionStorage.getItem('education'));

    if (education_info !== null){
      this.educations = education_info[0].education
      this.degree = education_info[1].degree
      this.date_end = education_info[2].end_date
      this.desc = education_info[3].description
    }


  },
  methods:{
    Close(){
      this.showIcon =false;
    },
    NavigateStart(){
      sessionStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>