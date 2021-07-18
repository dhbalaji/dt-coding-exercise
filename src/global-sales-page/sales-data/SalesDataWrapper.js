import React from "react";
import SalesDataTable from './SalesDataTable';
import SalesDataPagination from './SalesDataPagination';
import {getHeaders} from '../../common/ApiHelper';
import {API_BASE_PATH, SALES_DATA_API} from '../../config';

function SalesData({salesData = [], page, setSalesData, setLoading, setPage}) {
    const salesDataLength = salesData.length;

    const refreshHandler = () => {
        fetch(
            `/${API_BASE_PATH}/${SALES_DATA_API}`,
            {
                method: "GET",
                headers: getHeaders(true)
            }
        ).then(response => response.json()).then((data) => {
            setSalesData(data);
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
            <SalesDataPagination {...{page, salesDataLength, setPage}}/>
        </section>
    )
}

export default SalesData;
