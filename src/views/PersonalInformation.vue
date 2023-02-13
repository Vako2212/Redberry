<template>
  <MainLayout :page_title="page_title" :page="page">
    <WrapperLayout>
      <div class="w-1/2">
        <label
          for="firstname"
          class="flex justify-start text-sm font-medium text-gray-700"
        >
          სახელი
        </label>
        <div class="mt-1">
          <div class="" v-if="OpenIcon === true">
            <SuccessIcon
              class="text-green-500 absolute mt-5 w-1/3 ml-28"
            ></SuccessIcon>
          </div>
          <input
            v-model="inputValue"
            type="text"
            name="firstname"
            id="firstname"
            :class="
              OpenIcon === true
                ? 'block w-full py-4 px-3 rounded-md border border-green-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                : 'block w-full py-4 px-3 rounded-md border border-[#BCBCBC] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
            "
            placeholder="ანზორ"
            aria-describedby="email-description"
          />
        </div>
        <p
          v-if="nameErrorMessage.length > 0"
          class="mt-2 text-sm text-red-500 flex justify-start"
          id="firstname-description"
        >
          {{ nameErrorMessage }}
        </p>
        <p v-else class="mt-2 text-sm text-gray-500 flex justify-start">
          მინიმუმ 2 სიმბოლო,ქართთული ასოები
        </p>
      </div>
      <div class="w-1/2 ml-2">
        <label
          for="lastname"
          class="flex justify-start text-sm font-medium text-gray-700"
        >
          გვარი
        </label>
        <div class="mt-1">
          <div class="" v-if="LastNameIcon === true">
            <SuccessIcon
              class="text-green-500 absolute mt-5 w-1/3 ml-28"
            ></SuccessIcon>
          </div>
          <input
            v-model="lastname"
            type="text"
            name="lastname"
            id="lastname"
            :class="
              LastNameIcon === true
                ? 'block w-full py-4 border border-green-500 px-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                : 'block w-full py-4 border border-[#BCBCBC] px-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
            "
            placeholder="მუმლაძე"
            aria-describedby="email-description"
          />
        </div>
        <p
          v-if="lastnameErrorMessage.length > 0"
          class="mt-2 text-sm text-red-500 flex justify-start"
          id="lastname-description"
        >
          {{ lastnameErrorMessage }}
        </p>
        <p v-else class="mt-2 text-sm text-gray-500 flex justify-start">
          მინიმუმ 2 სიმბოლო,ქართთული ასოები
        </p>
      </div>
    </WrapperLayout>
    <WrapperLayout>
      <div class="flex w-full justify-between">
        <label v-if="photoErrorMessage !== ''" class="text-red-600">
          პირადი ფოტოს ატვირთვა</label
        >
        <label v-else class=""> პირადი ფოტოს ატვირთვა</label>
        <label
          for="img_upload"
          class="px-4 py-1 bg-[#0E80BF] text-white rounded-md"
          >ატვირთე</label
        >
        <input
          type="file"
          ref="photo"
          id="img_upload"
          class="invisible"
          @change="previewImage"
        />
      </div>
    </WrapperLayout>
    <WrapperLayout>
      <div class="w-full">
        <label class="flex justify-start text-sm font-medium text-gray-700"
          >ჩემ შესახებ (არასავალდებულო)</label
        >
        <div class="mt-3">
          <textarea
            rows="5"
            name="comment"
            v-model="about_me"
            id="comment"
            :class="
              AboutB === true
                ? 'block border border-green-500 w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                : 'block border border-[#BCBCBC] w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
            "
          ></textarea>
        </div>
      </div>
    </WrapperLayout>
    <WrapperLayout>
      <div class="w-full">
        <label
          for="email"
          :class="
            MailIcon === false
              ? 'flex justify-start text-sm font-medium text-red-600'
              : 'flex justify-start text-sm font-medium text-gray-700'
          "
          >ელ.ფოსტა</label
        >
        <div class="mt-3">
          <div class="w-full ml-6" v-if="MailIcon === false">
            <ExclamationTriangle
              class="text-red-700 mt-4 w-full absolute"
            ></ExclamationTriangle>
          </div>
          <input
            v-model="mail"
            type="email"
            name="email"
            id="email"
            :class="
              MailIcon === true
                ? 'block w-full py-4 px-3 rounded-md border border-green-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                : 'block w-full py-4 px-3 rounded-md border border-[#BCBCBC]  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
            "
            placeholder="anzorr666@redberry.ge"
            aria-describedby="email-description"
          />
        </div>
        <p
          v-if="mailErrorMessage.length > 0"
          class="mt-2 text-sm text-red-500 flex justify-start"
          id="email-description"
        >
          {{ mailErrorMessage }}
        </p>
        <p v-else class="mt-2 text-sm text-gray-500 flex justify-start">
          უნდა მთავრდებოდეს @redberry,ge
        </p>
      </div>
    </WrapperLayout>
    <WrapperLayout>
      <div class="w-full">
        <label
          for="phone"
          class="flex justify-start text-sm font-medium text-gray-700"
          >მობილურის ნომერი</label
        >
        <div class="mt-3">
          <div class="" v-if="PhoneIcon === true">
            <SuccessIcon
              class="text-green-500 absolute mt-5 ml-12 w-11/12"
            ></SuccessIcon>
          </div>
          <input
            v-model="phone"
            type="text"
            name="phone"
            id="phone"
            :class="
              PhoneIcon === true
                ? 'block w-full py-4 px-3 rounded-md border border-green-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                : 'block w-full py-4 px-3 rounded-md border border-[#BCBCBC] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
            "
            placeholder="+995 551 12 34 56"
            aria-describedby="phone-description"
          />
        </div>
        <p
          v-if="phoneErrorMessage !== ''"
          class="mt-2 text-sm text-red-500 flex justify-start"
          id="phone-description"
        >
          {{ phoneErrorMessage }}
        </p>
        <p v-else class="mt-2 text-sm text-gray-500 flex justify-start">
          უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
        </p>
      </div>
    </WrapperLayout>
    <div class="flex items-center text-center px-6 py-3">
      <div class="w-1/12"></div>
      <div class="w-11/12 mt-4 mr-12 pb-2">
        <button
          @click="PersonalInfoValidation"
          class="mr-4 bg-[#6B40E3] float-right bottom-0 text-white mb-6 rounded-md px-6 py-2"
        >
          შემდეგი
        </button>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import ChevronLeft from "../components/icons/ChevronLeft.vue";
import SuccessIcon from "../components/icons/SuccessIcon.vue";
import ExclamationTriangle from "../components/icons/ExclamationTriangle.vue";
import { RouterLink } from "vue-router";
import MainLayout from "../components/MainLayout.vue";
import WrapperLayout from "../components/WrapperLayout.vue";
export default {
  name: "PersonalInformation",
  components: {
    ChevronLeft,
    SuccessIcon,
    ExclamationTriangle,
    RouterLink,
    MainLayout,
    WrapperLayout,
  },
  data() {
    return {
      page_title: "პირადი ინფო",
      page: "1",
      size: 1,
      lastname: "",
      LastNameIcon: "",
      photo: "",
      about_me: "",
      AboutB: "",
      mail: "",
      MailIcon: "",
      phone: "",
      PhoneIcon: "",
      inputValue: "",
      OpenIcon: "",
      nameErrorMessage: "",
      lastnameErrorMessage: "",
      photoErrorMessage: "",
      mailErrorMessage: "",
      phoneErrorMessage: "",
      request_route: "",
      mailAction: "",
      reader_url: "",
      genral_array: [],
    };
  },

  methods: {
    PersonalInfoValidation() {
      this.ValidationFirstname();
      this.ValidationLastname();
      this.ValidationPhoto();
      this.ValidationEmail();
      this.ValidationPhone();
      this.CheckAbout();
      let file_upload = this.$refs.photo.files[0];

      const smt = this.mail.split("@");
      if (
        this.inputValue !== "" &&
        this.lastname !== "" &&
        file_upload.name !== "" &&
        this.mailAction === true &&
        this.phone !== ""
      ) {
        let photoBlob = new Blob([this.$refs.photo.files[0]], {
          type: this.$refs.photo.files[0].type,
        });
        sessionStorage.setItem("image_next", URL.createObjectURL(photoBlob));
        let ss_m = sessionStorage.getItem("image_next").split("/");
        let personal_data = [
          { firstname: this.inputValue },
          { lastname: this.lastname },
          { photo: this.reader_url },
          { about: this.about_me },
          { mail: this.mail },
          { phone: this.phone },
          { uploaded_image: file_upload.name },
          { img: ss_m[3] },
        ];

        const reader = new FileReader();

        reader.onload = function () {
          const fileAsDataURL = reader.result;
          sessionStorage.setItem("set_new_image", fileAsDataURL);
        };

        reader.readAsDataURL(file_upload);

        this.request_route = true;
        sessionStorage.setItem("personal_info", JSON.stringify(personal_data));
        this.$router.push("/experience");
      }
    },
    ValidationFirstname() {
      if (!this.inputValue) {
        this.nameErrorMessage = "მინიმუმ 2 სიმბოლო,ქართთული ასოები";
        this.OpenIcon = false;
      } else if (this.inputValue.length < 2) {
        this.nameErrorMessage = "მინიმუმ 2 სიმბოლო,ქართთული ასოები";
        this.OpenIcon = false;
      } else if (!/^[\u10A0-\u10FF]+$/.test(this.inputValue)) {
        this.nameErrorMessage = "მინიმუმ 2 სიმბოლო,ქართთული ასოები";
        this.OpenIcon = false;
      } else {
        this.nameErrorMessage = "";
        this.OpenIcon = true;
      }
    },
    ValidationLastname() {
      if (!this.lastname) {
        this.lastnameErrorMessage = "მინიმუმ 2 სიმბოლო,ქართთული ასოები";
        this.LastNameIcon = false;
      } else if (this.lastname.length < 2) {
        this.lastnameErrorMessage = "მინიმუმ 2 სიმბოლო,ქართთული ასოები";
        this.LastNameIcon = false;
      } else if (!/^[\u10A0-\u10FF]+$/.test(this.lastname)) {
        this.lastnameErrorMessage = "მინიმუმ 2 სიმბოლო,ქართთული ასოები";
        this.LastNameIcon = false;
      } else {
        this.lastnameErrorMessage = "";
        this.LastNameIcon = true;
      }
    },
    ValidationPhoto() {
      const file = this.$refs.photo.files[0];

      if (!file) {
        this.photoErrorMessage = "სავალდებულო";
        this.error++;
      } else {
        this.photoErrorMessage = "";
      }
    },
    CheckAbout() {
      this.AboutB = this.about_me !== "";
    },
    ValidationEmail() {
      const smt = this.mail.split("@");
      const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (this.mail === "") {
        this.mailErrorMessage = "სავალდებულო,უნდა მთავრებოდეს @redberry.ge-ით";
        this.MailIcon = false;
        this.mailAction = false;
      } else if (emailRegex.test(this.mail) === false) {
        this.mailErrorMessage = "სავალდებულო,უნდა მთავრებოდეს @redberry.ge-ით";
        this.MailIcon = false;
        this.mailAction = false;
      } else if (smt[1] !== "redberry.ge") {
        this.mailErrorMessage = "სავალდებულო,უნდა მთავრებოდეს @redberry.ge-ით";
        this.MailIcon = false;
        this.mailAction = false;
      } else {
        this.mailErrorMessage = "";
        this.MailIcon = true;
        this.mailAction = true;
      }
    },
    ValidationPhone() {
      if (!this.phone) {
        this.phoneErrorMessage =
          "სავალდებულო,უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს";
        this.PhoneIcon = false;
      } else if (!/^(\+995)(5[0-9]{8})$/.test(this.phone)) {
        this.phoneErrorMessage =
          "სავალდებულო,უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს";
        this.PhoneIcon = false;
      } else {
        this.phoneErrorMessage = "";
        this.PhoneIcon = true;
      }
    },
    previewImage() {
      const input = this.$refs.photo;
      let str_data =
        File[(this.$refs.photo.files[0], this.$refs.photo.files[0].name)];
      localStorage.setItem("img_path", str_data);
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.reader_url = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
  },
  mounted() {
    let personal_info = JSON.parse(sessionStorage.getItem("personal_info"));
    if (personal_info !== null) {
      if (
        personal_info[0].firstname !== "" &&
        personal_info[1].lastname !== "" &&
        personal_info[2].photo !== "" &&
        personal_info[3].about !== "" &&
        personal_info[4].mail &&
        personal_info[5].phone !== ""
      ) {
        this.inputValue = personal_info[0].firstname;
        this.lastname = personal_info[1].lastname;
        this.photo = personal_info[2].photo;
        this.about_me = personal_info[3].about;
        this.mail = personal_info[4].mail;
        this.phone = personal_info[5].phone;
      }
    }
  },
};
</script>

<style scoped></style>
