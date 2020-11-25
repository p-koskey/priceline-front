export class User {
    static id(id: any): string {
      throw new Error('Method not implemented.');
    }
    id: number;
    username: string;
    email: string;
    password: string;
}