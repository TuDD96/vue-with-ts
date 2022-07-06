/* eslint-disable @typescript-eslint/no-explicit-any */
export interface State {
  auth?: any;
  token: string | null;
  role: string;
}

export interface ResponseAuth {
  user: {
    accessToken: string
  }
}