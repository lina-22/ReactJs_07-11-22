export default function NumberList(props) {//props={numbers:[1,2,3,4,5]}

    //listItems = [<li>1<li>]

    const listItems = props.numbers.map(function (num) {
        return <li>{num}</li>
    })
    return (
        <ul>
            {/* elements*/}
            {listItems}
        </ul>
    )
}