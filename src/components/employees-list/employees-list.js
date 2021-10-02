import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({data}) => {

    const elements = data.map(item => {   
        const {id, ...itemProps} = item; //извлекаем id для key     
        return (
            <EmployeesListItem key={id} {...itemProps}/> //=== <EmployeesListItem name={item.name} salary={item.salary}/>
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