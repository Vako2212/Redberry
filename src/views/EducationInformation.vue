<template>
    <MainLayout :page_title="page_title" :page="page">
      <input type="file" class="invisible" id="fl" ref="photo">
      <div v-for="(more_exp,i) in MoreEducation" :key="more_exp.id" class="bg-gray-100">
        <WrapperLayout>
          <div class="w-full">
            <p v-if="educationErrorMgs[i].education_mgs === true " class="flex justify-start text-red-500 pb-2 ">სასწავლებელი</p>
            <p v-else class="flex justify-start pb-2 ">სასწავლებელი</p>
            <SuccessIcon v-if="educationIcon[i].icon === true" class="text-green-500 absolute mt-4 -ml-10 w-full"></SuccessIcon>
            <input v-model="education[i]" type="text" name="education" id="education"
                   :class="educationIcon[i].icon === true ? 'block w-full py-4 px-3 rounded-md border border-green-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' :
                 'block w-full py-4 px-3 rounded-md border border-[#BCBCBC] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' " placeholder="სასწავლებელი" aria-describedby="education-description"
            />
            <p class="mt-2 text-sm text-gray-500 flex justify-start" id="education_hint"> მინიმუმ 2 სიმბოლო </p>
          </div>
        </WrapperLayout>
        <WrapperLayout>
          <div class="w-1/2">
            <label v-if="degreeErrorMgs[i].degree_mgs === true" class="flex justify-start text-sm font-medium text-red-600"> ხარისხი </label>
            <label  v-else class="flex justify-start text-sm font-medium text-gray-700"> ხარისხი </label>
            <div class="mt-1 mr-2">
              <select id="degree" v-model="degree[i]"
                      :class="DegreeB[i].border === true ? 'border border-green-500 py-4 px-3 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pr-2':
                       'border border-[#BCBCBC] py-4 px-3 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pr-2' ">
                <option selected>აირჩიეთ ხარისხი</option>
                <option v-for="k in data">{{k.title}}</option>
              </select>
            </div>
          </div>
          <div class="w-1/2">
            <label  v-if="end_dateErrorMgs[i].end_date_mgs === true " class="flex justify-start text-sm font-medium text-red-600"> დამთავრების რიცხვი </label>
            <label  v-else class="flex justify-start text-sm font-medium text-gray-700"> დამთავრების რიცხვი </label>
            <div class="mt-1">
              <input v-model="end_date[i]" type="date" id="end_date"
                     :class="EndDateB[i].border === true ? 'block w-full py-4 px-3 rounded-md border border-green-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' :
                    'block w-full py-4 px-3 rounded-md border border-[#BCBCBC] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'" />
            </div>
          </div>
        </WrapperLayout>
        <WrapperLayout>
          <div class="w-full bg-gray-100">
            <label v-if="descriptionErrorMgs[i].description_mgs === true"  class="flex justify-start text-sm font-medium text-red-600">აღწერა</label>
            <label v-else  class="flex justify-start text-sm font-medium text-gray-700">აღწერა</label>
            <div class="mt-3">
          <textarea rows="5" v-model="description[i]" name="description" id="job_description" placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                    :class="DescriptionB[i].border === true ? 'block border border-green-500 w-full px-4 py-2 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' :
                      'block border border-[#BCBCBC] w-full px-4 py-2 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' " ></textarea>
            </div>
          </div>
        </WrapperLayout>

        <div class="flex items-center text-center bg-gray-100 px-6 py-3">
          <div class="w-1/12"></div>
          <div v-if="WrapperColor === true" class="w-11/12 mt-4  mr-12 pb-2 border-b-2 border-green-500"></div>
          <div v-else class="w-11/12 mt-4  mr-12 pb-2 border-b border-blue-300"></div>
        </div>
      </div>
      <WrapperLayout class="bg-gray-100">
        <button @click="AddMoreEducation" class="bg-[#62A1EB] rounded-md text-white px-6 py-2">მეტი გამოცდილების დამატება</button>
      </WrapperLayout>
      <div class="flex items-center text-center px-6 py-3 bg-gray-100">
        <div class="w-1/12"></div>
        <div class="w-11/12 mt-4 flex justify-between mr-12 pb-2">
            <button @click="NavigateExperience" class="px-6 py-2 bg-[#0E80BF] text-white rounded-md">უკან</button>
          <div class="">
            <button @click="ValidationEducation"  class="px-6 py-2 bg-[#0E80BF] text-white rounded-md">შემდეგი</button>
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
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const data = ref(null);
    const loading = ref(true);

    onMounted(async () => {
      try {
        const response = await axios.get('https://resume.redberryinternship.ge/api/degrees');
        data.value = response.data;
        loading.value = false;
      } catch (error) {
        console.error(error);
      }
    });

    return { data, loading };
  },

  name: "EducationInformation",
  components: { MainLayout,WrapperLayout,RouterLink,SuccessIcon },
  data() {
    return {
      photo:'',
      page_title : 'განათლება',
      page:'3',
      counter: 0,
      WrapperColor:'',
      education:[],educationIcon:[{'icon':''}],
      degree:[],DegreeB:[{'border':''}],
      end_date:[],EndDateB:[{'border':''}],
      description:[],DescriptionB:[{'border':''}],
      educationErrorMgs:[{'education_mgs':''}],
      degreeErrorMgs:[{'degree_mgs':''}],
      end_dateErrorMgs:[{'end_date_mgs':''}],
      descriptionErrorMgs:[{'description_mgs':''}],
      MoreEducation:[{
        id:"first_div0",
      }],
    };
  },
  methods:{
    ValidationSchool() {
      for (let i = 0; i < this.educationErrorMgs.length; i++) {
        if (!this.education[i]) {
          this.educationErrorMgs[i].education_mgs = true;
          this.educationIcon[i].icon = false;
        } else if (this.education[i].length < 2) {
          this.educationErrorMgs[i].education_mgs = true;
          this.educationIcon[i].icon = false;
        } else {
          this.educationErrorMgs[i].education_mgs = false;
          this.educationIcon[i].icon = true;
        }
      }
    },
    ValidationDegree(){
      for (let i = 0; i < this.degreeErrorMgs.length; i++) {
        if (this.degree.length === 0){
          this.degreeErrorMgs[0].degree_mgs = true;
          this.DegreeB[i].border =false;
        }else {
          this.degreeErrorMgs[i].degree_mgs = false;
          this.DegreeB[i].border =true;
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
    ValidationEducation(){
      this.ValidationSchool();
      this.ValidationDegree();
      this.ValidationEndDate();
      this.ValidationDescription();
      let data = [];
      let educations = [
        { 'education':this.education},
        { 'degree':this.degree},
        { 'end_date':this.end_date},
        { 'description':this.description},
      ];
      let personal_info = JSON.parse(sessionStorage.getItem('personal_info'));

      for (let j= 0; j<this.MoreEducation.length;j++){
        if (this.educationIcon[j].icon === true  && this.DegreeB[j].border === true && this.EndDateB[j].border === true && this.DescriptionB[j].border === true){
          sessionStorage.setItem('education',JSON.stringify(educations));

          this.sendMessage();
          this.$router.push('/final');
        }
      }
    },
    AddMoreEducation(){
      this.WrapperColor = true;
      this.MoreEducation.push({
        id: `first_div${++this.counter}`,
      });
      let education_mgs = 'education_mgs';
      let degree_mgs = 'degree_mgs';
      let end_date_mgs = 'end_date_mgs';
      let description_mgs = 'description_mgs';
      let icon = 'icon';
      let border = 'border'
      this.educationErrorMgs.push({education_mgs:true})
      this.degreeErrorMgs.push({degree_mgs:true})
      this.end_dateErrorMgs.push({end_date_mgs:true})
      this.descriptionErrorMgs.push({description_mgs:true})
      this.educationIcon.push({icon: false})
      this.EndDateB.push({border: false})
      this.DegreeB.push({border: false})
      this.DescriptionB.push({border: false})

    },
    NavigateExperience(){
      this.$router.push('experience');
    },
    async sendMessage() {

      let personal_info = JSON.parse(sessionStorage.getItem('personal_info'));
      let experience =JSON.parse(sessionStorage.getItem('experience'));
      let encodedFile = sessionStorage.getItem("set_new_image");

      const blob = this.dataURLtoBlob(encodedFile);

      let educa = [
        {
          "institute": this.education[0],
          "degree": this.degree[0],
          "due_date": this.end_date[0],
          "description": this.description[0]
        },
      ];

      let exp=[
          {
            "position": this.education[0],
            "employer" : this.degree[0],
            "start_date" : this.end_date[0],
            "due_date" : this.end_date[0],
            "description" : this.description[0]
          },
      ];


      let formData = new FormData();
      formData.append("name", personal_info[0].firstname);
      formData.append("surname", personal_info[1].lastname);
      formData.append("email", personal_info[4].mail);
      formData.append("phone_number", personal_info[5].phone);
      formData.append("image",blob,personal_info[6].uploaded_image );
      formData.append("about_me", personal_info[3].about);
      formData.append("experiences",JSON.stringify(exp));
      formData.append("educations",JSON.stringify(educa));




      axios.post('https://resume.redberryinternship.ge/api/cvs',formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': '*/*/',
        },
      })
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    },
    dataURLtoBlob(dataURL) {
      const parts = dataURL.split(',');
      const mime = parts[0].match(/:(.*?);/)[1];
      const raw = window.atob(parts[1]);
      const rawLength = raw.length;
      const uInt8Array = new Uint8Array(rawLength);
      for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
      }
      return new Blob([uInt8Array], { type: mime });
    },
  },
  mounted(){
    let education =JSON.parse(sessionStorage.getItem('education'));
    if (education !== null) {
      let education_mgs = 'education_mgs';
      let degree_mgs = 'degree_mgs';
      let end_date_mgs = 'end_date_mgs';
      let description_mgs = 'description_mgs';
      let icon = 'icon';
      let border = 'border'
      for (let k = 0; k < education[0].education.length - 1; k++) {
        this.MoreEducation.push({
          id: k,
        });
        this.educationErrorMgs.push({education_mgs:false})
        this.degreeErrorMgs.push({degree_mgs:false})
        this.end_dateErrorMgs.push({end_date_mgs:false})
        this.descriptionErrorMgs.push({description_mgs:false})
        this.educationIcon.push({icon: false})
        this.EndDateB.push({border: false})
        this.DegreeB.push({border: false})
        this.DescriptionB.push({border: false})
      }
      this.WrapperColor = true;
      this.education = education[0].education
      this.degree = education[1].degree
      this.end_date = education[2].end_date
      this.description = education[3].description

    }


  }
}
</script>

<style scoped>

</style>