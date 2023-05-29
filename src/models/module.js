class Register {
  constructor(id, username, password, email) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.created_at = new Date();
  }
}
module.exports = Register;
