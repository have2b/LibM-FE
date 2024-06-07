import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Book, Category } from "@/models";
import { deleteCategory } from "@/services";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { UpdateCategoryForm } from "../forms";

export const columnsCat: ColumnDef<Category>[] = [
  {
    header: "#",
    cell: (info) => info.row.index + 1,
  },
  {
    accessorKey: "categoryId",
    header: "CategoryId",
  },
  {
    accessorKey: "categoryName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          CategoryName
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    header: "Action",
    cell: ({ row }) => {
      const category = row.original;

      return (
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger className="rounded-md bg-green-500 p-3 text-white">
              Edit
            </DialogTrigger>
            <DialogContent>
              <UpdateCategoryForm category={category} />
            </DialogContent>
          </Dialog>
          <Button
            onClick={() => {
              const confirmed = window.confirm(
                "Are you sure you want to delete this category?",
              );
              if (confirmed) {
                deleteCategory(category.categoryId!);
              }
            }}
            className="bg-red-500"
          >
            Delete
          </Button>
        </div>
      );
    },
  },
];

export const columnsBook: ColumnDef<Book>[] = [
  {
    header: "#",
    cell: (info) => info.row.index + 1,
  },
  {
    accessorKey: "bookId",
    header: "BookId",
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "author",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Author
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "publisher",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Publisher
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "coverUrl",
    header: "Cover",
  },
  {
    header: "Action",
    cell: ({ row }) => {
      const book = row.original;

      return (
        <div className="flex gap-2">
          <Button className="bg-red-500">Delete</Button>
        </div>
      );
    },
  },
];
