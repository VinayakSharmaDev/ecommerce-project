import { it, expect } from 'vitest';
import { formatMoney } from './money';

it('formmates 2323 cents as $23.23', () => {
    expect(formatMoney(2323)).toBe('$23.23');
});

it('check for 2 decimals', () => {
    expect(formatMoney(1210)).toBe('$12.10');
});