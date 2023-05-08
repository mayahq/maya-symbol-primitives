import { Symbol } from "../deps.ts";
import { OnMessageCallback } from "../deps.ts";

class ReceiverSymbol extends Symbol {

    onInit(send: OnMessageCallback): void {
        
    }

    onMessage(done: OnMessageCallback, msg: Record<string, unknown>): void {
        console.log(msg)
        done(msg)
    }
}

export default ReceiverSymbol