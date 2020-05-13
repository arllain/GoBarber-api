import IParseMailTemplaateDTO from '@shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplaateDTO';

interface IMailContact {
  name: string;
  email: string;
}

export default interface ISendEmailDTO {
  to: IMailContact;
  from?: IMailContact;
  subject: string;
  templateData: IParseMailTemplaateDTO;
}
