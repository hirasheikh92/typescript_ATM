import inquirer from "inquirer";
import chalk from "chalk";
async function OtherAmount(balance) {
    const otherAmt = await inquirer.prompt([
        {
            name: "otherAmount",
            type: "number",
            message: "Please Enter your amount"
        }
    ]);
    if (otherAmt.otherAmount < balance) {
        balance -= otherAmt.otherAmount;
    }
    else {
        console.log(chalk.red("You have insufficient balance"));
        balance = await OtherAmount(balance);
    }
    return balance;
}
async function cashWithdraw(balance) {
    const answer = await inquirer.prompt([
        {
            name: "amount",
            type: "list",
            choices: ["500", "1000", "2000", "50000", "10000", "OtherAmount"],
            message: "Please select your amount"
        }
    ]);
    switch (answer.amount) {
        case "500":
            if (balance > Number(answer.amount)) {
                balance -= 500;
                console.log(chalk.yellow(`Your new balance is:${balance}`));
                break;
            }
            else {
                console.log(chalk.red("You have insufficient balance"));
            }
        case "1000":
            if (balance > Number(answer.amount)) {
                balance -= 100;
                console.log(chalk.yellow(`Your new balance is:${balance}`));
                break;
            }
            else {
                console.log(chalk.red("You have insufficient balance"));
            }
        case "2000":
            if (balance > Number(answer.amount)) {
                balance -= 2000;
                console.log(chalk.yellow(`Your new balance is:${balance}`));
                break;
            }
            else {
                console.log(chalk.red("You have insufficient balance"));
            }
        case "5000":
            if (balance > Number(answer.amount)) {
                balance -= 5000;
                console.log(chalk.yellow(`Your new balance is:${balance}`));
                break;
            }
            else {
                console.log(chalk.red("You have insufficient balance"));
            }
        case "10000":
            if (balance > Number(answer.amount)) {
                balance -= 10000;
                console.log(chalk.yellow(`Your new balance is:${balance}`));
                break;
            }
            else {
                console.log(chalk.red("You have insufficient balance"));
            }
        case "OtherAmount":
            balance = await OtherAmount(balance);
            console.log(chalk.yellow(`Your new balance is:${balance}`));
            break;
    }
    return balance;
}
export default cashWithdraw;
