
const Employee = require('../lib/Employee.js');

test('checks for employee class properties and methods', () =>{
    const employee = new Employee('justin' , 5 , 'ruminert@gmail.com');

    expect(employee.name).toBe('justin');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.getName()).toEqual(expect.stringContaining('justin'));
    expect(employee.getEmail()).toEqual(expect.stringContaining('ruminert@gmail.com'));
    expect(employee.getId()).toBe(5);
});
 