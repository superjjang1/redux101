import {statement} from "@babel/template";
//all reducers have 2 params
//1. current statement, suually provide a default
//2. the action object
const seedData = [
    {
        food: 'steak',
        quantity: 12
    },
    {
        food: 'fish',
        quantity: 21
    },
    {
        food: 'crab',
        quantity: 5
    },
    {
        food: 'pork',
        quantity: 132
    }
]

export default (state = seedData, action)=>{
    console.log("meat Reducer is running");
    console.log(action.type);
    if(action.type ==='updateMeat'){
        let newState = [...state];
        if(action.payload.operation === '+'){
            newState[action.payload.indexToChange].quantity++;
        }else if(action.payload.operation ==='-'){
            newState[action.payload.indexToChange].quantity--;
        }
        return newState;
    }else{

        return state;
    }
}