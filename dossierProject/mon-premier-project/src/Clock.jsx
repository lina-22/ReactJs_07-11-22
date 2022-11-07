import React from "react";
export default class Clock extends React.Component {
    constructor(props) {
        console.log("dans constructor");
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.state.date = new Date();
        console.log("dans componentDidMount");
        const that = this
        // this.timerID = setInterval(function () {
        //     that.setState({
        //         date: new Date()
        //     })
        // }, 1000)

        this.timerID = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)
    }

    componentWillUnmount() {
        console.log("dans componentWillUnmount");
        clearInterval(this.timerID)
    }

    render() {
        console.log("dans la méthod render");
        return (

            <div>

                <h1>{this.props.message}</h1>
                <h2>Il est {this.state.date.toLocaleTimeString()}.
                </h2>
            </div>
        );
    }
}