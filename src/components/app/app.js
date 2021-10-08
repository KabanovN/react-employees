import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
           data: [
                {name: 'John', salary: 800, increase: true, id: 1},
                {name: 'Alex', salary: 1100, increase: false, id: 2},
                {name: 'Bjorn', salary: 13000, increase: true, id: 3}
            ]
        };

        this.currentId = 4;
    }

    deleteItem = (id) => {        
        this.setState(({data}) => ({
            data: data.filter(item => item.id !== id)
        }));
    }

    addItem = (nameValue, salaryValue) => {
        const newItem = {
            name: nameValue,
            salary: salaryValue,
            increase: false,
            id: this.currentId++
        }

        this.setState(({data}) => ({
                data: [...data, newItem]
        }));
    }

    render() {
        const {data} = this.state;

        return (
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList 
                    data={data}
                    onDelete={this.deleteItem}/>
                <EmployeesAddForm
                    onAdd={this.addItem}/>
            </div>
        )
    }

}

export default App;