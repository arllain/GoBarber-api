interface ITemplaateVariables {
  [key: string]: string | number;
}

export default interface IParseMailTemplaateDTO {
  template: string;
  variables: ITemplaateVariables;
}
