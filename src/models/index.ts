export interface User {
  userId?: string;
  username?: string;
  password?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  address?: string;
  role?: string;
  avatarUrl?: string;
}

export interface Category {
  categoryId?: string;
  categoryName?: string;
  description?: string;
}
