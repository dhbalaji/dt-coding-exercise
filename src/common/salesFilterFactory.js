export const salesFilterFactory = (sales = [], filterObj = {}) => {
  const {companyName, minSales} = filterObj;
  return  sales.filter(({company: companyItem}) => filterCompanyName([...sales], companyItem, companyName))
      .filter(({sales: salesValue}) => filterByMinSales([...sales], salesValue, minSales));
};

export const filterCompanyName = (sales, companyItem, companyNameFilter) => {
    if (!companyNameFilter) {
        return true;
    }

    return companyItem.toLowerCase().includes(companyNameFilter.toLowerCase());
};

export const filterByMinSales = (sales, minSalesItem, minSalesFilter) => {
  if (!minSalesFilter) {
      return true;
  }

  return minSalesItem >= minSalesFilter;
};
