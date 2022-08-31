export class Contact {
    name = null;
    lastName = null;
    email = null;
    connected = false;

    constructor(data) {
        this.name = data.name;
        this.lastName = data.lastName;
        this.email = data.email;
        this.connected = data.connected;
    }
}