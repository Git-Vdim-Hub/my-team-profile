//import the Employee class to test
const Employee = require("../lib/Employee");
//testing the Employee class
describe("Employee", () =>{
    //testing getName()
    describe("getName method", () => {
        it("should return an employee name equal to Bill", () => {
            //Arrange and act instantiating a new Employee object with the three parameters
            const employee = new Employee('Bill', '1', 'billsmith@gmail.com');
            //Assert that the name is equal to bill
            expect(employee.getName()).toEqual('Bill');
        })
    })
    //testing getId()
    describe("getId method", () => {
        it("should return an employee id equal to 1", () => {
            //Arrange and act instantiating a new Employee object with the three parameters
            const employee = new Employee('Bill', '1', 'billsmith@gmail.com');
            //Assert that the ID is equal to 1
            expect(employee.getId()).toEqual('1');
        })
    })
});