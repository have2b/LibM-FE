import { Separator } from "@/components/ui/separator";
import { User } from "@/models";
import { BiBook, BiCategory } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { MdOutlineRequestPage } from "react-icons/md";
import { Link } from "react-router-dom";

export const SideBar = (prop: { user: User | null }) => {
  return (
    <div className="flex h-screen flex-col gap-5 bg-blue-500 px-12 py-6 text-white">
      <div className="flex items-center justify-start gap-2 py-2">
        <div className="h-16 w-16">
          <img src="/logo.svg" alt="logo" />
        </div>
        <div className="flex flex-col items-start justify-center">
          <span className="text-2xl font-bold text-white">LibM</span>
          <span className="font-semibold text-gray-300">Public Library</span>
        </div>
      </div>
      <Separator />
      <div className="flex items-center gap-3">
        <img
          src={`/user/${prop.user?.avatarUrl}`}
          alt="avatar"
          className="h-12 w-12 rounded-full object-cover"
        />
        <p className="font-semibold">Welcome, {prop.user?.fullName}</p>
      </div>
      <Separator />
      <p className="flex items-center gap-3 text-center text-2xl font-bold uppercase">
        <CiSettings size={32} />
        Features
      </p>
      <ul className="flex flex-col space-y-2">
        <li className="rounded-md px-4 py-2 transition-all hover:bg-gray-100 hover:text-black">
          <Link
            to={"/admin/panel/categories"}
            className="flex items-center gap-3"
          >
            <BiCategory />
            Manage category
          </Link>
        </li>
        <li className="rounded-md px-4 py-2 transition-all hover:bg-gray-100 hover:text-black">
          <Link to={"/admin/panel/books"} className="flex items-center gap-3">
            <BiBook />
            Manage books
          </Link>
        </li>
        <li className="rounded-md px-4 py-2 transition-all hover:bg-gray-100 hover:text-black">
          <Link
            to={"/admin/panel/requests"}
            className="flex items-center gap-3"
          >
            <MdOutlineRequestPage />
            Manage requests
          </Link>
        </li>
      </ul>
    </div>
  );
};
