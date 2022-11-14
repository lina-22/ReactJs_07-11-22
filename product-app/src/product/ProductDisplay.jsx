import React from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

export default class ProductDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showFrom: false
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
    render() {
        return (
            <div>
                <h1>Gestion de produits</h1>
                <button onClick={this.handleShowFormBtn}>
                    {this.state.showFrom ? "Afficher la liste" : "Ajouter un produit"}
                </button>
                {this.state.showFrom ? <ProductForm /> : <ProductTable />}
            </div>
        )
    }
}