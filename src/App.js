import React, {useState, useEffect} from 'react';
import SalesFilterWithAccessChecks from './global-sales-page/SalesFilter';
import SalesData from './global-sales-page/sales-data/SalesDataWrapper';
import TopPerformers from './global-sales-page/TopPerformers';
import {GLOBAL_SALES_FILTER, GLOBAL_SALES_PAGE, READ_WRITE} from './common/constants';
import {fetchSalesData} from './common/ApiHelper';
import {salesDataAdapter} from './common/salesDataAdapter';
import './App.css';
import {salesFilterFactory} from './common/salesFilterFactory';

/*
    In larger apps we make a authorization API call to check if user has access to perform all the operations of the APP or not.
    Based on the access, we conditionally render the app or modify the app behaviour.
    In case of HIDDEN we do not render the portion of the app.
    In case of READ_ONLY we disable update functionality.
    In case of READ_WRITE we give all the privileges to the user.

    The access can be specific to each screen or sub section or same across the app. In this sample app I am using screen wise access pattern.
 */
const appAccessObj = {
    [GLOBAL_SALES_PAGE]: READ_WRITE,
    [GLOBAL_SALES_FILTER]: READ_WRITE
};

function App() {
    // We can make API call to get access/authorization checks.
    // To keep it simple, I am passing appAccessObj directly instead of context for time being.
    const [salesResp, setSalesResp] = useState([]);
    const [salesData, setSalesData] = useState({});
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState({});
    const [filterResultsCount, setFilterResultsCount] = useState({});

    // Api call to load data
    useEffect(() => {
        // Error handling not implemented as part of this assignment
        fetchSalesData()
            .then(response => response.json())
            .then((data) => {
                setSalesData(salesDataAdapter(data));
                setSalesResp(data);
                setLoading(false);
                setPage(1);
            });
    }, []);

    // Filter data logic
    useEffect(() => {
        setPage(1);
        if (Object.keys(filter).length) {
            const filteredResults = salesFilterFactory(salesResp, filter);
            setSalesData({...salesData, sales: filteredResults});
            setFilterResultsCount(filteredResults.length);
        } else {
            setFilterResultsCount(0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter]);

    const {
        topPerformerCount, topPerformerAverage, leastSalesValue,
        maxSalesValue
    } = salesData;

    return (
        <main className="container container-md p-4">
            <h1 className="fw-bold fs-1">Global Sales</h1>
            <SalesFilterWithAccessChecks access={appAccessObj} {...{
                filter, setFilter, leastSalesValue,
                maxSalesValue, filterResultsCount, setPage
            }}/>
            <SalesData {...{...salesData, page, loading, setSalesData, setLoading, setPage, setSalesResp, setFilter}} />
            <TopPerformers {...{topPerformerCount, topPerformerAverage}}/>
        </main>
    );
}

export default App;
