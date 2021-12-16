const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Sara', 3, 'something@somewhere.com', 'fssaberi');

    expect(engineer.name).toBe('Sara');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual('something@somewhere.com');
    expect(engineer.github).toEqual('fssaberi');
})

test('gets engineer name, id, email, and github', () => {
    const engineer = new Engineer('Sara', 3, 'something@somewhere.com', 'fssaberi');

    expect(engineer.getName()).toEqual('Sara');
    expect(engineer.getId()).toEqual(3);
    expect(engineer.getEmail()).toEqual('something@somewhere.com');
    expect(engineer.getGithub()).toEqual('fssaberi');
})

test('instantiates engineer object', () => {
    const engineer = new Engineer();

    expect(typeof engineer).toBe('object');
})