import React from "react";
import TimeSlot from "./TimeSlot.js";
import Modal from "./Modal.js";
import { connect } from "react-redux";


export default connect((store) => {
    return {
        timeSlots: store.timeSlots,
        modalOpened: store.modalOpened,
        targetSlot: store.targetSlot,
        modalState: store.modalState
    }
}) (class Scheduler extends React.Component {

    render() {
        
        let { timeSlots, targetSlot } = this.props;

        return (
            <div>
                {
                    timeSlots.map( (slot, index) => (
                        <TimeSlot 
                            key={index} 
                            index={index}
                            />
                    ))
                }
                <Modal 
                    index={targetSlot}
                    />
            </div>
        )

    }

    /*openModal(target){
        this.setState({
            modalOpened : true,
            targetSlot : target,
            modalState : {
                name : this.props.timeSlots[target].name,
                phone : this.props.timeSlots[target].phone
            }
        })
    }*/

    /*closeModal(){
        this.setState({
            modalOpened : false,
            targetSlot : -1,
            modalState : {
                name: '',
                phone: ''
            }
        })
    }*/

    /*setData(name, phone, index){
        let newTimeSlots = this.props.timeSlots.slice();

        newTimeSlots[index].name = name;
        newTimeSlots[index].phone = phone;
        newTimeSlots[index].slotted = true;

        this.setState({
            timeSlots : newTimeSlots,
            modalOpened : false,
            targetSlot : -1,
            modalState : {
                name: '',
                phone: ''
            }
        })
    }

    textUpdateName(e){
        let currentValue = e.currentTarget.value;
        let newTimeSlots = Object.assign({}, this.props.modalState, {name: currentValue});

        this.setState({
            modalState : newTimeSlots
        })
    }
    
    textUpdatePhone(e){
        let currentValue = e.currentTarget.value;
        let newTimeSlots = Object.assign({}, this.props.modalState, {phone: currentValue});

        this.setState({
            modalState : newTimeSlots
        })
    }*/
})