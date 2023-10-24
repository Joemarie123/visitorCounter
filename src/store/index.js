import { createStore } from "vuex";
import visitorModule from './visitor';


const store = createStore({
  modules: {

    visitor: visitorModule,
 
    
  }
});


export default store;