import {PAGE_SIZE, TOP_PERFORMER_BASELINE} from '../config';
import {roundOfToNearestNumber} from './formatters';

export const salesDataAdapter = (response = []) => {
    const topPerformers = response.filter(item => {
        const {sales} = item;
        return roundOfToNearestNumber(sales) >= TOP_PERFORMER_BASELINE;
    });
    const topPerformerCount = topPerformers.length;
    const topPerformerAverage = roundOfToNearestNumber(topPerformers.reduce((acc, {sales}) => acc + sales, 0) / topPerformerCount);
    const totalSales = roundOfToNearestNumber(response.reduce((acc, {sales}) => acc + sales, 0));
    return {
        sales: response,
        topPerformerCount,
        topPerformerAverage,
        totalSales,
        numberOfPages: response.length / PAGE_SIZE
    };
}
