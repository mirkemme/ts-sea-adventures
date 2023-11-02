export interface IFadeParams {
    timeout_ms: number,
    callback: (cb: (prev: boolean) => boolean) => void,
 }