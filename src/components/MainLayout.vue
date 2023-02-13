<template>
  <div class="flex">
  <div class="w-3/5 bg-gray-100 h-screen">
    <div class="flex items-center text-center px-6 py-3">
      <div class="w-1/12">
        <ChevronLeft @click="Nav" class="text-sm mt-4 ms-4 cursor-pointer" />
      </div>
      <div class="w-11/12 mt-4 flex justify-between border-b border-gray-700 mr-12 pb-2">
        <div><span>{{page_title}}</span></div>
        <div><span>{{page}}/3</span></div>
      </div>
    </div>
    <slot></slot>
  </div>
    <div class="w-2/5 bg-white h-100 h-screen">
      <div class="flex justify-between px-6 py-12 " v-if="page !== '1'">
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
      <div class="w-11/12 mx-auto border-b border-gray-400" v-if="page !== '1'"></div>

        <div class="w-full px-6 py-4 border-b border-gray-700  mb-2" v-if="page !== '1' && page!== '2'">
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

      <div class="w-full px-6 py-4 border-b border-gray-700 " v-if="page !== '1' && page !=='2'">
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
      <div class="mt-12" v-if="page === '1'">
        <img class="float-left absolute bottom-0 mb-12 ml-4" src="../assets/bt.png" alt="Logo">
      </div>
      <div class="mt-12" v-else>
        <img class="float-left absolute mb-12 ml-4" src="../assets/bt.png" alt="Logo">
      </div>
    </div>
  </div>
</template>

<script>
import ChevronLeft from "../components/icons/ChevronLeft.vue";
import MailIcon from "../components/icons/MailIcon.vue";
import PhoneIcon from "../components/icons/PhoneIcon.vue";
import { RouterLink } from "vue-router";
export default {
  components: { ChevronLeft,RouterLink,MailIcon,PhoneIcon },
  name: "MainLayout",
  props: ['page_title','page','url'],

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
    Nav(){
      sessionStorage.clear();
      this.$router.push('/');
    }
  }

}
</script>

<style scoped>

</style>