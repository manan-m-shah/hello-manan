import chalk from "chalk";
import gradient from "gradient-string";
import pkg from "terminal-kit";
const terminal = pkg.terminal;

const aboutMessage = `Hi, I'm Manan, a programmer who's always at the bleeding edge of technology (or at least I like to think so). When I'm not busy trying to break the internet, I enjoy reading books and pretending to be a musician. And if you're a fan of The Office like me, we'll definitely have something to talk about!`

const infoMessage = async () => {
    const chalkMessage = chalk.cyan(aboutMessage)

    // const box = boxen(chalkMessage, {
    //     padding: 1,
    //     margin: 0.2,
    //     dimBorder: true,
    //     borderStyle: "round",
    //     borderColor: "black",
    // })

    // console.log(box)
    terminal.wrapColumn({ x: 4, width: 65 });
    terminal.wrap(chalkMessage)
}

export default infoMessage
