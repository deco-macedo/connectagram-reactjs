import { TreeStructure } from "phosphor-react";

export function Header() {
  return (
    <header className="w-full flex items-center justify-center dark:bg-gray-700 border-b dark:border-gray-600 border-gray-400">
        <div className="w-full py-5 flex items-center justify-center dark:bg-gray-700 gap-1">
          <TreeStructure weight="bold" size={28}/>
          <h1 className="font-bold italic text-xl">Connectagram</h1>
        </div>
    </header>
    )
}
