import {statement} from "@babel/template";
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
        quanity: 5
    },
    {
        food: 'frozen veggies',
        quantity: 132
    }
]

export default (state = seedData, action)=>{
    console.log("frozen Reducer is running");
    return state;
}