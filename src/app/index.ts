import { createApp } from "vue";
import { createPinia } from "pinia";
import { router } from "./utils";

import App from "./index.vue";

export const app = createApp(App).use(createPinia()).use(router);
