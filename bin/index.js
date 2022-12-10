#!/usr/bin/env node

import yargs from "yargs";
import chalk from "chalk";
import figlet from "figlet";
import boxen from "boxen";
import Table from "cli-table3";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import pkg from "terminal-kit"

import { socials } from "../library/constants.js"
import infobox from "../components/infobox.js";
import ask from "../utils/ask.js";
import route from "../pages/router.js";
import about from "../pages/about.js";

const { terminal } = pkg;
export let userName

const setUserName = (newName) => {
    userName = newName;
}

let page

export const setPage = (page) => {
    switch (page) {
        case "home":
            page = "home";
            console.clear();
            main();
            break;
        case "about":
            page = "about";
            console.clear();
            about();
            break;
        // case "cv":
        //     page = "cv";
        //     console.clear();
        //     cv();
        //     break;
        // case "contact":
        //     page = "contact";
        //     console.clear();
        //     contact();
        //     break;
        case "exit":
            page = "exit";
            console.clear();
            process.exit(0);
            break;
        default:
            page = "route";
            console.clear();
            route()
            break;
    }
}

const main = async () => {
    terminal.windowTitle("Home");
    terminal.bgBlack();
    // inquirer to get name
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What's your name?",
        },
    ])
    setUserName(answers.name);
    setPage("route");
}

main();
