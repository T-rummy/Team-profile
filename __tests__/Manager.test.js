
const Manager = require('../lib/Manager.js')

test('checks for Manager properties and methods', () => {

    const manager = new Manager('Dave', 3 , 'ruminert@gmail.com', 2, 'manager');
    expect(manager.name).toBe('Dave');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.getName()).toEqual(expect.stringContaining('Dave'));
    expect(manager.getEmail()).toEqual(expect.stringContaining('ruminert@gmail.com'));
    expect(manager.getId()).toBe(3);
    expect(manager.officeNumber).toBe(2);
    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});