import { classNames } from './classNames';

describe('classnames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    });

    test('with mods all true', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(classNames('someClass', { hovered: true, scrollable: true }, ['class1', 'class2'])).toBe(expected);
    });

    test('with mods false', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass', { hovered: true, disabled: false }, ['class1', 'class2'])).toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass', { hovered: true, disabled: undefined }, ['class1', 'class2'])).toBe(expected);
    });
});