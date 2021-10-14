import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'more1000', label: 'З/П больше 1000$'}
    ]
    
    const btns = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';

    const {onFilterSelect} = props;
    return (
        <button 
            className={`btn ${clazz}`}
            key={name}
            onClick={() => onFilterSelect(name)}>
        {label}
        </button>  
    )
    });

    return (
        <div className="btn-group">
            {btns}
        </div>
    );
}

export default AppFilter;