# classies

Simple css class string builder without shenanigans.

## install

```
npm install classies
```

## usage

```js
const cls = require('classies')

let classString = cls({
  foo: true,
  bar: someCondition,
  [classString]: true
}, separator) // separator defaults to ' '
```
