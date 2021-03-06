export function openModal(target){
        this.setState({
            modalOpened : true,
            targetSlot : target,
            modalState : {
                name : this.props.timeSlots[target].name,
                phone : this.props.timeSlots[target].phone
            }
        })
    }

export function closeModal(){
        this.setState({
            modalOpened : false,
            targetSlot : -1,
            modalState : {
                name: '',
                phone: ''
            }
        })
    }

export function setData(name, phone, index){
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

export function textUpdateName(e){
        let currentValue = e.currentTarget.value;
        let newTimeSlots = Object.assign({}, this.props.modalState, {name: currentValue});

        this.setState({
            modalState : newTimeSlots
        })
    }
    
export function textUpdatePhone(e){
        let currentValue = e.currentTarget.value;
        let newTimeSlots = Object.assign({}, this.props.modalState, {phone: currentValue});

        this.setState({
            modalState : newTimeSlots
        })
    }