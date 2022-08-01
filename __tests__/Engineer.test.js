
const Engineer = require('../lib/Engineer.js')

test('checks for engineer properties and methods', () => {

    const engineer = new Engineer('Dave', 3 , 'ruminert@gmail.com', 't-rummy@github.com');
    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.getName()).toEqual(expect.stringContaining('Dave'));
    expect(engineer.getEmail()).toEqual(expect.stringContaining('ruminert@gmail.com'));
    expect(engineer.getId()).toBe(3);
    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
    expect(engineer.getGitHub()).toEqual(expect.stringContaining('t-rummy@github.com'));
})