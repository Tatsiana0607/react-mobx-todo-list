import React, { PureComponent } from 'react';
import { inject } from "mobx-react";
import classNames from "classnames";
import SearchIcon from '../../assets/images/search.png';
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
                <div className="search-input">
                    <input
                        placeholder="Search task"
                        value={searchValue}
                        onChange={this.handleSearch}
                        className={classNames('input', 'full')}
                    />
                    <img src={SearchIcon} className="search-icon" alt="search" />
                </div>
            </div>
        );
    }
}

export default inject('store')(Search);
