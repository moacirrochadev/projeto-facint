import { ArrowDown, ArrowUp, Bell, Moon } from "lucide-react";

export function Middlebar() {
	return (
		<div>
			<div className="flex justify-between items-center p-2 sm:w-480 mx-auto">
				<div className="flex cursor-pointer">
					<ArrowUp className="size-3 sm:size-8" />
					<ArrowDown className="size-3 sm:size-8" />
				</div>
				<p className="text-md sm:text-2xl md:font-semibold">Análise e Desenvolvimento de Sistemas</p>
				<div className="flex gap-2 sm:gap-4">
					<Moon className="size-3 sm:size-8 cursor-pointer" />
					<Bell className="size-3 sm:size-8 cursor-pointer" />
				</div>
			</div>
		</div>
	);
}
