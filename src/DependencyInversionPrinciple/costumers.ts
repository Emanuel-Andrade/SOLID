import {
  CostumerIdentification,
  EmpresarialCostumerProtocol,
  IndividualCostumerProtocol,
  MemberCostumerProtocol,
} from './interfaces/costumerProtocol';

export class IndividualCostumer
  implements IndividualCostumerProtocol, CostumerIdentification {
  name: string;
  lastName: string;
  cpf: string;

  constructor(name: string, lastName: string, cpf: string) {
    this.name = name;
    this.lastName = lastName;
    this.cpf = cpf;
  }
  getName(): string {
    return this.name + ' ' + this.lastName;
  }
  getIDN(): string {
    return this.cpf;
  }
}

export class EmpresarialCostumer
  implements EmpresarialCostumerProtocol, CostumerIdentification {
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
  getName(): string {
    return this.name;
  }
  getIDN(): string {
    return this.cnpj;
  }
}

export class MemberCostumer
  implements MemberCostumerProtocol, CostumerIdentification {
  login: string;
  senha: number;
  id: string;

  constructor(login: string, senha: number, id: string) {
    this.login = login;
    this.senha = senha;
    this.id = id;
  }
  getName(): string {
    return this.login;
  }
  getIDN(): string {
    return this.id;
  }
}
