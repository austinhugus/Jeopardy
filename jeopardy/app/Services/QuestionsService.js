import store from "../store.js";

const _api = axios.create({
    baseURL = "https://jservice.io/api/random"
})

class QuestionsService { }

const service = new QuestionsService();
export default service;
