import React, {Component} from "react";

class SalesDataPagination extends Component {
    render() {
        return (
            <nav aria-label="Page navigation example" className="p-4 text-center">
                <ul className="pagination pagination-circle pg-blue justify-content-center">
                    <li className="page-item disabled">
                        <a className="page-link border-0 bg-transparent fw-bold" aria-label="Previous">
                            <span aria-hidden="true">&#x2039;</span>
                        </a>
                    </li>
                    <li className="page-item active rounded-pill"><a
                        className="page-link border-0 bg-transparent fw-bold">1</a></li>
                    <li className="page-item rounded-pill"><a
                        className="page-link border-0 bg-transparent fw-bold">2</a></li>
                    <li className="page-item rounded-pill"><a
                        className="page-link border-0 bg-transparent fw-bold">3</a></li>
                    <li className="page-item rounded-pill"><a
                        className="page-link border-0 bg-transparent fw-bold">4</a></li>
                    <li className="page-item rounded-pill"><a
                        className="page-link border-0 bg-transparent fw-bold">5</a></li>
                    <li className="page-item rounded-pill">
                        <a className="page-link border-0 bg-transparent fw-bold" aria-label="Next">
                            <span aria-hidden="true">&#x203A;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default SalesDataPagination;
