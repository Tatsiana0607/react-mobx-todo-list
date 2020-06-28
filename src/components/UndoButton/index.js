import React from 'react';
import UndoIcon from "../../assets/images/undo.png";
import './index.css';

const UndoButton = ({ secondsRemainingToRestore, restoreTodo }) => {
    if (!secondsRemainingToRestore) return null;
    return (
        <div className="undo-button" onClick={restoreTodo}>
            <div className="undo-label">Undo</div>
            <div className="undo-clock">
                <img src={UndoIcon} alt="undo" className="undo-icon" />
                <div className="undo-seconds">{secondsRemainingToRestore}</div>
            </div>
        </div>
    );
};

export default UndoButton;
