const bcrypt = require('bcryptjs');

class User {
    constructor(fullName, email, username, password){
        this.fullName = fullName;
        this.email = email;
        this.username = username;
        this.password = bcrypt.hashSync(password, 10);
    }
}

module.exports = User;