import handlebars from 'handlebars';
import IParseMailTemplaateDTO from '../dtos/IParseMailTemplaateDTO';
import IMailTemplateProvider from '../models/IMailTemplateProvider';

class HandlebarsMailTemplateProvider implements IMailTemplateProvider {
  public async parse({
    template,
    variables,
  }: IParseMailTemplaateDTO): Promise<string> {
    const parseTemplate = handlebars.compile(template);
    return parseTemplate(variables);
  }
}

export default HandlebarsMailTemplateProvider;
