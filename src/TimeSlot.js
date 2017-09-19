import React from "react";
import { connect } from "react-redux";

export default connect((store) => {
    return {
        timeSlots: store.timeSlots
    }
}) (class TimeSlot extends React.Component {
    render() {

        let { timeSlots, index, dispatch } = this.props;

        return (
            <div className={(timeSlots[index].slotted ? "taken" : "open") + " timeSlot"} onClick={() => {
                    dispatch({
                        type: "openModal",
                        index: index
                    })
                }}>
                <h3>{timeSlots[index].time}</h3>
                <h4>{timeSlots[index].name}</h4>
                <h4>{timeSlots[index].phone}</h4>
            </div>
        )

    }
})