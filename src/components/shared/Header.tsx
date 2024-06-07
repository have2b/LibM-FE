import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useAuth, useCategories } from "@/hooks";
import { User } from "@/models";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export const Header = () => {
  const { user } = useAuth();

  return (
    <header className="flex w-full items-center justify-between p-3 shadow-xl">
      {/* Logo */}
      <div className="flex items-center justify-start gap-2 bg-black py-2 pe-16 ps-2 shadow-md">
        <div className="h-16 w-16">
          <img src="/logo.svg" alt="logo" />
        </div>
        <div className="flex flex-col items-start justify-center">
          <span className="text-2xl font-bold text-white">LibM</span>
          <span className="font-semibold text-blue-200">Public Library</span>
        </div>
      </div>
      {/* Navigation menu */}
      <NavMenu />
      {/* Auth */}
      <div className="flex items-center justify-center gap-3">
        {user ? (
          <UserDropdown user={user} />
        ) : (
          <>
            <Button onClick={() => (window.location.href = "/auth/login")}>
              Login
            </Button>
            <Button onClick={() => (window.location.href = "/auth/register")}>
              Register
            </Button>
          </>
        )}
      </div>
    </header>
  );
};

const NavMenu = () => {
  const { categories, loading, error } = useCategories();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error while fetching</div>;
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Category</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[200px] md:grid-cols-2 lg:w-[300px]">
              {categories?.map((category) => (
                <NavigationMenuLink
                  key={category.categoryId}
                  href={`/books/${category.categoryName}`}
                  className={navigationMenuTriggerStyle()}
                >
                  {category.categoryName}
                </NavigationMenuLink>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/books"
            className={navigationMenuTriggerStyle()}
          >
            Books
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const UserDropdown = (prop: { user: User }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <div className="me-4 flex items-center justify-center gap-3">
          <img
            src={`/user/${prop.user.avatarUrl}`}
            alt="avatar"
            className="h-12 w-12 rounded-full object-cover"
          />
          <span className="font-semibold">{prop.user.fullName}</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="me-2">
        <DropdownMenuItem>Profile</DropdownMenuItem>
        {prop.user.role === 0 ? (
          <DropdownMenuItem>
            <Link to={"/admin/panel"}>Panel</Link>
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem>Request</DropdownMenuItem>
        )}
        <DropdownMenuItem
          className="hover:cursor-pointer"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.reload();
          }}
        >
          <span className="font-bold text-red-500">Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
