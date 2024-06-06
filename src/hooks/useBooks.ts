import axiosInstance from "@/api/axiosInstance";
import { Book, Metadata } from "@/models";
import { useEffect, useState } from "react";

export const useBooks = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [books, setBooks] = useState<Book[] | null>(null);
  const [metadata, setMetadata] = useState<Metadata | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const fetchBooks = async (page: number) => {
    setLoading(true);
    setError(false);
    try {
      const response = await axiosInstance.get(`books?pageNumber=${page}`);
      setMetadata(response.data.metadata);
      setBooks(response.data.books);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const filterBooks = async (searchTerm: string, orderBy: string) => {
    setLoading(true);
    setError(false);
    try {
      const response = await axiosInstance.get(
        `books?searchTerm=${searchTerm}&orderBy=${orderBy}`,
      );
      setMetadata(response.data.metadata);
      setBooks(response.data.books);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks(currentPage);
  }, [currentPage]);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < (metadata?.totalPages ?? 0)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return {
    metadata,
    books,
    loading,
    error,
    currentPage,
    handlePrevious,
    handleNext,
    filterBooks,
  };
};
