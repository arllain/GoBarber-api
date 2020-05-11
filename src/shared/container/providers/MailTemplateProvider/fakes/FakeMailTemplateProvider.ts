import IParseMailTemplaateDTO from '../dtos/IParseMailTemplaateDTO';
import IMailTemplateProvider from '../models/IMailTemplateProvider';

class FakeMailTemplateProvider implements IMailTemplateProvider {
  public async parse({ template }: IParseMailTemplaateDTO): Promise<string> {
    return template;
  }
}

export default FakeMailTemplateProvider;
