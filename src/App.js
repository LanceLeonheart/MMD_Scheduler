import React, { Component } from 'react';
import './App.css';
import Scheduler from './Scheduler.js';
import { createStore } from "redux";
import { Provider } from "react-redux";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Appointment Scheduler</h2>
                </div>
                <Provider store={store}>
                    <Scheduler />
                </Provider>
            </div>
        );
    }
}

const reducer = function (state={}, action){
    let newState = JSON.parse(JSON.stringify(state));

    if (action.type === "openModal"){
        newState.modalOpened = true;
        newState.targetSlot = action.index;
        newState.modalState = {
            name : newState.timeSlots[action.index].name,
            phone : newState.timeSlots[action.index].phone
        };
        return newState;
    }
    else if (action.type ==="closeModal"){
        newState.modalOpened = false;
        newState.targetSlot = -1;
        newState.modalState = {
            name : '',
            phone : ''
        };
        return newState;
    }
    else if (action.type ==="textUpdatePhone"){
        newState.modalState.phone = action.value;
        return newState;
    }
    else if (action.type ==="textUpdateName"){
        newState.modalState.name = action.value;
        return newState;
    }
    else if (action.type ==="setData"){
        newState.timeSlots[action.index].name = action.name;
        newState.timeSlots[action.index].phone = action.phone;
        newState.timeSlots[action.index].slotted = true;
        newState.modalOpened = false;
        newState.targetSlot = -1;
        newState.modalState = {
            name : '',
            phone : ''
        };
        return newState;
    }
    return newState;
}

const store = createStore(reducer, {
    timeSlots : [
        {
            time: "9:00am-10:00am",
            name: '',
            phone: '',
            slotted: false
        },
        {
            time: "10:00am-11:00am",
            name: '',
            phone: '',
            slotted: false
        },
        {
            time: "11:00am-12:00pm",
            name: '',
            phone: '',
            slotted: false
        },
        {
            time: "12:00pm-1:00pm",
            name: '',
            phone: '',
            slotted: false
        },
        {
            time: "1:00pm-2:00pm",
            name: '',
            phone: '',
            slotted: false
        },
        {
            time: "2:00pm-3:00pm",
            name: '',
            phone: '',
            slotted: false
        },
        {
            time: "3:00pm-4:00pm",
            name: '',
            phone: '',
            slotted: false
        },
        {
            time: "4:00pm-5:00pm",
            name: '',
            phone: '',
            slotted: false
        }
    ],
    modalOpened : false,
    targetSlot : -1,
    modalState : {
        name: '',
        phone: ''
    }
});