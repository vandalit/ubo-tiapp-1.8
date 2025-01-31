import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import About from "@/views/AboutView.vue";
import News from "@/views/NewsView.vue";
import Dashboard from "@/views/DashboardView.vue";
import Cybersecurity from "@/views/CybersecurityView.vue";
import Services from "@/views/ServicesView.vue";


const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/news", name: "News", component: News },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/services", name: "Services", component: Services },
  { path: "/cybersecurity", name: "Cybersecurity", component: Cybersecurity },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

