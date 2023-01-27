//import the Engineer class to test
const Engineer = require('../lib/Engineer');
//testing the Engineer class
describe("Engineer", () => {
    //testing getStatus()
    describe("getStatus method", () => {
        it("should return a status of Engineer", () =>{
        //Arrange and act instantiating a new Engineer object with four parameters
        const engineer = new Engineer('Jack', '1', 'jackjohn@gmail.com', 'jack-john');
        //Assert that the status is equal to Engineer
        expect(engineer.getStatus()).toEqual('Engineer');
        })
    })
    //testing getGitHub()
    describe("getGitHub method", () => {
        it("should return a gitHub username of jack-john", () => {
        //Arrange and act instantiating a new Engineer object with four parameters
        const engineer = new Engineer('Jack', '1', 'jackjohn@gmail.com', 'jack-john');
        //Assert that the gitHub username is equal to jack-john
        expect(engineer.getGitHub()).toEqual('jack-john')
        })
    })
})