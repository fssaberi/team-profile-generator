const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Sara', 3, 'something@somewhere.com', 'Cool School');

    expect(intern.name).toBe('Sara');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual('something@somewhere.com');
    expect(intern.school).toEqual('Cool School');
});

test('gets intern name, id, email, and school', () => {
    const intern = new Intern('Sara', 3, 'something@somewhere.com', 'Cool School');

    expect(intern.getName()).toEqual('Sara');
    expect(intern.getId()).toEqual(3);
    expect(intern.getEmail()).toEqual('something@somewhere.com');
    expect(intern.getSchool()).toEqual('Cool School');
})

test('instantiates intern object', () => {
    const intern = new Intern();

    expect(typeof intern).toBe('object');
})