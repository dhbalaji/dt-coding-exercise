import {TOP_PERFORMER_BASELINE} from '../config';
import {roundOfToNearestNumber} from './formatters';

export const salesDataAdapter = (response = []) => {
    const topPerformers = response.filter(item => {
        const {sales} = item;
        return roundOfToNearestNumber(sales) >= TOP_PERFORMER_BASELINE;
    });
    const topPerformerCount = topPerformers.length;
    const topPerformerAverage = roundOfToNearestNumber(topPerformers.reduce((acc, {sales}) => acc + sales, 0) / topPerformerCount);
    const totalSales = roundOfToNearestNumber(response.reduce((acc, {sales}) => acc + sales, 0));
    const sortedSales = [...response].sort((a, b) => a.sales - b.sales);
    const leastSalesValue = Math.floor(sortedSales[0].sales);
    const maxSalesValue = Math.floor(sortedSales[response.length - 1].sales);
    return {
        sales: response,
        topPerformerCount,
        topPerformerAverage,
        totalSales,
        leastSalesValue,
        maxSalesValue
    };
}
