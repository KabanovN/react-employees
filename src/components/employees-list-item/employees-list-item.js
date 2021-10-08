import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false
        }
    }

    //методы изменения состояний при щелчке на имя сотрудника и btn-cookie
    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }));
    }

    onLike = () => {
        this.setState(({like}) => ({
            like: !like
        }));
    }

    render() {
        const {name, salary, onDelete} = this.props;
        const {increase, like} = this.state;

        let itemClassNames = 'list-group-item d-flex justify-content-between'; //запишем классы <li> в переменную для удобства изменений
        
        if (increase) {
            itemClassNames += ' increase';
        }

        if (like) {
            itemClassNames += ' like';
        }

        return (
            <li className={itemClassNames}>
                <span 
                    className="list-group-item-label"
                    onClick={this.onLike}>{name}
                </span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                        className="btn-cookie btn-sm"
                        onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>
                    
                    <button 
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                            <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }  
}

export default EmployeesListItem;