import {Component} from 'react';
import {addItemAction, getItems} from "../Redux/List/actions";
import {connect} from "react-redux";

class ToDoListClassComponent extends Component{
    state={
        value:''
    }


    handleInputChange=e=>this.setState({value:e.target.value})

 handleAddItem=()=>{
        const value=this.state.value
        if (!value)
            return
        this.props.addItemAction({
            title:value,
            id:Math.random()*1000
        })
       this.setState({
           value:''
       })
    }

    componentDidMount() {
       this.props.getItems()
    }

    render() {

        return (
            <div style={{marginTop:40}}>

                <input type={'text'}
                       onChange={this.handleInputChange}
                       value={this.state.value}
                />

                <button
                   onClick={this.handleAddItem}
                >Add Item</button>
            </div>
        );
    }

}


/**
 * to pass the redux state to the component
const mapStateToProps=(state)=>({
    list:state.list
})*/

const mapDispatchToProps=(dispatch)=>({
    getItems:()=>dispatch(getItems()),
    addItemAction:(value)=>dispatch(addItemAction(value))
})


export default connect/**
 pass "mapStateToProps" as the first parameter
(mapStateToProps, mapDispatchToProps)*/
(null, mapDispatchToProps)
(ToDoListClassComponent);