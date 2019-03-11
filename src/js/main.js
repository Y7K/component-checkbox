import Vue from 'vue';

import _Checkbox from './components/Checkbox';

export default {
    registerGlobally() {
        Vue.component('checkbox', _Checkbox);
    },
};

export const Checkbox = _Checkbox;
