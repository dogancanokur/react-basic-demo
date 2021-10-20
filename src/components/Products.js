import React, {Component} from "react";
import Product from "./Product";

export default class Products extends Component {
    render() {
        const {products, deleteProduct} = this.props;

        return (
            <div>
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        products.map(user => {
                            const {id, name, type} = user;
                            return <Product key={id} id={id} name={name} type={type} deleteProduct={deleteProduct}/>;
                            // need unique key props!
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}