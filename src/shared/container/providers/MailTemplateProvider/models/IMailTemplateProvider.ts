import IParseMailTemplaateDTO from '../dtos/IParseMailTemplaateDTO';

export default interface IMailTemplateProvider {
  parse(data: IParseMailTemplaateDTO): Promise<string>;
}
