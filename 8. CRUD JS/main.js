//crud functions

class MessageDB {
    constructor() {
        this.messages = [];
    }

    createMsg(id, text, author) {
        let message = {
            id: id,
            text: text,
            author: author,
        }
        this.messages.push(message);
    }

    getMsgs() { 
        return this.messages;

    }

    updateMsg(id, updateText) {
        for (let m of this.messages) {
            if (m.id === id) {
                m.text = updateText;
                break;
            }
        }
    }

    deleteMsg(id) {
        for (let i = 0; i < this.messages.length; i++) {
            if (this.messages[i].id) {
                this.messages.splice(i,1);
            }
        }
    }
    logAuthor(author) {
        for (let m of this.messages.filter(msg => msg.author === author)) {
            console.log(`id: ${m.id} - message: ${m.text}`);

        }
    }
}

let database = new MessageDB();

database.createMsg(1, 'Hello World', 'Vince');
database.createMsg(2, 'How are you', 'Vince');
database.createMsg(3, 'whats up', 'Vince');

database.updateMsg(2, "logged ");
database.logAuthor('Vince');
// database.deleteMsg(1);
console.log(database.getMsgs());