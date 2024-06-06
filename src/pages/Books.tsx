import { Header } from "@/components";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Separator } from "@/components/ui/separator";

import { useBooks, useCategories } from "@/hooks";
import { Book } from "@/models";
import { filterSchema } from "@/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";

export const Books = () => {
  const { categories } = useCategories();
  const {
    metadata,
    books,
    loading,
    error,
    handleNext,
    handlePrevious,
    filterBooks,
  } = useBooks();
  const { currentPage, hasNext, hasPrevious, totalPages } = {
    ...metadata,
  };

  const form = useForm<z.infer<typeof filterSchema>>({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      searchTerm: "",
      orderBy: "title",
    },
  });

  function onSubmit(values: z.infer<typeof filterSchema>) {
    filterBooks(values.searchTerm, values.orderBy);
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error while fetching</div>;

  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <div className="mt-8 flex justify-evenly gap-12">
        <div className="h-96 rounded-xl border border-black p-6">
          <h1 className="text-center text-2xl font-bold uppercase">Filter</h1>
          <Separator />
          <Select>
            <SelectTrigger className="my-2 w-96">
              <SelectValue placeholder="Choose category" />
            </SelectTrigger>
            <SelectContent>
              {categories?.map((category) => (
                <SelectItem
                  key={category.categoryId}
                  value={category!.categoryName!}
                >
                  {category.categoryName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Separator />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="searchTerm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Search title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Search by title"
                        className="mt-2"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="orderBy"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Order by</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger className="my-2 w-96">
                          <SelectValue placeholder="Order by" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="title">Title</SelectItem>
                        <SelectItem value="author">Author</SelectItem>
                        <SelectItem value="publisher">Publisher</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="mt-4 w-full">Search</Button>
            </form>
          </Form>
        </div>
        <div className="flex w-2/3 flex-col">
          <BookList books={books} />
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  className={`${!hasPrevious ? "pointer-events-none m-8 opacity-50" : "m-8"}`}
                  onClick={handlePrevious}
                />
              </PaginationItem>
              <PaginationItem>
                <p className="font-semibold">
                  {currentPage} / {totalPages}
                </p>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  onClick={handleNext}
                  className={`${!hasNext ? "pointer-events-none m-8 opacity-50" : "m-8"}`}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

const BookList = (prop: { books: Book[] | null }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {prop.books?.map((book) => (
        <div
          key={book.bookId}
          className="transition-all duration-200 ease-in-out hover:scale-105 hover:cursor-pointer hover:shadow-xl"
        >
          <Card>
            <CardHeader>
              <CardTitle className="truncate uppercase">{book.title}</CardTitle>
              <CardDescription className="truncate">
                <span className="font-semibold text-black">Author: </span>
                {book.author}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img src="/book/default_book.png" alt="book-img" />
            </CardContent>
            {/* <CardFooter className="justify-center truncate">
              <p>{book.publisher}</p>
            </CardFooter> */}
          </Card>
        </div>
      ))}
    </div>
  );
};
