import './app-info.css';

const AppInfo = ({imployeesNum, increasedNum}) => {
    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {imployeesNum}</h2>
            <h2>Премию получат: {increasedNum}</h2>
        </div>
    )
};

export default AppInfo;