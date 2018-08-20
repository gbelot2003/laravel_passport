import {mount} from '@vue/test-utils';
import Home from '../components/pages/HomePages.vue';

describe('Home', () => {
    it('render correcly', () => {
        const wrapper = mount(Home);
        expect(wrapper.text()).not.toBe('dar');
        expect(wrapper.find('h1').text()).toContain('Aplicaction Test');

    })
});