import { Header } from "@/components";
import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    document.title = "LibM";
  }, []);
  return (
    <div className="flex flex-col px-4">
      <Header />
    </div>
  );
};
