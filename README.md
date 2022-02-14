# classies

![Build Status](https://github.com/StephanHoyer/classies/actions/workflows/merge.yml/badge.svg)
[![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)
![Compression](http://img.badgesize.io/StephanHoyer/classies/master/index.js.svg?compression=gzip)

Simple css class string builder without shenanigans.

## install

```
npm install classies
```

## usage

```js
const cls = require("classies");
const isSelected = true;

let classString = cls(
  {
    foo: true,
    bar: someCondition,
    [classString]: true,
    isSelected,
  },
  separator
); // separator defaults to ' '
```

## perfomance

see [jsperf](https://jsperf.com/cls/1)

Latest version was done by [@isiahmeadows](https://github.com/isiahmeadows) and [@gamb](https://github.com/gamb).

If you have a better version, feel free to submit a PR.

## releases

Releases are automated by [pr-release](http://pr-release.org/)
