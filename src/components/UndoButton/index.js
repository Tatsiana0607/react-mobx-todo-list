import React from 'react';
import * as CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import UndoIcon from "../../assets/images/undo.png";
import './index.css';

const UndoButton = ({ visible, secondsRemainingToRestore, restoreTodo }) => {
    if (!visible) return null;
    return (
        <CSSTransitionGroup
            transitionName="undo"
            transitionAppear={true}
            transitionAppearTimeout={300}
        >
            <div className="undo-button" id="undo-button" onClick={restoreTodo}>
                <div className="undo-label">Undo</div>
                <div className="undo-clock">
                    <img src={UndoIcon} alt="undo" className="undo-icon" />
                    <div className="undo-seconds">{secondsRemainingToRestore}</div>
                </div>
            </div>
        </CSSTransitionGroup>
    );
};

export default UndoButton;
