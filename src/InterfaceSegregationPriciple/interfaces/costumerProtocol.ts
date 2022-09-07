export interface CostumerIdentification {
  getName(): string;
  getIDN(): string;
}

export interface IndividualCostumerProtocol {
  name: string;
  lastName: string;
  cpf: string;
}

export interface EmpresarialCostumerProtocol {
  name: string;
  cnpj: string;
}

export interface MemberCostumerProtocol {
  login: string;
  senha: number;
  id: string;
}
