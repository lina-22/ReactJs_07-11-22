export default function ProductListItem(props) {
    const prod = props.product
    const deleteProduct = (id) => {

    }
    const modifierProduct = (id) => {

    }
    return (
        <tr key={prod.id.toString()}>
            <td>{prod.id}</td>
            <td>{prod.name}</td>
            <td>
                <button className="btn btn-danger"
                    onClick={() => props.deleteProduct(prod.id)}>Supprimer</button>
                {/* <button onClick={()=>deleteProduct(prod.id)}>Supprimer</button> */}
                <button className="btn btn-secondary">Modifier</button>
                <button className="btn btn-primary">Modifier</button>
            </td>
        </tr>
    )
}