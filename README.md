# classies

[![Greenkeeper badge](https://badges.greenkeeper.io/StephanHoyer/classies.svg)](https://greenkeeper.io/)

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