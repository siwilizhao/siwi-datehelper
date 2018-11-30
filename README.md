[![node](https://img.shields.io/node/v/siwi-datehelper.svg)](https://www.npmjs.com/package/siwi-datehelper)
[![Build Status](https://travis-ci.org/siwilizhao/siwi-datehelper.svg?branch=master)](https://travis-ci.org/siwilizhao/siwi-datehelper)
[![npm](https://img.shields.io/npm/v/siwi-datehelper.svg)](https://www.npmjs.com/package/siwi-datehelper)
[![npm](https://img.shields.io/npm/dt/siwi-datehelper.svg)](https://www.npmjs.com/package/siwi-datehelper)
[![Github file size](https://img.shields.io/github/size/siwilizhao/siwi-datehelper/lib/index.js.svg)](https://github.com/siwilizhao/siwi-datehelper/lib/index.js)

# siwi-datehelper

## install

### use npm

```shell
npm install siwi-datehelper
````

### use yarn

```shell
yarn add siwi-datehelper
```


## demo
```js
const expect = require('chai').expect
const dateHelper = require('siwi-datehelper')
describe('index.js', () => {
    it('time', async () => {
        const t = await dateHelper.time()
        console.log(t);
        expect(t).to.be.an('number')
    });
    it('Format', async () => {
        const f = await dateHelper.date_format()
        console.log(f);
        expect(f).to.be.a('string')
    });
    it('friendly', async () => {
        const time = await dateHelper.time()
        const f = await dateHelper.friendly(time - 340000)
        console.log(f);
        expect(f).to.be.a('string')
    });
});
```