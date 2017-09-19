import React from 'react';
import { connect } from 'react-redux';

export default connect((store) => {
    return {
        timeSlots: store.timeSlots,
        modalOpened: store.modalOpened,
        targetSlot: store.targetSlot,
        modalState: store.modalState
    }
}) (class Modal extends React.Component {
    render() {
        
        let { timeSlots, modalOpened, targetSlot, modalState, index, dispatch } = this.props;

        if(!modalOpened || targetSlot === -1){
            return null;
        }
        return (
            <div className="modal">
                <div className="modalClose" onClick={() => {dispatch({
                        type: "closeModal"
                    })}}>Close X</div>
                <h2>{timeSlots[targetSlot].time}</h2>
                <label htmlFor="nameField">Name: </label>
                <input type="text" name="Name" id="nameField" value={modalState.name} onChange={(e) => {dispatch({
                        type: "textUpdateName",
                        value: e.currentTarget.value
                    })}}/><br/>
                <label htmlFor="phoneField">Phone: </label>
                <input type="text" name="Phone" id="phoneField" value={modalState.phone} onChange={(e) => {dispatch({
                        type: "textUpdatePhone",
                        value: e.currentTarget.value
                    })}} /><br/>
                <input type="button" value="Submit" id="submitBtn" onClick={() => {dispatch({
                        type: "setData",
                        index: index,
                        name: modalState.name,
                        phone: modalState.phone
                    })}} /> 
            </div>
        )

    }
})