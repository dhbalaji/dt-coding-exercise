import React, {useState, useEffect} from "react";
import InputRange from 'react-input-range';
import {GLOBAL_SALES_FILTER} from '../common/constants';
import WithAccessChecks from '../common/WithAccessChecks';
import {CURRENCY} from '../config';
import './salesFilter.css';

function SalesFilter({
                         setFilter,
                         leastSalesValue,
                         maxSalesValue,
                         filteredResultsCount,
                         filter,
                         isReadOnly
                     }) {
    /*
        Component level validation has been implemented.
        Field level validation like alphanumeric etc has been skipped in the interest of time.
     */
    const [companyName, setCompanyName] = useState('');
    const [minSales, setMinSales] = useState(0);
    const [isFormDataValid, setIsFormDataValid] = useState(false);
    const {companyName: companyNameFilter, minSales: minSalesFilter} = filter;

    // effect to reset the form upon refresh
    useEffect(() => {
        if (!companyNameFilter) {
            setCompanyName('');
        }

        if (!minSalesFilter) {
            setMinSales(0)
        }
    }, [companyNameFilter, minSalesFilter]);

    // effect to disable the filter-result button when no data is entered in form
    useEffect(() => {
        if (!parseInt(minSales) && !companyName) {
            setIsFormDataValid(false);
        } else {
            setIsFormDataValid(true);
        }
    }, [companyName, minSales]);

    return (
        <div className="card rounded-custom fs-3 salesFilter">
            <form className="card-body p-4">
                <div className="mb-3">
                    <input type="text"
                           className="form-control form-control-lg rounded-custom-sm"
                           placeholder="Company"
                           aria-label="Company"
                           onChange={(e) => setCompanyName(e.target.value)}
                           value={companyName}
                           disabled={isReadOnly}/>
                </div>
                <p className="fs-3 link-secondary mb-0">Minimum Sales ({CURRENCY})</p>
                <div className="row mb-3">
                    <div className="col-9">
                        <InputRange className="form-range"
                                    minValue={leastSalesValue}
                                    maxValue={maxSalesValue}
                                    value={minSales}
                                    aria-label={`Minimum Sales (${CURRENCY})`}
                                    onChange={(value) => setMinSales(value)}
                                    disabled={isReadOnly}/>
                    </div>
                    <div className="col-3">
                        <input type="text"
                               className="form-control form-control-lg"
                               value={minSales}
                               disabled/>
                    </div>
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-secondary border-dark border-4 text-uppercase fw-bold filter-results"
                            type="button"
                            onClick={() => setFilter({companyName, minSales})}
                            disabled={!isFormDataValid}>
                        Filter Results
                    </button>
                </div>
            </form>
            {
                (filteredResultsCount > 0) &&
                    <div className="m-auto mb-3 text-black-50 fs-5">{filteredResultsCount} result(s) found</div>
            }
        </div>
    );
}

const SalesFilterWithAccessChecks = WithAccessChecks(SalesFilter, GLOBAL_SALES_FILTER);

export default SalesFilterWithAccessChecks;
