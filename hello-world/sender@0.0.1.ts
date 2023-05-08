import { Symbol } from "../deps.ts";
import { OnMessageCallback } from "../deps.ts";
class SenderSymbol extends Symbol {
    
    onInit(send: OnMessageCallback): void {
        // sending test message
        send({
            "test": "Hello, World"
        })
    }

    onMessage(done: OnMessageCallback, msg: Record<string, unknown>): void {
        console.log("Works")
        done({
            "test": "Hello, World"
        })
    }
}

export default SenderSymbol;