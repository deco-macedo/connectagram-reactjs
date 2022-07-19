import { Moon, TreeStructure } from 'phosphor-react'

export function Header() {
  return (
    <header className="w-full flex items-center justify-center dark:bg-gray-700 border-b dark:border-gray-600 border-gray-400">
        <div className="ml-10 w-full py-5 flex items-center justify-center dark:bg-gray-700 gap-1">
          <TreeStructure size={24}/>
          <h1 className="font-bold">Connectagram</h1>
        </div>
        <div className="">
          <Moon className="cursor-pointer mr-10" size={36} />
        </div>
    </header>
    )
}
