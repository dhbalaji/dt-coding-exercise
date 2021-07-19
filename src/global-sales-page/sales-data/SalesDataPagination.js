import React from "react";
import {NUMBER_OF_PAGINATION_PILLS} from '../../config';
import './pagination.css';

function SalesDataPagination({page, setPage, numberOfPages, salesLength}) {
    const numberOfPills = numberOfPages < NUMBER_OF_PAGINATION_PILLS ? numberOfPages : NUMBER_OF_PAGINATION_PILLS;
    let padding = 1;
    if ((page > NUMBER_OF_PAGINATION_PILLS)) {
        if (page % NUMBER_OF_PAGINATION_PILLS === 0) {
            padding = Math.floor((page - 1) / NUMBER_OF_PAGINATION_PILLS) + NUMBER_OF_PAGINATION_PILLS
        } else {
            padding = Math.floor(page / NUMBER_OF_PAGINATION_PILLS) + NUMBER_OF_PAGINATION_PILLS
        }
    }
    return (
        <nav aria-label="Page navigation example" className="p-4 text-center pagination">
            <ul className="pagination pagination-circle pg-blue justify-content-center">
                <li className={`prev page-item ${page === 1 ? 'disabled' : ''}`}>
                    <span className="page-link border-0 bg-transparent fw-bold" aria-label="Previous" onClick={() => setPage(page - 1)}>
                        <span aria-hidden="true">&#x2039;</span>
                    </span>
                </li>
                {
                    [...Array(numberOfPills)].map((_, index) => (
                        <li className={`page-item rounded-pill ${(index + padding) === page ? 'active' : ''}`} key={index}>
                            <span className="page-link border-0 bg-transparent fw-bold" onClick={() => setPage(padding + index)}>{index + padding}</span>
                        </li>
                    ))
                }
                <li className={`page-item rounded-pill ${page >= numberOfPages ? 'disabled' : ''}`}>
                    <span className="next page-link border-0 bg-transparent fw-bold" aria-label="Next" onClick={() => setPage(page + 1)}>
                        <span aria-hidden="true">&#x203A;</span>
                    </span>
                </li>
            </ul>
        </nav>
    );
}

export default SalesDataPagination;
