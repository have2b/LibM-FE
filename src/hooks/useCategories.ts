import axiosInstace from "@/api/axiosInstance";
import { Category } from "@/models";
import { useEffect, useState } from "react";

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean | null>(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstace.get("categories");
        setCategories(response.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};
