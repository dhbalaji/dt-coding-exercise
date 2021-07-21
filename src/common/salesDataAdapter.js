import {TOP_PERFORMER_BASELINE} from '../config';
import {roundOfToNearestNumber} from './formatters';

export const salesDataAdapter = (response = []) => {
    if (response.length === 0) {
        return {
            sales: [],
            topPerformerCount: 0,
            topPerformerAverage: 0,
            totalSales: 0,
            leastSalesValue: 0,
            maxSalesValue: 0
        };
    }
    const topPerformers = response.filter(item => {
        const {sales} = item;
        return roundOfToNearestNumber(sales) >= TOP_PERFORMER_BASELINE;
    });
    const topPerformerCount = Math.round((topPerformers.length / response.length) * 100);
    const topPerformerAverage = roundOfToNearestNumber(topPerformers.reduce((acc, {sales}) => acc + sales, 0) / topPerformerCount);
    const totalSales = roundOfToNearestNumber(response.reduce((acc, {sales}) => acc + sales, 0));
    const sortedSales = [...response].sort((a, b) => a.sales - b.sales);
    const leastSalesValue = Math.floor(sortedSales[0].sales);
    const maxSalesValue = Math.floor(sortedSales[response.length - 1].sales);
    const responseWithTopPerformersFlag = response.map((item) => {
        const {sales} = item;
        let isTopPerformer = false;
        if (sales >= TOP_PERFORMER_BASELINE) {
            isTopPerformer = true
        }
        return {...item, isTopPerformer}
    });

    return {
        sales: responseWithTopPerformersFlag,
        topPerformerCount,
        topPerformerAverage,
        totalSales,
        leastSalesValue,
        maxSalesValue
    };
}
