//import the Intern class to test
const Intern = require('../lib/Intern');
//testing the Intern class
describe('Intern', () => {
    //testing getSchool()
    describe("getSchool method", () => {
        it("should return a school equal to MIT", () => {
           //Arrange and act instantiating a Intern object with four parameters
           const intern = new Intern('Kyle', '342', 'kylewood@gmail.com', 'MIT');
           //Assert that the school is equal to MIT
           expect(intern.getSchool()).toEqual('MIT'); 
        })
    })
})


