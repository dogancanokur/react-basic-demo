import React, {Component} from "react";

export default class Product extends Component {
    render() {
        const {id, name, type} = this.props;

        return (
            <tr>
                <th>{id}</th>
                <td>{name}</td>
                <td>{type}</td>
                <td>
                    <button onClick={event => this.deleteOnClick(id, event)} className={"btn btn-danger btn-sm"}>Delete
                    </button>
                </td>
            </tr>
        );
    }

    deleteOnClick = (id, event) => {
        // if we coded as an array function, we don't need  a method binding
        event.preventDefault();
        const {deleteProduct} = this.props;
        deleteProduct(id);
    }
}