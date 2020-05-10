export default interface IHashProvider {
  generateHash(payload: string): Promise<string>;
  compareHahs(payload: string, hashed: string): Promise<boolean>;
}
