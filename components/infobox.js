import boxen from "boxen";
import chalk from "chalk";
import gradient from "gradient-string"

const info = chalk.cyan.bold.inverse(" Manan Shah ")
    + "\n\n" +
    chalk.magenta.bold(" 👨‍💻  ") +
    gradient.pastel("Full Stack Engineer")
    + "\n\n" +
    chalk.magenta.bold(" 🤔  ") +
    gradient.passion("Multidisciplinary Thinker!")
    + "\n\n" +
    chalk.magenta.bold(" 👨‍🎓  ") +
    gradient.cristal("UG @ BITS Pilani, Goa Campus")
    + "\n\n" +
    chalk.magenta.bold(" 🤵  ") +
    gradient.atlas("President @ Blockchain Club, BITS Goa")

const infoBox = boxen(
    info,
    {
        padding: 1,
        margin: 1,
        borderStyle: "double",
        borderColor: "green",
        // align: "center",
        // float: "center",
    }
);

export default infoBox;
