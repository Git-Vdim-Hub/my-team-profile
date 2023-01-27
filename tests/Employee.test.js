//import the Employee class to test
const Employee = require("../lib/Employee");
//Here we are testing the Employee class
describe("Employee", () =>{
    describe("getName method", () => {
        it("should return an employee name equal to Bill", () => {
            //arrange and act instantiating a new Employee class with the three parameters
            const employee = new Employee('Bill', '1', 'billsmith@gmail.com');
            //Assert that the name is equal to bill
            expect(employee.getName()).toEqual('Bill');
        })
    })
    describe("should return an employee id equal to 1", () => {
            //arrange and act instantiating a new Employee class with the three parameters
            const employee = new Employee('Bill', '1', 'billsmith@gmail.com');
            //Assert that the ID is equal to 1
            expect(employee.getId()).toEqual('1');
    })

});