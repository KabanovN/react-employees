import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App() {
    const data = [
        {name: 'John', salary: 800, increase: true, id: 1},
        {name: 'Alex', salary: 1100, increase: false, id: 2},
        {name: 'Bjorn', salary: 13000, increase: true, id: 3}
    ]; //массив для динамического отображения

    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    )
}

export default App;