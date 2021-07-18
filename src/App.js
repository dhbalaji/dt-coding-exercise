import './App.css';

function App() {
    return (
        <main className="container container-md p-4">
            <h1 className="fw-bold fs-1">Global Sales</h1>
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
            <section className="pt-3">
                <div className="d-flex flex-row bd-highlight justify-content-between mb-0">
                    <h2 className="fs-2 fw-bold">Sales Data</h2>
                    <p className="text-uppercase fw-bold pt-2" role="button">Refresh Data</p>
                </div>
                <div className="card rounded-custom fs-3">
                    <table className="table mb-0">
                        <thead>
                        <tr>
                            <th className="text-uppercase px-sm-4 link-secondary">Name</th>
                            <th className="text-uppercase px-sm-4 link-secondary">Company</th>
                            <th className="text-uppercase px-sm-4 text-end link-secondary">Monthly Sales</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="px-sm-4">32</td>
                            <td className="px-sm-4">32</td>
                            <td className="px-sm-4 text-end">32</td>
                        </tr>
                        <tr>
                            <td className="px-sm-4">32</td>
                            <td className="px-sm-4">32</td>
                            <td className="px-sm-4 text-end">32</td>
                        </tr>
                        <tr>
                            <td className="px-sm-4">32</td>
                            <td className="px-sm-4">32</td>
                            <td className="px-sm-4 text-end">32</td>
                        </tr>
                        <tr>
                            <td className="px-sm-4">32</td>
                            <td className="px-sm-4">32</td>
                            <td className="px-sm-4 text-end">32</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="p-3 px-sm-4 bg-light rounded-bottom rounded-custom-bottom">
                        <div className="d-flex flex-row bd-highlight justify-content-between fw-bold">
                            <p className="mb-0">Page Sales Subtotal</p>
                            <p className="mb-0">5.300</p>
                        </div>
                        <div className="d-flex flex-row bd-highlight justify-content-between fw-bold">
                            <p className="mb-0">Total Sales</p>
                            <p className="mb-0">100.000</p>
                        </div>
                    </div>
                </div>

            </section>

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

            <section className="top-performers">
                <h2 className="mb-3 fs-2 fw-bold">Top Performers ($800+ / month)</h2>
                <div className="card rounded-custom fs-3">
                    <div className="card-body p-0">
                        <div className="fs-3 d-flex flex-row bd-highlight justify-content-between p-4 border-bottom">
                            <p className="mb-0">Number of Clients</p>
                            <p className="mb-0">51</p>
                        </div>
                        <div className="fs-3 d-flex flex-row bd-highlight justify-content-between p-4 border-bottom">
                            <p className="mb-0">Average Monthly Sales</p>
                            <p className="mb-0">$933</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default App;
