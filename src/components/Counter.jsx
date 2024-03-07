import { Component } from "react";


class Counter extends Component {

    constructor(props) {
        super(props);
        //console.log(this.props)
        console.log('I m the constructor')
    }

    static getDerivedStateFromProps(props,state) {
        console.log('I m rendering props')
        return null;
    }

    shouldComponentUpdate(nextProps,nextState) {
        
        //return this.state.count > 3 ?  false : true
        return true
        
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevProps);
        console.log(prevState)
        return null;
    }

    componentDidUpdate() {
        console.log("I m updated ...")
    }

    componentDidMount() {
        console.log('I m mounting ...')
    }



    state = { count: 0, product: { id: 1, title: 'product1' },name:this.props.PropName }
    increment = () => {
        this.setState({ count: this.state.count + 1 })
        this.setState({ product: { ...this.state.product, id: this.state.product.id + 1 } })
        //console.log(this.state)
    }

    decrement = () => {
        this.setState({count:this.state.count - 1})
    }
    render() {
        return (
            <>
                {console.log(' I m rendering ...')}
                
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement} disabled={this.state.count == 0}>Decrement</button>
                <h1>{this.state.name}</h1>
                {[...Array(this.state.count)].map((item, index) => {
                    return <Cell key={index} count={index}/>
                })}
            </>
        )
}
}

export default Counter;

class Cell extends Component {
    constructor(props) {
        super(props)
    }

    componentWillUnmount() {
        console.log('I m unmounting ....')
    }

    render() {
        return <h1>{this.props.count}</h1>
    }
}