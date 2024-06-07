import { SideBar } from "@/components";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useAuth, useCategories } from "@/hooks";
import { AddCategoryForm } from "./forms";
import { columnsCat } from "./table/comlumns";
import { DataTable } from "./table/data-table";

export const ManageCategories = () => {
  const { categories, loading, error } = useCategories();
  console.log(categories);

  const { user } = useAuth();
  return (
    <>
      <div className="flex items-center justify-start">
        <SideBar user={user} />
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error</div>
        ) : (
          <div className="ms-64 flex flex-col justify-center gap-6">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-semibold">Manage Categories</p>
              <Dialog>
                <DialogTrigger className="rounded-md bg-blue-500 p-3 text-white">
                  Add Category
                </DialogTrigger>
                <DialogContent>
                  <AddCategoryForm />
                </DialogContent>
              </Dialog>
            </div>
            <DataTable columns={columnsCat} data={categories!} />
          </div>
        )}
      </div>
    </>
  );
};
