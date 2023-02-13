import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PersonalInformation from "../views/PersonalInformation.vue"
import Experience from "../views/Experience.vue"
import EducationInformation from "../views/EducationInformation.vue"
import FinalPage from "../views/FinalPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/personal",
      name: "personal",
      component: PersonalInformation
    },
    {
      path: "/experience",
      name: "experience",
      component: Experience
    },
    {
      path: "/education",
      name: "education",
      component: EducationInformation
    },
    {
      path: "/final",
      name: "final",
      component: FinalPage
    },
  ],
});

export default router;
