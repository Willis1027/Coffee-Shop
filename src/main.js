import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
/* another free-regular-svg-icons */
/* another free-brands-svg-icons */
/* another free-solid-svg-icons */
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";


/* add icons to the library */
library.add(faMugHot,faCartShopping,faBars);

createApp(App).use(store).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
