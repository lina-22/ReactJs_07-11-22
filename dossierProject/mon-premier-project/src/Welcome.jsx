/**
 * 
 * @param {{name: "",address:,"", age:"" }} props 
 * @returns 
 */
export default function Welcome(props) {
    return <h2>Bnjour Lundi, {props.name}, {props.age}, {props.address}</h2>
}

// props un types d'object