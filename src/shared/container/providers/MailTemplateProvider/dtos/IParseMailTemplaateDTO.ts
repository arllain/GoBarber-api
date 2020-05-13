interface ITemplaateVariables {
  [key: string]: string | number;
}

export default interface IParseMailTemplaateDTO {
  file: string;
  variables: ITemplaateVariables;
}
