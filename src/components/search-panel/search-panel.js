import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdate = (evt) => {
        this.setState({
            term: evt.target.value
        })

        this.props.onUpdateValue(evt.target.value);
    }

    render() {
        const {term} = this.state;

        return (
            <input 
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                onChange={this.onUpdate}
                value={term}/>
        )
    }
}

export default SearchPanel;