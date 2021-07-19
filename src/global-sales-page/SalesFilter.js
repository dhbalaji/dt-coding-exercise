import React, {useState, useEffect} from "react";
import {GLOBAL_SALES_FILTER} from '../common/constants';
import WithAccessChecks from '../common/WithAccessChecks';

function SalesFilter({
                         setFilter, leastSalesValue,
                         maxSalesValue, filterResultsCount, filter
                     }) {
    /*
        Component level validation has been implemented.
        Field level validation like alphanumeric etc has been skipped in the interest of time.
     */
    const [companyName, setCompanyName] = useState('');
    const [minSales, setMinSales] = useState(0);
    const [validationError, setValidationError] = useState('');
    const {companyName: companyNameFilter, minSales: minSalesFilter} = filter;

    useEffect(() => {
        if (!companyNameFilter) {
            setCompanyName('');
        }

        if (!minSalesFilter) {
            setMinSales(0)
        }
    }, [companyNameFilter, minSalesFilter])

    useEffect(() => {
        if (!parseInt(minSales) && !companyName) {
            setValidationError('Enter a value');
        } else {
            setValidationError('');
        }
    }, [companyName, minSales]);

    const filterData = () => {
        setFilter({companyName, minSales});
    };
    return (
        <div className="card rounded-custom fs-3">
            <form className="card-body p-4">
                <div className="mb-3">
                    <input type="text" className="form-control form-control-lg rounded-custom-sm"
                           placeholder="Company"
                           aria-label="Company"
                           onChange={(e) => setCompanyName(e.target.value)} value={companyName}/>
                </div>
                <p className="fs-3 link-secondary mb-0">Minimum Sales ($)</p>
                <div className="row mb-3">
                    <div className="col-9">
                        <input type="range" className="form-range" min={leastSalesValue} max={maxSalesValue}
                               value={minSales}
                               aria-label="Minimum Sales ($)" onChange={(e) => setMinSales(e.target.value)}/>
                    </div>
                    <div className="col-3">
                        <input type="text" className="form-control form-control-lg" value={minSales} disabled/>
                    </div>
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-secondary border-dark border-4 text-uppercase fw-bold filter-results"
                            type="button" onClick={filterData} disabled={!!validationError}>Filter Results
                    </button>
                </div>
            </form>
            <FilterResultsDisplay filterResultsCount={filterResultsCount}/>
        </div>
    );
}

const FilterResultsDisplay = ({filterResultsCount}) => {
    if (filterResultsCount > 0) {
        return <p className="m-auto mb-3 text-primary fs-5">{filterResultsCount} result(s) found</p>
    }
    return null
};

const SalesFilterWithAccessChecks = WithAccessChecks(SalesFilter, GLOBAL_SALES_FILTER);

export default SalesFilterWithAccessChecks;
