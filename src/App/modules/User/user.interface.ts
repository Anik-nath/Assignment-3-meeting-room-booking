export type TUser = {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  role: 'admin' | 'user';
  isDeleted: boolean;
};
