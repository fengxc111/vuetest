import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "././assets/styles/border.css";
import "././assets/styles/reset.css";
import SvgIcon from "@/imgs";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import "@/router/permission.js" 

createApp(App).use(store).use(router).use(ElementPlus).use(SvgIcon).mount("#app");
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    App.component(key, component)
}