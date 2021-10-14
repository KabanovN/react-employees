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
                {name: 'John', salary: 800, increase: true, like: false, id: 1},
                {name: 'Alex', salary: 1100, increase: false, like: true, id: 2},
                {name: 'Bjorn', salary: 13000, increase: true, like: false, id: 3}
            ],
            term: '',
            filter: 'all'
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
            like: false,
            id: this.currentId++
        }

        this.setState(({data}) => ({
                data: [...data, newItem]
        }));
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]};
                }
                return item;
            })
        }));
    }

    searchEmp = (items, elem) => {
        if (items.length === 0) {
            return items;
        };

        return items.filter(item => (item.name.indexOf(elem) > -1));
    }

    onUpdateValue = (term) => {
        this.setState({term}); //=== (term: term)
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise': 
                return items.filter(item => item.like);
            case 'more1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const increased = data.filter(item => item.increase).length;
        const currentData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo
                    imployeesNum={data.length}
                    increasedNum={increased}/>
                <div className="search-panel">
                    <SearchPanel
                        onUpdateValue={this.onUpdateValue}/>
                    <AppFilter 
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
                <EmployeesList 
                    data={currentData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm
                    onAdd={this.addItem}/>
            </div>
        )
    }

}

export default App;