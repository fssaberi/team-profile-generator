const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Sara', 3, 'something@somewhere.com', '1039');

    expect(manager.name).toBe('Sara');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual('something@somewhere.com');
    expect(manager.officeNumber).toEqual('1039');
});

test('gets manager name, id, email, and office number', () => {
    const manager = new Manager('Sara', 3, 'something@somewhere.com', '1039');

    expect(manager.getName()).toEqual('Sara');
    expect(manager.getId()).toEqual(3);
    expect(manager.getEmail()).toEqual('something@somewhere.com');
    expect(manager.getOfficeNumber()).toEqual('1039');
})

test('instantiates manager object', () => {
    const manager = new Manager();

    expect(typeof manager).toBe('object');
})