export default function Number(props) {
    const numberStyle = {

        fontWeight:'bold',
        fontSize: '3em'
    }
    return <span style={numberStyle}>{props.children}</span>;

}