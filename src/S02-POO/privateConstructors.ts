// SINGLETON - gof
export class Database {
  private static database: Database;

  constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Connected: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDB(host: string, user: string, password: string): Database {
    if (Database.database) return Database.database;
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db = Database.getDB('localhost', 'root', 'Rasfd#21_');
db.connect();

const db2 = Database.getDB('localhost', 'root', '');
db2.connect();

if (db === db2) console.log('true');
else console.log('false');
