const expect = require('chai').expect
const dateHelper = require('../lib/index')
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