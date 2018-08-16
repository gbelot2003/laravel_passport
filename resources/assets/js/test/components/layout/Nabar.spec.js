import {shallowMount, mount} from '@vue/test-utils';
import NavBar from '../../../components/NabNar.vue';
import auth from '../../../packages/auth/auth';
import moxios from 'moxios'
import axios from 'axios';

describe('Navbar Testiong', () => {

    beforeEach(() => {
        moxios.install(axios);
    });

   it('is configurate correcly', () => {

       mount(NavBar, {
           stubs: ['auth']
       });

       const wrapper = shallowMount(NavBar, {
           stubs: {
                'auth': auth
           }
       });

   });

    afterEach(() => {
        moxios.uninstall(axios);
    });
});