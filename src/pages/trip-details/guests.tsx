import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

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
            <Button variant="secondary" size="full" >
                <UserCog className="size-5" />
                Gerenciar convidados
            </Button>
        </div>
    )
}