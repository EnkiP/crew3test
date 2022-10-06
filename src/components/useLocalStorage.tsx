import { useEffect, useState } from "react";

export const useLocalStorage = (storageKey: string, fallbackState: unknown) => {
    const storageValue = localStorage.getItem(storageKey)

    
    const [value, setValue] = useState(
        (storageValue && JSON.parse(storageValue)) ?? fallbackState
    );

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, storageKey]);

    return [value, setValue];
};