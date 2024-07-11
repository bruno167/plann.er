import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function ImportantLinks () {
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links importantes</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5 ">
                        <span className="block font-medium text-zinc-100">Reserva do AirBnB</span>
                        <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
                            https://www.airbnb.com.br/rooms/18470001184564654654654654654
                        </a>
                    </div>
                    <Link2 className=" size-5 text-zinc-400 shrink-0" />
                </div>
            </div>
            <Button variant="secondary" size="full" >
                <Plus className="size-5" />
                Cadastrar novo link
            </Button>
        </div>
    )
}