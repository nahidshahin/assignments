export default function Product(props) {
    return (
        <tr>
            <td style={{color: props.inStock ? 'green' : 'red'}}>{props.name}</td>
            <td>{props.price}</td>
            <td><input type="checkbox" checked={props.inStock}
            onChange={props.toggleStock} /></td>
        </tr>
    )
}