class Database {
  // criamos um singleton como forma de dar acesso a determinada classe sem a necessidade de iniciar varias instancias dela.
  // dessa forma o metodo e o atributo estatico referenciam a propria classe, enquanto usamos tags private para protege-las.
  private static instance: Database;

  private constructor() {
    console.log(`Database connecting...`);
  }

  // method estaticos bem no publico, para garantir a chamda correta

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  public runQuery(query: string) {
    console.log(`Running query: ${query}`);
  }
}

const db1 = Database.getInstance();
db1.runQuery("SELECT * FROM users");

export {};
