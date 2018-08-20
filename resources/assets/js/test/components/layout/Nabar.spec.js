import Vuex from 'vuex'
import { shallow, createLocalVue } from '@vue/test-utils'
import App from '../../../App.vue';


const localVue = createLocalVue()
localVue.use(Vuex);

describe('App ', () => {
   it('render a value from $store.state', () => {
       const wrapper = shallow(App, {
           mocks:{
             $store: {
                 state: {
                     isAuthenticate: true
                 }
             }
           },

           computed: {
               isAuth: () => true,
           },

           localVue
       });

       expect(wrapper.find('h2').text().trim()).toEqual('value')
   })
});