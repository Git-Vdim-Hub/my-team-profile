//import the Manager class to test
const Manager = require('../lib/Manager');
//testing the Manager class
describe('Manager', () => {
    //testing getEmail()
    describe("getEmail method", () => {
        it("should return an e-mail equal to johnsimon@gmail.com", ()=>{
            //Arrange and act instantiating a Manager object with four parameters
            const manager = new Manager('John', 32, 'johnsimon@gmail.com', '321-123-1234');
            //Assert that the email is equal to johnsimon@gmail.com
            expect(manager.getEmail()).toEqual('johnsimon@gmail.com');
        })
    })
    //testing getPhone()
    describe("getPhone method", () => {
        it("should return a phone number equal to 321-123-1234", ()=>{
            //Arrange and act instantiating a Manager object with four parameters
            const manager = new Manager('John', 32, 'johnsimon@gmail.com', '321-123-1234');
            //Assert that the phone number is equal to 321-123-1234
            expect(manager.getPhone()).toEqual('321-123-1234');
        })
    })

})