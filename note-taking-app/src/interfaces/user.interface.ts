export interface User {
  username: string;
  email: string;
  password: string;
  google_oauth_id?: string | null;
  is_google_authenticated: boolean;
}
