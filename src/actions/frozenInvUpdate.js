//this file is an action creator!
//action creator returns actions
//what is an action? is an object that has at least
//1 property: type
//the action (object with a type property) is then going to
//be handed to the dispatched.  The dispatch will send that 
//action to all reducers

export default(newValue)=>{
    return {
        type: "updateFrozen",
        payload: newValue
    }
}