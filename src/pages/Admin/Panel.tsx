import { SideBar } from "@/components";
import { useAuth } from "@/hooks";

export const Panel = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="flex items-center justify-between">
        <SideBar user={user} />
      </div>
    </>
  );
};
