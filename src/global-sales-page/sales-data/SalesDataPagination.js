import React from "react";
import {NUMBER_OF_PAGINATION_PILLS, PAGE_SIZE} from '../../config';
import './pagination.css';

function SalesDataPagination({page, numberOfPages, setPage, salesLength}) {
    if (salesLength < PAGE_SIZE) {
        return null;
    }
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
                    <a className="page-link border-0 bg-transparent fw-bold" aria-label="Previous" onClick={() => setPage(page - 1)}>
                        <span aria-hidden="true">&#x2039;</span>
                    </a>
                </li>
                {
                    [...Array(numberOfPills)].map((_, index) => (
                        <li className={`page-item rounded-pill ${(index + padding) === page ? 'active' : ''}`}>
                            <a className="page-link border-0 bg-transparent fw-bold" onClick={() => setPage(padding + index)}>{index + padding}</a>
                        </li>
                    ))
                }
                <li className={`page-item rounded-pill ${page >= numberOfPages ? 'disabled' : ''}`}>
                    <a className="next page-link border-0 bg-transparent fw-bold" aria-label="Next" onClick={() => setPage(page + 1)}>
                        <span aria-hidden="true">&#x203A;</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default SalesDataPagination;
