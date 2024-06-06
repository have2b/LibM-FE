import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";

export const Header = () => {
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
        <Button>Login</Button>
        <Button>Register</Button>
      </div>
    </header>
  );
};

const NavMenu = () => {
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
              <li>item</li>
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
