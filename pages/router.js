import chalk from "chalk";
import figlet from "figlet";
import inquirer from "inquirer";
import { setPage, userName } from "../bin/index.js";
import pkg from "terminal-kit";
import gradient from "gradient-string";

const { terminal } = pkg;

const route = async () => {
    terminal.windowTitle("Welcome");
    const figletText = figlet.textSync("Welcome!", {
        font: "Larry 3D",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
    });

    console.log(gradient.pastel(figletText));

    console.log(chalk.magenta.bold(`Hello ${userName}! Welcome to my CLI. \n\n`))

    const action = await inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: [
                "About me",
                "Interactive CV",
                "Get in touch",
                "Play some games!",
                "Exit",
            ],
        },
    ])

    switch (action.action) {
        case "About me":
            setPage("about");
            break;
        case "Exit":
            setPage("exit");
            break;
        default:
            setPage("route");
            break;
    }
}

export default route