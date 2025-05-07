export default function Product(props) {
    return (
        <tr>
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>
            <td><input type="checkbox" checked={props.product.inStock}
            onChange={props.toggleStock} /></td>
        </tr>
    )
}