export default class Question {
    constructor(data) {

        this.question = data.question,
            this.answer = data.answer


    }

    get Template() {
        return this.title
    }
}