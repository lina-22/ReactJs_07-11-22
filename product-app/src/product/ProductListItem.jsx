export default function ProductListItem(props) {
    const prod = props.product
    return (
        <tr key={prod.id.toString()}>
            <td>{prod.id}</td>
            <td>{prod.name}</td>
            <td>
                <button>Suprimer</button>
                <button>Modifier</button>
            </td>


        </tr>
    )
}