// Para gerar o md5 pode ser feito no site http://www.md5.cz/
export default {
  jwt: {
    secret: process.env.APP_SECRET || 'default',
    expiresIn: '1d',
  },
};
