import { add } from '../utils/functions';
//vw bad example from earlier but still wors vvv
//const {add} = require('../utils/functions')

test('add return sum of two integers ', () => {
    expect(add(1,2).toBe(3))
});

test('add will add a string and a number together', () => {
    expect(add('12','5')).toBe(17)
});

test('add returns NaN if non numbers are the arguments', () => {
    expect(add('submarine', 'nuclearReactor').toBeNaN())
});