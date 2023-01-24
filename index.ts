#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import showBanner from "node-banner";
import login from  "./modules/login.js"


// //show banner
// (async () => {
//     await showBanner('ATM', chalk.green('ATM Typescript project'));
// })();


login();