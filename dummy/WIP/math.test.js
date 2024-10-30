const sum = require('./math');

test('sums two positive numbers correctly', () => {
    expect(sum(2, 3)).toBe(5);
});

test('sums a positive and a negative number correctly', () => {
    expect(sum(5, -3)).toBe(2);
});

test('sums two negative numbers correctly', () => {
    expect(sum(-2, -3)).toBe(-5);
});

test('sums zero and a number correctly', () => {
    expect(sum(0, 5)).toBe(5);
});
