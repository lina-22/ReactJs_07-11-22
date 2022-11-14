import ProductListItem from "./ProductListItem";

export default function ProductTable(props) {
    console.log(props.products);
    return (
        <>
            <h2>Liste des Produits</h2>
            <table>

                <tr>
                    <th>ID</th>
                    <th>NOM</th>
                    <th>ACTIONS</th>
                </tr>
                {props.products.map((prod) => {
                    return <ProductListItem
                        Key={prod.id.toString}
                        product={prod} />
                })}
            </table>
        </>
    )
}