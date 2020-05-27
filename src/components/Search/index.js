import React, { PureComponent } from 'react';
import { inject } from "mobx-react";
import classNames from "classnames";
import './index.css';

class Search extends PureComponent {
    state = {
        searchValue: ''
    };

    handleSearch = event => {
        const value = event.target.value;
        this.setState({ searchValue: value });
        this.props.store.searchValue = value;
    };

    render() {
        const { searchValue } = this.state;
        return (
            <div className="search">
                <input
                    placeholder="Search task"
                    value={searchValue}
                    onChange={this.handleSearch}
                    className={classNames('input', 'full')}
                />
            </div>
        );
    }
}

export default inject('store')(Search);
