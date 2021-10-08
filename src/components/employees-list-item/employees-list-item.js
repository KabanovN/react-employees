import './employees-list-item.css';

const EmployeesListItem = (props) => {

    const {name, salary, onDelete, onToggleProp, increase, like} = props;

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
                onClick={onToggleProp}
                data-toggle="like">{name}
            </span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            
            <div className="d-flex justify-content-center align-items-center">
                <button 
                    className="btn-cookie btn-sm"
                    onClick={onToggleProp}
                    data-toggle="increase">
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

export default EmployeesListItem;