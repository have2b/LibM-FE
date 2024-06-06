export interface User {
  userId?: string;
  username?: string;
  password?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  address?: string;
  role?: number;
  avatarUrl?: string;
}

export interface Category {
  categoryId?: string;
  categoryName?: string;
  description?: string;
}

export interface Book {
  bookId?: string;
  title?: string;
  description?: string;
  author?: string;
  publisher?: string;
  coverUrl?: string;
}

export interface Metadata {
  currentPage?: number;
  hasNext?: boolean;
  hasPrevious?: boolean;
  pageSize?: number;
  totalPages?: number;
}
