import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Sidebar() {
    return (
        <aside className="dark:bg-gray-700 bg-gray-100 rounded-lg overflow-hidden">
            <img 
                className="w-full h-[72px] object-cover	"
                src="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
                alt="" 
                />

            <div className="flex flex-col items-center pb-6 mt-[calc(0px-1.5rem-6px)]">
                <Avatar src="https://github.com/deco-macedo.png"/>

                <strong className="mt-4 dark:text-gray-100 leading-relaxed">André Macedo</strong>
                <span className="text-sm dark:text-gray-400 leading-relaxed">Front End Developer</span>
            </div>

            <footer className="border-t dark:border-gray-600 pt-6 px-8 pb-8">
                <a 
                    className="bg-transparent text-green-500 border border-green-500 rounded-lg h-[50px] px-0 py-6 font-bold flex items-center justify-center gap-3 hover:bg-green-500 hover:text-white hover:transition-colors"
                    href="#"
                    >
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
        
    )
}

