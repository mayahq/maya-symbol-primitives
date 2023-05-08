import Symbol from "https://raw.githubusercontent.com/mayahq/maya-symbol-sdk/main/index.ts";
import { OnMessageCallback } from "https://raw.githubusercontent.com/mayahq/maya-symbol-sdk/main/deps.ts";

class ReceiverSymbol extends Symbol {
    onInit(send: OnMessageCallback): void {
        
    }

    onMessage(done: OnMessageCallback, msg: Record<string, unknown>, vals: Record<string, unknown>): void {
        console.log(msg)
        done(msg)
    }
}

export default ReceiverSymbol