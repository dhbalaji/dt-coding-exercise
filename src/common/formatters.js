import {CURRENCY_CODE} from '../config';

export const roundOfToNearestNumber = (value) => Math.round(value);

const {format: formatCurrencyForDisplay} = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: CURRENCY_CODE,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
});

export const formatCurrencyWithSymbol = formatCurrencyForDisplay;
