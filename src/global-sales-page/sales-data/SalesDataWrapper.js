import React from "react";
import SalesDataTable from './SalesDataTable';
import SalesDataPagination from './SalesDataPagination';
import {fetchSalesData} from '../../common/ApiHelper';
import {salesDataAdapter} from '../../common/salesDataAdapter';

function SalesData({salesData, page, setSalesData, setLoading, setPage, numberOfPages}) {

    const refreshHandler = () => {
        fetchSalesData(true)
            .then(response => response.json())
            .then((data) => {
                setSalesData(salesDataAdapter(data));
                setLoading(false);
                setPage(1);
            });
    };

    return (
        <section className="pt-3">
            <div className="d-flex flex-row bd-highlight justify-content-between mb-0">
                <h2 className="fs-2 fw-bold">Sales Data</h2>
                <p className="text-uppercase fw-bold pt-2" role="button" onClick={refreshHandler}>Refresh Data</p>
            </div>
            <SalesDataTable {...{page, salesData}}/>
            <SalesDataPagination {...{page, numberOfPages, setPage}}/>
        </section>
    )
}

export default SalesData;
