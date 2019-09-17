import {statement} from "@babel/template";
//all reducers have 2 params
//1. current statement, suually provide a default
//2. the action object
const seedData = [
    {
        food: 'milk',
        quantity: 12
    },
    {
        food: 'cheese',
        quantity: 21
    },
    {
        food: 'yogurt',
        quantity: 5
    },
    {
        food: 'kefir',
        quantity: 132
    }
]

export default (state = seedData, action)=>{
    console.log("dairy Reducer is running");
    console.log(action.type);
    if (action.type ==='updateDairy'){
        let newState = [...state];
        if(action.payload.operation ==='+'){
            newState[action.payload.indexToChange].quantity++;
        }else if(action.payload.operation === '-'){
            newState[action.payload.indexToChange].quantity--;
        }
        return newState;
    }else{

        return state;
    }
}