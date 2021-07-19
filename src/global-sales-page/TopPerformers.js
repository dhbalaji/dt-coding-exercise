import React, {Component} from "react";
import {CURRENCY, TOP_PERFORMER_BASELINE} from '../config';
import {formatCurrencyWithSymbol} from '../common/formatters';

function TopPerformers({topPerformerCount, topPerformerAverage}) {
    return (
        <section className="top-performers">
            <h2 className="mb-3 fs-2 fw-bold">Top Performers ({CURRENCY}{TOP_PERFORMER_BASELINE}+ / month)</h2>
            <div className="card rounded-custom fs-3">
                <div className="card-body p-0">
                    <div className="fs-3 d-flex flex-row bd-highlight justify-content-between p-4 border-bottom">
                        <p className="mb-0">Number of Clients</p>
                        <p className="mb-0">{topPerformerCount}</p>
                    </div>
                    <div className="fs-3 d-flex flex-row bd-highlight justify-content-between p-4 border-bottom">
                        <p className="mb-0">Average Monthly Sales</p>
                        <p className="mb-0">{formatCurrencyWithSymbol(topPerformerAverage)}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TopPerformers;
