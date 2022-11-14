import React from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";


export default class ProductDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showFrom: false,
            products: [
                {
                    id: 1,
                    name: "produit 1"
                },
                {
                    id: 2,
                    name: "produit 2"
                },
                {
                    id: 3,
                    name: "produit 3"
                },
            ]
        }
        //on lie this à notre méthode
        this.handleShowFormBtn = this.handleShowFormBtn.bind(this)
    }
    handleShowFormBtn = function () {
        this.setState((prevState) => {
            return {
                showFrom: !prevState.showFrom
            }
        })
    }
    deleteProduct = (id) => {
        this.setState((prevState) => {
            return {
                products: prevState.products.filter((prod) => prod.id !== id)
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Gestion de produits</h1>
                <button onClick={this.handleShowFormBtn}>
                    {this.state.showFrom ? "Afficher la liste" : "Ajouter un produit"}
                </button>
                {this.state.showFrom ?
                    <ProductForm />
                    :
                    <ProductTable
                        products={this.state.products}
                        deleteProduct={this.deleteProduct} />}
            </div>
        )
    }
}