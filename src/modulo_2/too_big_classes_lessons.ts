// Classes muito grandes não são boas porque violam o principio do KISS, e a classe em si é grande, generica e nao trata corretamente ou individualmente as funçções.

class UsuarioSistema {
  public nome: string;
  public idade: number;
  public email: string;
  public senha: string;
  public endereco: string;
  public telefone: string;
  public status: boolean;
  public ultimoLogin: Date | string | number | null | undefined; // exagero
  public tentativasLogin: any; // tipo genérico
  private logs: any[];

  constructor(
    nome: string,
    idade: number,
    email: string,
    senha: string,
    endereco: string,
    telefone: string
  ) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
    this.senha = senha;
    this.endereco = endereco;
    this.telefone = telefone;
    this.status = true;
    this.ultimoLogin = null;
    this.tentativasLogin = 0;
    this.logs = [];
  }

  // Método gigante que faz tudo ao mesmo tempo
  public registrarOuAtualizarOuExcluirOuNada(acao: string, dados?: any): void {
    if (acao === "registrar") {
      console.log("Registrando usuário...");
      this.logs.push(`Registrado em ${new Date().toISOString()}`);
    } else if (acao === "atualizar") {
      console.log("Atualizando usuário...");
      if (dados) {
        if (dados.nome) this.nome = dados.nome;
        if (dados.idade) this.idade = dados.idade;
        if (dados.email) this.email = dados.email;
        if (dados.senha) this.senha = dados.senha;
        if (dados.endereco) this.endereco = dados.endereco;
        if (dados.telefone) this.telefone = dados.telefone;
      }
      this.logs.push(`Atualizado em ${new Date().toISOString()}`);
    } else if (acao === "excluir") {
      console.log("Excluindo usuário...");
      this.status = false;
      this.nome = "";
      this.idade = 0;
      this.email = "";
      this.senha = "";
      this.endereco = "";
      this.telefone = "";
      this.logs.push(`Excluído em ${new Date().toISOString()}`);
    } else {
      console.log("Nenhuma ação realizada...");
      this.logs.push(`Tentativa inválida em ${new Date().toISOString()}`);
    }
  }

  // Método com código duplicado
  public login(email: string, senha: string): boolean {
    if (this.email === email && this.senha === senha) {
      this.ultimoLogin = new Date();
      this.tentativasLogin = 0;
      console.log("Login realizado com sucesso!");
      this.logs.push("Login OK");
      return true;
      // raros caso usamos else, normalmente invermos a logica e começamos com o erro e a versão negativa, fazendo o return, e depois fazemos a logica caso positivo.
    } else {
      this.tentativasLogin++;
      console.log("Falha no login!");
      this.logs.push("Login FAIL");
      if (this.tentativasLogin > 5) {
        console.log("Usuário bloqueado por muitas tentativas!");
        this.status = false;
      }
      return false;
    }
  }

  // Método inútil que repete lógica
  public autenticar(email: string, senha: string): boolean {
    if (this.email === email && this.senha === senha) {
      return true;
    }
    return false;
  }

  // Método que mistura responsabilidades
  public imprimirInformacoes(): void {
    console.log("Nome:", this.nome);
    console.log("Idade:", this.idade);
    console.log("Email:", this.email);
    console.log("Endereço:", this.endereco);
    console.log("Telefone:", this.telefone);
    console.log("Ativo:", this.status ? "Sim" : "Não");
    console.log("Logs:", this.logs.join("; "));
  }

  // Método desnecessariamente grande e confuso
  public verificarSituacao(): string {
    if (this.status && this.ultimoLogin) {
      if (this.idade > 18) {
        if (typeof this.ultimoLogin === "object") {
          return "Usuário adulto ativo";
        } else {
          return "Usuário adulto estranho";
        }
      } else {
        if (typeof this.ultimoLogin === "object") {
          return "Usuário menor ativo";
        } else {
          return "Usuário menor estranho";
        }
      }
    } else if (!this.status && this.ultimoLogin) {
      return "Usuário inativo mas já logou";
    } else if (!this.status && !this.ultimoLogin) {
      return "Usuário nunca logou e está inativo";
    } else {
      return "Situação indefinida";
    }
  }
}

export {};
