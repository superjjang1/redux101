import {statement} from "@babel/template";
import { thisExpression } from "@babel/types";
//all reducers have 2 params
//1. current statement, suually provide a default
//2. the action object
const seedData = [
    {
        food: 'pizza',
        quantity: 12
    },
    {
        food: 'ice cream',
        quantity: 21
    },
    {
        food: 'family dinner',
        quantity: 5
    },
    {
        food: 'frozen veggies',
        quantity: 132
    }
]

export default (state = seedData, action)=>{
    console.log("frozen Reducer is running");
    console.log(action.type);
    console.log(action.payload);
    if (action.type ==='updateFrozen'){
        let newState = [...state];
        console.log(newState);
        if(action.payload.operation === '+'){
            newState[action.payload.indexToChange].quantity++;
        }else if(action.payload.operation === '-'){
            newState[action.payload.indexToChange].quantity--;
        }
        return newState;
    }else{

        return state;
    }
}