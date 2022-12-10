import boxen from "boxen"
import chalk from "chalk"
import inquirer from "inquirer"
import { setPage } from "../bin/index.js"
import infoBox from "../components/infobox.js"
import pkg from "terminal-kit"
import infoMessage from "../components/infoMessage.js"
import figlet from "figlet"
import gradient from "gradient-string"
import sleep from "../utils/sleep.js"
import aboutHeading from "../components/aboutHeading.js"
const terminal = pkg.terminal

const about = async () => {
    terminal.windowTitle("About Me")
    const showHeading = await aboutHeading()

    console.log(infoBox)

    infoMessage()

    console.log("\n\n")

    const action = await inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: [
                // "Interactive CV",
                // "Get in touch",
                "Go back",
                "Exit",
            ],
        },
    ])

    switch (action.action) {
        // case "Interactive CV":
        //     setPage("cv");
        //     break;
        // case "Get in touch":
        //     setPage("contact");
        //     break;
        case "Exit":
            setPage("exit")
            break;
        default:
            setPage("route")
            break;
    }
}

export default about
