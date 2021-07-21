/**
 * This function returns the sales data after filtering by company name and sales data
 * @param sales
 * @param filterObj
 * @returns {*[]}
 */
export const salesFilterFactory = (sales = [], {companyName, minSales} = {}) => sales
    .filter(({company: companyNameInLoopItem}) => filterCompanyNamePredicate([...sales], companyNameInLoopItem, companyName))
    .filter(({sales: minSalesValueInLoopItem}) => filterByMinSalesPredicate([...sales], minSalesValueInLoopItem, minSales));

/**
 * This predicate function checks if company name filter is present in sales.companyName
 * @param sales
 * @param companyName
 * @param companyNameFilter
 * @returns {boolean}
 */
export const filterCompanyNamePredicate = (sales, companyName, companyNameFilter) => {
    if (!companyNameFilter) {
        return true;
    }

    return companyName.toLowerCase().includes(companyNameFilter.toLowerCase());
};

/**
 * This predicate function checks if sales.minSales is greater than minSales filter
 * @param sales
 * @param minSales
 * @param minSalesFilter
 * @returns {boolean}
 */
export const filterByMinSalesPredicate = (sales, minSales, minSalesFilter) => {
    if (!minSalesFilter) {
        return true;
    }

    return minSales >= minSalesFilter;
};
