const Intern = require('../lib/Intern.js')

test('checks for Intern properties and methods', () => {

    const intern = new Intern('Dave', 3 , 'ruminert@gmail.com', 'smu');
    expect(intern.name).toBe('Dave');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.getName()).toEqual(expect.stringContaining('Dave'));
    expect(intern.getEmail()).toEqual(expect.stringContaining('ruminert@gmail.com'));
    expect(intern.getId()).toBe(3);
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
    expect(intern.getSchool()).toEqual(expect.stringContaining('smu'));
});