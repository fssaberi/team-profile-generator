const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Sara', 3, 'something@somewhere.com');

    expect(employee.name).toBe('Sara');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('something@somewhere.com');
});

test("gets employee's name, id, and email", () => {
    const employee = new Employee('Sara', 3, 'something@somewhere.com');

    expect(employee.getName()).toEqual('Sara');
    expect(employee.getId()).toEqual(3);
    expect(employee.getEmail()).toEqual('something@somewhere.com');
});

test("instantiates employee object", () => {
    const employee = new Employee();

    expect(typeof employee).toBe('object');
})