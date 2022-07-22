import { Moon, Sun } from "phosphor-react";
import React from "react";
import { Context, createContext, useContext, useEffect, useState } from "react";

type ChildrenProps = {
    children: React.ReactNode
}

type ThemeContextProps = {
    theme: string;
    setTheme: (newState: string) => void;
}

const initialValue = {
    theme: 'light',
    setTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextProps>(initialValue);

export default function ThemeContextProvider({ children }: ChildrenProps) {

    
    const [theme, setTheme] = useState(localStorage.getItem('theme') !== 'dark' ? 'light' : 'dark');

    useEffect(() => {

        const root = window.document.documentElement;

        const removeOldTheme = theme === 'dark' ? 'light' : 'dark';

        root.classList.remove(removeOldTheme);
        root.classList.add(theme);
        localStorage.setItem('theme', theme);

    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className="px-5 py-4 absolute float-left">
            {theme === 'light' ? 
                (<Moon weight={'fill'} size={30} onClick={() => setTheme('dark')} className="cursor-pointer mx-auto" />) :
                (<Sun weight={'fill'} size={30} onClick={() => setTheme('light')} className="cursor-pointer mx-auto" />)
            }
            <div className="">
            {theme === 'light' ? 
                (<p className="text-[0.6rem]">Dark Mode</p>) :
                (<p className="text-[0.6rem]">Light Mode</p>)
            }
            </div>
            </div>
            
            {children}
        </ThemeContext.Provider>

    )
    
}

export function useTheme() {
    return useContext(ThemeContext);
}