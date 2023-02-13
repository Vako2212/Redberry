<template>
<MainLayout :page_title="page_title" :page="page" :url="url">
  <div class="bg-gray-100" v-for="(more_exp,i) in MoreExperience" :key="more_exp.id">
    <WrapperLayout>
      <div class="w-full">
        <p v-if="positionErrorMgs[i].position_mgs === true " class="flex justify-start text-red-500 pb-2 ">თანამდებობა</p>
        <p v-else class="flex justify-start pb-2 ">თანამდებობა</p>
        <SuccessIcon v-if="PositionIcon[i].icon === true" class="text-green-500 absolute mt-4 -ml-10 w-full"></SuccessIcon>
        <input v-model="position[i]" type="text" name="position" id="position"
               :class="PositionIcon[i].icon === true ? 'block w-full py-4 px-3 rounded-md border border-green-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' :
                 'block w-full py-4 px-3 rounded-md border border-[#BCBCBC] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' " placeholder="დეველოპერი, დიზაინერი, ა.შ." aria-describedby="position-description"
        />
        <p class="mt-2 text-sm text-gray-500 flex justify-start" id="position_hint"> მინიმუმ 2 სიმბოლო </p>
      </div>
    </WrapperLayout>

    <WrapperLayout>
      <div class="w-full">
        <p v-if="employerErrorMgs[i].employ_mgs === true"  class="flex justify-start pb-2 text-red-500">დამსაქმებელი</p>
        <p v-else  class="flex justify-start pb-2">დამსაქმებელი</p>
        <SuccessIcon v-if="EmployerIcon[i].icon === true" class="text-green-500 absolute mt-4 -ml-10 w-full"></SuccessIcon>
        <input v-model="employer[i]" type="text" name="employer" id="employer"
               :class="EmployerIcon[i].icon === true ? 'block w-full py-4 px-3 rounded-md border border-green-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' :
                'block w-full py-4 px-3 rounded-md border border-[#BCBCBC] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' " placeholder="დამსაქმებელი" aria-describedby="employer-description" />
        <p class="mt-2 text-sm text-gray-500 flex justify-start" id=""> მინიმუმ 2 სიმბოლო </p>
      </div>
    </WrapperLayout>

    <WrapperLayout>
      <div class="w-1/2">
        <label for="start_date" v-if="start_dateErrorMgs[i].start_date_mgs === true" class="flex justify-start text-sm font-medium text-red-600"> დაწყების რიცხვი </label>
        <label for="start_date" v-else class="flex justify-start text-sm font-medium text-gray-700"> დაწყების რიცხვი </label>
        <div class="mt-1 mr-2">
          <input v-model="start_date[i]" type="date" id="start_date"
                 :class="StartDateB[i].border === true ? 'block w-full py-4 px-3 rounded-md border border-green-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' :
                    'block w-full py-4 px-3 rounded-md border border-[#BCBCBC] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'" />
        </div>
      </div>
      <div class="w-1/2">
        <label for="" v-if="end_dateErrorMgs[i].end_date_mgs === true " class="flex justify-start text-sm font-medium text-red-600"> დამთავრების რიცხვი </label>
        <label for="" v-else class="flex justify-start text-sm font-medium text-gray-700"> დამთავრების რიცხვი </label>
        <div class="mt-1">
          <input v-model="end_date[i]" type="date" id="end_date"
                 :class="EndDateB[i].border === true ? 'block w-full py-4 px-3 rounded-md border border-green-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' :
                    'block w-full py-4 px-3 rounded-md border border-[#BCBCBC] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'" />
        </div>
      </div>
    </WrapperLayout>

    <WrapperLayout>
      <div class="w-full">
        <label v-if="descriptionErrorMgs[i].description_mgs === true"  class="flex justify-start text-sm font-medium text-red-600">აღწერა</label>
        <label v-else  class="flex justify-start text-sm font-medium text-gray-700">აღწერა</label>
        <div class="mt-3">
          <textarea rows="5" v-model="description[i]" name="description" id="job_description" placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                    :class="DescriptionB[i].border === true ? 'block border border-green-500 w-full px-4 py-2 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' :
                      'block border border-[#BCBCBC] w-full px-4 py-2 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' " ></textarea>
        </div>
      </div>
    </WrapperLayout>
    <div class="flex items-center text-center px-6 py-3">
      <div class="w-1/12"></div>
      <div v-if="WrapperColor === true" class="w-11/12 mt-4  mr-12 pb-2 border-b-2 border-green-500"></div>
      <div v-else class="w-11/12 mt-4  mr-12 pb-2 border-b border-blue-300"></div>
    </div>
  </div>


  <WrapperLayout class="bg-gray-100">
      <button @click="AddExperience" class="bg-[#62A1EB] rounded-md text-white px-6 py-2">მეტი გამოცდილების დამატება</button>
  </WrapperLayout>

  <div class="flex items-center text-center px-6 py-3 bg-gray-100">
    <div class="w-1/12"></div>
    <div class="w-11/12 mt-4 flex justify-between mr-12 pb-2">
      <RouterLink to="/personal">
        <button @click="NavigatePersonPage" class="px-6 py-2 bg-[#0E80BF] text-white rounded-md">უკან</button>
      </RouterLink>
      <div class="">
        <button @click="ValidateExperience" class="px-6 py-2 bg-[#0E80BF] text-white rounded-md">შემდეგი</button>
      </div>
    </div>
  </div>
