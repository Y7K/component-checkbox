[![npm](https://img.shields.io/npm/l/@y7k/component-checkbox.svg)](https://www.npmjs.com/package/@y7k/component-checkbox) [![npm](https://img.shields.io/npm/v/@y7k/component-checkbox.svg)](https://www.npmjs.com/package/@y7k/component-checkbox)

# Y7K Component: Checkbox

This is a styled, custom `<checkbox>` input Vue component. Changes are emitted to the parent component. 

It is based on [Vue 2](https://vuejs.org), [MaintainableCSS](https://maintainablecss.com/) and the [Y7K Style Plate](https://github.com/y7k/style). Detailed information in the [Y7K Showroom](https://showroom.y7k.tools/showroom/pages/components/lists/filterable-list/index-filterable-list).


![Component](img-component.png)


## Installation

##### Install npm package
```bash
npm install @y7k/component-checkbox --save
```

##### Include in your project
```js
import checkbox from '@y7k/component-checkbox';
```

##### Variant 1: Register components globally:
```js
import checkbox from '@y7k/component-checkbox';
checkbox.registerGlobally();
```
 
##### Variant 2: Use components directly:
```js
import { Checkbox } from '@y7k/component-checkbox';

// Vue component example
export default {

    components: {
        Checkbox,
    },
}
```

##### Include styles
In your main.scss file
```scss
@import '@y7k/filterable-list/src/scss/checkbox';

// If you don't set "node_modules" as a webpack include path:
@import '../[path]/../node_modules/@y7k/component-checkbox/src/scss/checkbox';
```


## Documentation
Please have a look at the usage documentation in the [Y7K Showroom](https://showroom.y7k.tools/showroom/pages/components/ui-elements/checkbox/index-checkbox).
