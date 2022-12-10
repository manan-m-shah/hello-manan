import figlet from "figlet";
import gradient from "gradient-string";
import sleep from "../utils/sleep.js";

const aboutHeading = async () => {
    const figletText = figlet.textSync("About Me", {
        font: "Tinker-Toy",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
    });

    console.log(gradient.pastel(figletText));
    await sleep(400)
    console.clear()

    const figletText1 = figlet.textSync("About Me.", {
        font: "Tinker-Toy",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
    });

    console.log(gradient.pastel(figletText1));
    await sleep(400)
    console.clear()

    const figletText2 = figlet.textSync("About Me..", {
        font: "Tinker-Toy",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
    });

    console.log(gradient.pastel(figletText2));
    await sleep(400)
    console.clear()

    return
}

export default aboutHeading