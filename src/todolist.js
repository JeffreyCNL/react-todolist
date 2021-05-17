import React, {Component, Fragment} from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }
    render() {
        return (
            <Fragment>
                <div> 
                    <input 
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    >
                    </input>
                    <button onClick={this.handleBtnClick.bind(this)}>
                        Submit
                    </button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index} onClick={this.handleItemDel.bind(this)}>{item}</li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    handleInputChange(e) {
        this.setState({
            inputValue : e.target.value
        })
    }

    handleBtnClick(e) {
        this.setState({
            list: [...this.state.list, this.state.inputValue], 
            inputValue: ''
        })
    }

    handleItemDel(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list : list
        })
    }
}

export default TodoList;