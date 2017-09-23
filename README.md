# classies

Simple css class string builder without shenanigans.

##usage

```js
const cls = require('classies')

let classString = cls({
  foo: true,
  bar: someCondition,
  [one]: true
}, separator) // separator defaults to ' '
```