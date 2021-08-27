import { v4 as uuidV4 } from "uuid";

class User {
  id: string;

  name: string;

  email: string;

  constructor({ name, email }: Omit<User, "id">) {
    this.id = uuidV4();
    this.name = name;
    this.email = email;
  }
}

export { User };
