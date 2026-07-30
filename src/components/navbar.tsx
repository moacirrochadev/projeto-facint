import { CircleUser } from "lucide-react";
import { Sidebar } from "./sidebar";

export function Navbar() {
	return (
		<div className="flex items-center border-b-2 border-zinc-200 px-2">
			<Sidebar />
            <img src="/logo.png" alt="Logo" className="w-32 mx-auto py-2" />
            <CircleUser className="size-7" />
		</div>
	);
}
