[![Build Status](https://travis-ci.org/StephanHoyer/classies.svg?branch=master)](https://travis-ci.org/StephanHoyer/classies)

# classies

[![Greenkeeper badge](https://badges.greenkeeper.io/StephanHoyer/classies.svg)](https://greenkeeper.io/)

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

## perfomance

see [jsperf](https://jsperf.com/cls/1)

If you have a better version, feel free to submit a PR.
