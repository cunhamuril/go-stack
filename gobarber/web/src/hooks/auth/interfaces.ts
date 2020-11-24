interface ISignInCredentials {
  email: string;
  password: string;
}

interface IUser {
  id: string;
  name: string;
  avatar_url: string;
}
export interface IAuthContextData {
  user: IUser;
  signIn(data: ISignInCredentials): Promise<void>;
  signOut(): void;
}

export interface IAuthState {
  token: string;
  user: IUser;
}
