import { CircleUser } from "lucide-react";
import { Sidebar } from "./sidebar";

export function Navbar() {
	return (
    <div className="h-full my-2 px-2 flex items-center justify-around flex-1 border-b-2 border-zinc-200">
      <Sidebar />
      <div className="flex flex-1 justify-between items-center p-2">
        <img src="/logo.png" alt="Logo" className="w-32" />
        <CircleUser className="size-7" />
      </div>
    </div>
  );
}
