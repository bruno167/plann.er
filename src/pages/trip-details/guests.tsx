import { CircleDashed, UserCog } from "lucide-react";

export function Guests() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5 ">
                    <span className="block font-medium text-zinc-100">Jessica White</span>
                    <span className="block text-sm text-zinc-400 truncate">
                        jessica.withe44@yahoo.com
                    </span>
                </div>
                <CircleDashed className=" size-5 text-zinc-400 shrink-0" />
            </div>
            <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5 ">
                    <span className="block font-medium text-zinc-100">Dr. Rita Pacocha</span>
                    <span className="block text-sm text-zinc-400 truncate">
                        lacy.stidemann@gmail.com
                    </span>
                </div>
                <CircleDashed className=" size-5 text-zinc-400 shrink-0" />
            </div>
            <button className="bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700">
                <UserCog className="size-5" />
                Cadastrar novo link
            </button>
        </div>
    )
}