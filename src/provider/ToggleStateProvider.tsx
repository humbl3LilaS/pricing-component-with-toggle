import {createContext, ReactNode, useContext, useState} from "react";

interface ToggleState {
    enabled : boolean,
    setEnabled: React.Dispatch<React.SetStateAction<boolean>>
}

const ToggleContext = createContext<ToggleState | null>(null);

export  function ToggleStateProvider({children}:{children: ReactNode}){
    const [enabled,setEnabled] = useState(false)


    return(
        <ToggleContext.Provider value={{enabled, setEnabled}}>
            {children}
        </ToggleContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useToggleContext() {
    const context = useContext(ToggleContext);

    if (!context) {
        throw new Error("useToggleContext can only be used inside the children of ToggleState Provider")
    }

    return context
}