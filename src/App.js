import React, {useState, useEffect} from 'react';
import SalesFilterWithAccessChecks from './global-sales-page/SalesFilter';
import SalesData from './global-sales-page/sales-data';
import TopPerformers from './global-sales-page/TopPerformers';
import AppLoader from './common/components/AppLoader';
import {GLOBAL_SALES_FILTER, READ_WRITE} from './common/constants';
import {fetchSalesData} from './common/ApiHelper';
import {salesDataAdapter} from './common/salesDataAdapter';
import {salesFilterFactory} from './common/salesFilterFactory';
import './app.css';

/*
    In larger apps we make a authorization API call to check if user has access to perform all the operations of the APP or not.
    Based on the access, we conditionally render the app or modify the app behaviour.
    In case of HIDDEN we do not render the portion of the app.
    In case of READ_ONLY we disable update functionality.
    In case of READ_WRITE we give all the privileges to the user.

    The access can be specific to each screen or sub section or same across the app. In this sample app I am using screen wise access pattern.
 */
const appAccessObj = {
    [GLOBAL_SALES_FILTER]: READ_WRITE
};

function App() {

    // We can make API call to get access/authorization checks.
    // To keep it simple, I am passing appAccessObj directly instead of context for time being.


    // We are not using redux, so we are lifting the state to this component
    const [salesResponseCopy, setSalesResponseCopy] = useState([]);
    const [globalSalesObj, setGlobalSalesObj] = useState({});
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [filter, setFilter] = useState({});
    const [filteredResultsCount, setFilteredResultsCount] = useState(0);

    // Api call to load data
    useEffect(() => {
        setIsLoading(true);
        // Error handling not implemented as part of this assignment
        fetchSalesData()
            .then(response => response.json())
            .then((data) => {
                setApplicationDataToState(salesDataAdapter(data));
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Filter sales data logic
    useEffect(() => {
        setIsLoading(true);
        setPage(1);
        if (Object.keys(filter).length) {
            const filteredResults = salesFilterFactory(salesResponseCopy, filter);
            setGlobalSalesObj({...globalSalesObj, sales: filteredResults});
            setFilteredResultsCount(filteredResults.length);
        } else {
            setFilteredResultsCount(0);
        }
        stopLoadingWithDelay();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter]);

    const {
        topPerformersPercentage,
        topPerformersAverageSales,
        leastSalesValue,
        maxSalesValue
    } = globalSalesObj;

    const stopLoadingWithDelay = () => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500); // to show loader on dummy api
    };

    const setApplicationDataToState = (responseFromSalesAdapter, resetFilterAndPage) => {
        setGlobalSalesObj(responseFromSalesAdapter);
        setSalesResponseCopy(responseFromSalesAdapter.sales);
        stopLoadingWithDelay();

        if (resetFilterAndPage) {
            setPage(1);
            setFilter({});
        }
    };

    return (
        <>
            <main className="container container-md p-4">
                <h1 className="fw-bold fs-1">Global Sales</h1>
                <SalesFilterWithAccessChecks {...{
                    filter,
                    setFilter,
                    leastSalesValue,
                    maxSalesValue,
                    filteredResultsCount,
                    access: appAccessObj
                }}/>
                <SalesData {...{
                    ...globalSalesObj,
                    page,
                    isLoading,
                    setIsLoading,
                    setPage,
                    setApplicationDataToState
                }}/>
                <TopPerformers {...{
                    topPerformersPercentage,
                    topPerformersAverageSales
                }}/>
            </main>
            <AppLoader {...{isLoading}} />
        </>
    );
}

export default App;
