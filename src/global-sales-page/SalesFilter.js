import React from "react";
import {GLOBAL_SALES_FILTER} from '../common/constants';
import WithAccessChecks from '../common/WithAccessChecks';

function SalesFilter() {
    return (
        <div className="card rounded-custom fs-3">
            <form className="card-body p-4">
                <div className="mb-3">
                    <input type="text" className="form-control form-control-lg rounded-custom-sm"
                           placeholder="Company"
                           aria-label="Company"/>
                </div>
                <p className="fs-3 link-secondary mb-0">Minimum Sales ($)</p>
                <div className="row mb-3">
                    <div className="col-9">
                        <input type="range" className="form-range" min="0" max="5"
                               aria-label="Minimum Sales ($)"/>
                    </div>
                    <div className="col-3">
                        <input type="text" className="form-control form-control-lg" value={100}/>
                    </div>
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-secondary border-dark border-4 text-uppercase fw-bold filter-results"
                            type="button">Filter Results
                    </button>
                </div>
            </form>
        </div>
    );
}

const SalesFilterWithAccessChecks = WithAccessChecks(SalesFilter, GLOBAL_SALES_FILTER);

export default SalesFilterWithAccessChecks;
