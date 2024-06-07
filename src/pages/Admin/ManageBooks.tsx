import { SideBar } from "@/components";
import { Button } from "@/components/ui/button";
import { useAuth, useBooks } from "@/hooks";
import { columnsBook } from "./table/comlumns";
import { DataTable } from "./table/data-table";

export const ManageBooks = () => {
  const { books, loading, error } = useBooks();
  //   console.log(books);

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
          <div className="ms-32 flex flex-col justify-center gap-6">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-semibold">Manage Book</p>
              <Button>Add book</Button>
            </div>
            <DataTable columns={columnsBook} data={books!} />
          </div>
        )}
      </div>
    </>
  );
};
