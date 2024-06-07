import axiosInstace from "@/api/axiosInstance";

export const addCategory = (categoryName: string, description: string) => {
  axiosInstace.post("categories", { categoryName, description }).then((res) => {
    console.log(res.data);
  });
};

export const editCategory = (
  categoryId: string,
  categoryName: string,
  description: string,
) => {
  axiosInstace
    .put(`categories/${categoryId}`, { categoryName, description })
    .then((res) => {
      console.log(res.data);
      window.location.reload();
    });
};

export const deleteCategory = (categoryId: string) => {
  axiosInstace.delete(`categories/${categoryId}`).then((res) => {
    console.log(res.data);
    window.location.reload();
  });
};
