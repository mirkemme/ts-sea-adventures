import { IFadeParams } from "../../interfaces/IFadeParams";

export function fade({timeout_ms, callback}: IFadeParams) { 
    let timer: ReturnType<typeof setTimeout> = setTimeout(() => {
        callback((prev) => !prev);
    }, timeout_ms);
    
    return () => clearTimeout(timer); 
}