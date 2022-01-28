import { useEffect, useRef } from "react";

const UseRef = () => {

    const divRef = useRef<HTMLDivElement>(null);
    // const divRef = useRef<HTMLDivElement>(null!);
    // const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!divRef.current) {
            console.log("divRef not assined");
            throw new Error("divRef not assigned");
        }
        // if (!inputRef.current) {
        //     console.log("inputRef not assined");
        //     throw new Error("inputRef not assigned");
        // }
    }, [])

    // --- Mutable Ref from https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks ---
    // const intervalRef = useRef<number | null>(null);
    // useEffect(() => {
    //     intervalRef.current = 500;
    // }, [])

    return (
        <div ref={divRef}>
            <p>some text</p>
            {/* <button onClick={() => console.log(intervalRef)}>show mutable ref</button> */}
        </div>
    )
}

export default UseRef;