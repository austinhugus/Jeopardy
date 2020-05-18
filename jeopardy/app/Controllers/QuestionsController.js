import QuestionsService from "../Services/QuestionsService.js";
import store from "../store.js";

//Private
function _draw() {
    let values = store.State.values;
    console.log(values);
}

//Public
export default class QuestionsController {
    constructor() {
        store.subscribe("values", _draw);
    }
}