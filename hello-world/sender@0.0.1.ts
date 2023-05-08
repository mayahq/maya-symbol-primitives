import Symbol from "https://raw.githubusercontent.com/mayahq/maya-symbol-sdk/main/index.ts";
import { OnMessageCallback } from "https://raw.githubusercontent.com/mayahq/maya-symbol-sdk/main/deps.ts";
class SenderSymbol extends Symbol {
    
    onInit(): void {
        
    }

    onMessage(done: OnMessageCallback, msg: Record<string, unknown>, vals: Record<string, unknown>): void {
        console.log("Works")
        done({
            "test": "Hello, World"
        })
    }
}

export default SenderSymbol;