import mont from '@vue/test-utils';
import Home from '../components/pages/HomePages.vue';

describe('Home', () => {
    it('render correcly', () => {
        const wrapper = mont(Home);
        expect(wrapper.find('h1')).toContain('Aplicaction Test');

    })
});