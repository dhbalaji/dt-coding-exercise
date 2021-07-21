import React from "react";
import SalesDataTable from './SalesDataTable';
import SalesDataPagination from './SalesDataPagination';
import {fetchSalesData} from '../../common/ApiHelper';
import {salesDataAdapter} from '../../common/salesDataAdapter';
import {PAGE_SIZE} from '../../config';

function SalesData({
                       sales = [],
                       totalSales,
                       page,
                       setIsLoading,
                       setPage,
                       setApplicationDataToState
                   }) {
    const numberOfPages = Math.ceil(sales.length / PAGE_SIZE);
    const refreshHandler = () => {
        setIsLoading(true);
        fetchSalesData(true)
            .then(response => response.json())
            .then((data) => {
                setApplicationDataToState(salesDataAdapter(data), true);
            });
    };

    return (
        <section className="pt-3">
            <div className="d-flex flex-row bd-highlight justify-content-between mb-0">
                <h2 className="fs-2 fw-bold">Sales Data</h2>
                <p className="text-uppercase fw-bold pt-2" role="button" onClick={refreshHandler}>Refresh Data</p>
            </div>
            <SalesDataTable {...{page, sales, totalSales, salesLength: sales.length}}/>
            <SalesDataPagination {...{page, numberOfPages, setPage, salesLength: sales.length}}/>
        </section>
    )
}

export default SalesData;
