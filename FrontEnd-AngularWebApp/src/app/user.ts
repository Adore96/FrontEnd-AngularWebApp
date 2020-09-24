export class User {
  public fname: string;
  public lname: string;
  public username: string;
  public password: string;
  public telephone: number;

  constructor(fname: string, lname: string, username: string, password: string, telephone: number) {
    this.fname = fname;
    this.lname = lname;
    this.username = username;
    this.password = password;
    this.telephone = telephone;
  }
}
