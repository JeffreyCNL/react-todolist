import React, {Component, Fragment} from 'react';
import './style.css'
import TodoItem from './todoItem';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDel = this.handleItemDel.bind(this);
    }
    render() {
        return (
            <Fragment>
                <div> 
                    <lable htmlFor='insertArea'> Content</lable>
                    <input
                        id='insertArea'
                        className='input' 
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    >
                    </input>
                    <button onClick={this.handleBtnClick}>
                        Submit
                    </button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }

    getTodoItem() {
        return (

            this.state.list.map((item, index) => {
                return (
                    <div key={index}>
                        <TodoItem 
                            content={item} 
                            index={index}
                            deleteItem={this.handleItemDel}
                        />
                    </div>
                )
    
            })
        )
    }

    handleInputChange(e) {
        this.setState(() => {
            return {
                inputValue: e.target.value
            }
        })
        // this.setState({
        //     inputValue : e.target.value
        // })
    }

    handleBtnClick(e) {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
        // this.setState({
        //     list: [...this.state.list, this.state.inputValue], 
        //     inputValue: ''
        // })
    }

    handleItemDel(index) {
        // const list = [...this.state.list];
        // list.splice(index, 1);
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {
                list
            }
        })
        // this.setState({
        //     list : list
        // })
    }
}

export default TodoList;