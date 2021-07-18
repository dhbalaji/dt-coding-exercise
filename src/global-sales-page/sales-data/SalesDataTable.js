import React, {Component} from "react";

class SalesDataTable extends Component {
    render() {
        return (
            <div className="card rounded-custom fs-3 table-responsive">
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
        );
    }
}

export default SalesDataTable;