</MainLayout>
</template>

<script>
import MainLayout from '../components/MainLayout.vue';
import WrapperLayout from '../components/WrapperLayout.vue';
import { RouterLink } from "vue-router";
import SuccessIcon from "../components/icons/SuccessIcon.vue";
export default {
  name: "Experience",
  components: { MainLayout,WrapperLayout,RouterLink,SuccessIcon },
  data() {
    return {
      page_title : 'გამოცდილება',
      page:'2',
      url:'/personal',
      counter: 0,
      WrapperColor:'',
      position:[],PositionIcon:[{'icon':''}],
      employer:[],EmployerIcon:[{'icon':''}],
      start_date:[],StartDateB:[{'border':''}],
      end_date:[],EndDateB:[{'border':''}],
      description:[],DescriptionB:[{'border':''}],
      positionErrorMgs:[{'position_mgs':''}],
      employerErrorMgs:[{'employ_mgs':''}],
      start_dateErrorMgs:[{'start_date_mgs':''}],
      end_dateErrorMgs:[{'end_date_mgs':''}],
      descriptionErrorMgs:[{'description_mgs':''}],
      MoreExperience:[{
        id:"first_div0",
      }],
    };
  },
  methods:{
    ValidateExperience(){
      this.ValidationPosition();
      this.ValidationEmployer();
      this.ValidationStartDate();
      this.ValidationEndDate();
      this.ValidationDescription();
      let experience = [
        { 'position':this.position},
        { 'employer':this.employer},
        { 'start_date':this.start_date},
        { 'end_date':this.end_date},
        { 'description':this.description},
      ];
      for (let j= 0; j<this.MoreExperience.length;j++){
        if (this.PositionIcon[j].icon === true && this.EmployerIcon[j].icon === true && this.StartDateB[j].border === true && this.EndDateB[j].border === true  && this.DescriptionB[j].border === true){
          sessionStorage.setItem('experience',JSON.stringify(experience));
          this.$router.push('/education');
        }else {
          return;
        }
      }

    },

    ValidationPosition(){

      for (let i = 0; i<this.positionErrorMgs.length;i++){
        if (!this.position[i]){
          this.positionErrorMgs[i].position_mgs=true;
          this.PositionIcon[i].icon=false;
        }else if (this.position[i].length < 2) {
          this.positionErrorMgs[i].position_mgs=true;
          this.PositionIcon[i].icon=false;
        }else {
          this.positionErrorMgs[i].position_mgs=false;
          this.PositionIcon[i].icon=true;
        }
      }


    },
    ValidationEmployer(){
      for (let i = 0; i<this.employerErrorMgs.length;i++){
        if (!this.employer[i]){
          this.employerErrorMgs[i].employ_mgs=true;
          this.EmployerIcon[i].icon=false;
        }else if (this.employer[i].length < 2) {
          this.employerErrorMgs[i].employ_mgs=true;
          this.EmployerIcon[i].icon=false;
        }else {
          this.employerErrorMgs[i].employ_mgs=false;
          this.EmployerIcon[i].icon=true;
        }
      }


    },
    ValidationStartDate(){
      for (let i = 0; i<this.start_dateErrorMgs.length;i++){
        if (this.start_date.length === 0){
          this.start_dateErrorMgs[i].start_date_mgs=true;
          this.StartDateB[i].border = false;
        }else {
          this.StartDateB[i].border = true;
          this.start_dateErrorMgs[i].start_date_mgs=false;
        }
      }

    },
    ValidationEndDate(){
      for (let i = 0; i<this.end_dateErrorMgs.length;i++){
        if (this.end_date.length === 0){
          this.end_dateErrorMgs[i].end_date_mgs=true;
          this.EndDateB[i].border=false;
        }else {
          this.end_dateErrorMgs[i].end_date_mgs=false;
          this.EndDateB[i].border=true;
        }
      }
    },
    ValidationDescription(){
      for (let i = 0; i<this.descriptionErrorMgs.length;i++){
        if (this.description.length === 0){
          this.descriptionErrorMgs[i].description_mgs=true;
          this.DescriptionB[i].border=false;
        }else {
          this.descriptionErrorMgs[i].description_mgs=false;
          this.DescriptionB[i].border=true;
        }
      }
    },
    AddExperience(){
      this.WrapperColor =true;
      this.MoreExperience.push({
        id: `first_div${++this.counter}`,
      });
      let position_mgs = 'position_mgs';
      let employ_mgs = 'employ_mgs';
      let start_date_mgs = 'start_date_mgs';
      let end_date_mgs = 'end_date_mgs';
      let description_mgs = 'description_mgs';
      let icon = 'icon';
      let border = 'border'
      this.positionErrorMgs.push({position_mgs:true})
      this.employerErrorMgs.push({employ_mgs:true})
      this.start_dateErrorMgs.push({start_date_mgs:true})
      this.end_dateErrorMgs.push({end_date_mgs:true})
      this.descriptionErrorMgs.push({description_mgs:true})
      this.PositionIcon.push({icon: false})
      this.EmployerIcon.push({icon: false})
      this.StartDateB.push({border: false})
      this.EndDateB.push({border: false})
      this.DescriptionB.push({border: false})

    },
    NavigatePersonPage(){
      this.$router.push('/personal');
    }
  },
  mounted(){
    // this.PositionIcon[0].icon=false;
    // console.log(this.PositionIcon[0])
    let experience =JSON.parse(sessionStorage.getItem('experience'));
    if (experience !== null) {
      let position_mgs = 'position_mgs';
      let employ_mgs = 'employ_mgs';
      let start_date_mgs = 'start_date_mgs';
      let end_date_mgs = 'end_date_mgs';
      let description_mgs = 'description_mgs';
      let icon = 'icon';
      let border = 'border'
      for (let k = 0; k < experience[0].position.length - 1; k++) {
        this.MoreExperience.push({
          id: k,
        });
        this.positionErrorMgs.push({position_mgs: false})
        this.employerErrorMgs.push({employ_mgs: false})
        this.start_dateErrorMgs.push({start_date_mgs: false})
        this.end_dateErrorMgs.push({end_date_mgs: false})
        this.descriptionErrorMgs.push({description_mgs: false})
        this.PositionIcon.push({icon: false})
        this.EmployerIcon.push({icon: false})
        this.StartDateB.push({border: false})
        this.EndDateB.push({border: false})
        this.DescriptionB.push({border: false})
      }
      this.WrapperColor = true;
      this.position = experience[0].position
      this.employer = experience[1].employer
      this.start_date = experience[2].start_date
      this.end_date = experience[3].end_date
      this.description = experience[4].description

    }


  }


}
</script>

<style scoped>

</style>