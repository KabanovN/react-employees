import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {   
        const {id, ...itemProps} = item; //извлекаем id для key     
        return (
            <EmployeesListItem 
                key={id} 
                {...itemProps} //=== <EmployeesListItem name={item.name} salary={item.salary}/>
                onDelete={() => onDelete(id)}
                onToggleProp={(evt) => onToggleProp(id, evt.currentTarget.getAttribute('data-toggle'))}/> 
        )
    });
    //получаем новый массив EmployeesListItem с props из data
    //данный массив вставляем в вёрстку ul

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;