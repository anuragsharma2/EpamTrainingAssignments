const { TestWatcher } = require('jest');
var matchers=require('./Matchers');

//to  test object equality
describe("Matchers Suite",()=>{
    test('check for object equality',()=>{
        let obj={"id":100,"name":"ojasvi","age":20,"occupation":"student"};
        expect(matchers.returnObject()).toEqual(obj);
    })
    test('checking not to be null',()=>{
        expect(matchers.returnObject()).not.toBeNull();
    })
    //toBetruthy and toBeFalsy
    test('validate for truthy and falsy',()=>{
        var obj=matchers.returnObject();
        expect(obj).toBeTruthy();
    })
    test('to check toContain',()=>{
        let str="ramanujan";
        expect(matchers.returnArrayOfNames()).toContain(str);
    })
    beforeAll(()=>{
        console.log("from before All function");
    })
    beforeEach(()=>{
        console.log("from before each function");
    })
    afterEach(()=>{
        console.log("from after each function");
    })
    afterAll(()=>{
        console.log("from after All function");
    })
})
