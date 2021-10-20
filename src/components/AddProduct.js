import React, {Component} from "react";

class AddProduct extends Component {
    state = {
        product: {id: null, name: "", type: ""}
    }
    inputChange = (target) => {
        const {value, name} = target;
        const {product} = this.state;
        product[name] = value;
        this.setState({product});
    }

    submit(e) {
        e.preventDefault();
        this.props.addProduct(this.state.product);
        this.setState({product: {name: "", type: ""}});
    }

    render() {
        let {name, type} = this.state.product;

        return (
            <div className="card">
                <h5 className="card-header">Add New Product</h5>
                <div className={"card-body"}>
                    <form>
                        <div className={"form-group"}>
                            <label htmlFor={"name"}>Name</label>
                            <input type="text" id={"name"} name="name" placeholder="Name" className="form-control"
                                   value={name} onChange={e => this.inputChange(e.target)}/>
                        </div>
                        <div className={"form-group"}>
                            <label htmlFor={"type"}>Type</label>
                            <input type="text" id={"type"} name={"type"} placeholder="Product"
                                   onChange={e => this.inputChange(e.target)} value={type} className="form-control"/>
                        </div>

                        <button type={"submit"} onClick={e => this.submit(e)} className="btn btn-success btn-block">
                            Add New Product
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddProduct;