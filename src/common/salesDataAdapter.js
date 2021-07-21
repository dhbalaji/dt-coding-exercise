import {TOP_PERFORMER_BASELINE} from '../config';
import {roundOfToNearestNumber} from './formatters';

/**
 * Takes the JSON response and converts to application state data
 * @param response
 * @returns {{leastSalesValue: number, topPerformersPercentage: number, topPerformersAverageSales: number, totalSales: number, sales: [], maxSalesValue: number}|{leastSalesValue: *, topPerformersPercentage: *, topPerformersAverageSales: *, totalSales: *, sales: *, maxSalesValue: *}}
 */
export const salesDataAdapter = (response = []) => {
    // when JSON returns empty response
    if (response.length === 0) {
        return {
            sales: [],
            topPerformersPercentage: 0,
            topPerformersAverageSales: 0,
            totalSales: 0,
            leastSalesValue: 0,
            maxSalesValue: 0
        };
    }

    const topPerformers = response.filter(({sales}) => roundOfToNearestNumber(sales) >= TOP_PERFORMER_BASELINE);
    const topPerformersPercentage = Math.round((topPerformers.length / response.length) * 100);
    const topPerformersAverageSales = roundOfToNearestNumber(topPerformers.reduce((acc, {sales}) => acc + sales, 0) / topPerformersPercentage);
    const totalSales = roundOfToNearestNumber(response.reduce((acc, {sales}) => acc + sales, 0));
    const salesSortedByMinSales = [...response].sort((a, b) => a.sales - b.sales);
    const leastSalesValue = Math.floor(salesSortedByMinSales[0].sales);
    const maxSalesValue = Math.floor(salesSortedByMinSales[response.length - 1].sales);
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
        topPerformersPercentage,
        topPerformersAverageSales,
        totalSales,
        leastSalesValue,
        maxSalesValue
    };
};
