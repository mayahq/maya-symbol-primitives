import { Symbol } from "../deps.ts";
import { OnMessageCallback, Properties } from "../deps.ts";
class SenderSymbol extends Symbol {
    
   properties: Properties =  { 
        testField: {
            category: "NewCategory",
            color: "cyan",
            component: "input",
            schema: {
                label: "Naaice",
                options:{
                    title: "Sometitle",
                    allowInput: true,
                    placeholder: "Nothing",
                    types: ["str"]
                }
            }
        }
    }

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