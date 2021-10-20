import React, {Component} from 'react';
import AddProduct from "./components/AddProduct";
import Products from "./components/Products";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    name: "Pencil",
                    type: "Stationary"
                },
                {
                    id: 2,
                    name: "Book",
                    type: "Stationary"
                },
                {
                    id: 3,
                    name: "Earphone",
                    type: "Electronic"
                }
            ]
        }
    }

    deleteProduct = (id) => {
        let updatedProduct = this.state.products;
        updatedProduct = updatedProduct.filter(e => e.id !== id);
        // State => Direct Immutable
        this.setState({products: updatedProduct});
    }
    addProduct = (newProduct) => {
        const {products} = this.state;
        newProduct.id = products[products.length - 1].id + 1;
        products.push(newProduct);
        products.sort((first, second) => {
            return first.id > second.id ? 0 : 1;
        })
        this.setState({products: products});
    }

    render() {
        const title = "Demo App";

        return (
            <div className="container">
                <h4 className={"text-center mt-3"}>{title}</h4>
                <hr/>
                <AddProduct addProduct={this.addProduct}/>
                <hr/>
                <Products deleteProduct={this.deleteProduct} products={this.state.products}/>
            </div>
        );
    }
}

export default App;