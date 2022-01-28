import { useState } from "react";

const useBoolean = (boolean:boolean = false) => {
    const [state, setState] = useState(boolean);

    const toggle = () => {
        setState(prev => !prev);
    }

    return [state, toggle] as const; // <-- must do 'as const;'
}

export default useBoolean;