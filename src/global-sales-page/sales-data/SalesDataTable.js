import React from "react";
import {formatCurrencyWithSymbol} from '../../common/formatters';
import {CURRENCY, PAGE_SIZE} from '../../config';
import UpArrowAnimated from '../../common/components/UpArrowAnimated';
import './salesTable.css';

/*
Known usability issues:

1. There is a significant jump in page layout when paging toolbar is used on xs screens. This is due to lengthy company names.
    We can truncate the cell data using ellipsis as a fix or use column resizing which is out of scope for this assignment.
 */
function SalesDataTable(props) {
    const {
        totalSales,
        sales = {},
        page,
        salesLength
    } = props;
    const startIndex = page !== 1 ? ((page - 1) * PAGE_SIZE) : 0;
    const endIndex = startIndex + PAGE_SIZE;
    const pagedSales = Array.isArray(sales) ? sales.slice(startIndex, endIndex) : [];
    const pageSalesTotal = pagedSales.reduce((acc, {sales}) => acc + sales, 0);

    return (
        <div className="card rounded-custom fs-3 table-responsive salesDataTable">
            <table className="table mb-0">
                <thead>
                <tr>
                    <th className="text-uppercase px-sm-4 link-secondary">Name</th>
                    <th className="text-uppercase px-sm-4 link-secondary">Company</th>
                    <th className="text-uppercase px-sm-4 text-end link-secondary">Monthly Sales ({CURRENCY})</th>
                </tr>
                </thead>
                <tbody>
                {
                    Array.isArray(pagedSales) && pagedSales.map(({
                                                                     id,
                                                                     name,
                                                                     company,
                                                                     sales: salesPerMonth,
                                                                     isTopPerformer
                                                                 }) => (
                        <tr key={id}>
                            <td className="px-sm-4 text-capitalize">
                                <span className="me-1">{name}</span>
                                {isTopPerformer ? <UpArrowAnimated/> : null}
                            </td>
                            <td className="px-sm-4">{company}</td>
                            <td className="px-sm-4 text-end">{salesPerMonth}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            {
                salesLength === 0 ? <p className="p-3">No data found</p> : null
            }
            <div className="p-3 px-sm-4 bg-light rounded-bottom rounded-custom-bottom">
                <div className="d-flex flex-row bd-highlight justify-content-between fw-bold">
                    <p className="mb-0">Page Sales Subtotal</p>
                    <p className="mb-0">{formatCurrencyWithSymbol(pageSalesTotal)}</p>
                </div>
                <div className="d-flex flex-row bd-highlight justify-content-between fw-bold">
                    <p className="mb-0">Total Sales</p>
                    <p className="mb-0">{formatCurrencyWithSymbol(totalSales)}</p>
                </div>
            </div>
        </div>
    );
}

export default SalesDataTable;
