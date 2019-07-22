//crud functions

class MessageDB {
    constructor() {
        this.message = [];
    }

    createMsg(id, text, author) {
        let message = {
            id: id,
            text: text,
            author: author,
        }
        this.messages.push(message);

    }
}