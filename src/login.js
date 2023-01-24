import users from "./users.js";
import inquirer from "inquirer";
import mainScreen from "./mainScreen.js";
async function login() {
    const answer = await inquirer.prompt([
        {
            name: "accountNumber",
            type: "number",
            message: "please enter your Account Number"
        },
        {
            name: "pin",
            type: "password",
            message: "please enter your PIN"
        }
    ]);
    let user = users.find(x => x.accountNumber == answer.accountNumber && x.pinCode == answer.pin);
    if (typeof user != "undefined") {
        console.log(`Successfuly Logged In ${user.name}`);
        mainScreen(user.balance);
    }
    else {
        console.log("you Enter Invalid PIN or Account Number");
    }
}
export default login;
