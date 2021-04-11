const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager(1, "Foo", "test@test.com", testValue);
  expect(e.getOfficeNum()).toBe(testValue);
});

test('getPosition() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager(1, testValue, "test@test.com", 100);
  expect(e.getPosition()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager(1, "Foo", "test@test.com", testValue);
  expect(e.getOfficeNum()).toBe(testValue);
});
