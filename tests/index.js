// @ts-check
let o = require('ospec')
let cls = require('../')

const bar = 'bar'

o('basic', function() {
  o(cls({
    foo: true,
    [bar]: true,
    baz: false
  })).equals('foo bar')
})

o('empty', function() {
  o(cls({
    baz: false
  })).equals('')
})

o('other separator', function() {
  o(cls({
    foo: true,
    [bar]: true,
  }, ':')).equals('foo:bar')
})