/*jshint esversion: 6 */

const chai = require('chai');
const expect = chai.expect;

const dart = require('../dart.js').dart;

describe('darts', ()=>{
  it('should be a function',()=>{
    expect(dart).to.be.a('function');
  });
  it('should take an array', ()=>{
    expect(dart.bind(null, 'helo')).to.throw(Error);
    expect(dart.bind(null, {})).to.throw(Error);
  });
  it('should throw error if arry contains wrong datatype',()=>{
    expect(dart.bind(null, ['hello'])).to.throw(Error);
  });
  it('should return 0 for numers > 10', ()=>{
    expect(dart([11,20,500])).to.be.equal(0);
  });
  it('should return 5 per arr between 5 - 10', ()=>{
    expect(dart([5,6,11,10])).to.be.equal(15);
  });
  it('should return 10 per arr between 0 and < 5',()=>{
    expect(dart([1,2,3,66,4])).to.be.equal(40);
  });
  it('should return mix of 5 and 10',()=>{
    expect(dart([0,2,9,30])).to.be.equal(25);
  });
  it('should bonus 100 if all numbers less than 5',()=>{
    expect(dart([0,1,1,1,2,3,0,4])).to.be.equal(180);
  });
  it('should not count negative numbers',()=>{
    expect(dart([-1,5,2])).to.be.equal(15);
  });
  it('should ignore NaN',()=>{
    expect(dart([NaN,1])).to.be.equal(10);
  });
});