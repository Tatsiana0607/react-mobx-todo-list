import React from 'react';
import classNames from 'classnames';
import './index.css';

const Tabs = ({ activeTab, changeTab, activeCount, finishedCount }) => (
    <div className="tabs">
        <div
            className={classNames('tab', { 'active': activeTab === 'active'})}
            onClick={() => changeTab('active')}
        >
            Active: <span>{activeCount}</span>
        </div>
        <div
            className={classNames('tab', { 'active': activeTab === 'finished'})}
            onClick={() => changeTab('finished')}
        >
            Done: <span>{finishedCount}</span>
        </div>
    </div>
);

export default Tabs;
