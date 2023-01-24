import inquirer from "inquirer";
import cashWithdraw from "./cashWithdraw.js";
import cashDeposit from "./cashDeposit.js";
import transfer from "./transfer.js";
import utilityBills from "./utilityBills.js";
import chalk from "chalk";


    async function anotherTransaction(){
        const otherTrans = await inquirer.prompt([
            {
                name:"oTrans",
                type:"list",
                choices:["Yes","No"],
                message:"Do you want another Transaction?: "
            }
        ])
        return otherTrans.oTrans;
       
    }

    async function mainScreen(balance:number){
        do{
            const options = await inquirer.prompt([
                {
                    name:"menu",
                    type:"list",
                    choices:["Balance Inquiry","Cash Withdraw","Cash Deposit", "Transfer","Utility bills","Exit"],
                    message:"Please Select your Transaction"
                }
            ])
    
            switch (options.menu) {
                case "Balance Inquiry":
                    console.log(chalk.green(`Your Current balance is ${balance}`));
                    break;
                case "Cash Withdraw":
                    balance = await cashWithdraw(balance);
                    break;
                case "Cash Deposit":
                    balance = await cashDeposit(balance);
                    break;
                case "Transfer":
                    balance =await transfer(balance)
                    break;
                case "Utility bills":
                    balance =await utilityBills(balance)
                    break;
                case "Exit":
                    anotherTrans =  "No"
                    break;
            }
            if(options.menu ! == "Exit"){
                console.log(chalk.yellow(`Your Transaction is Succesfull your new balance is ${balance}`));
            var anotherTrans = await anotherTransaction();
            }
            if(anotherTrans !== "No"){
                console.log("Thankyou for using our services")
            }
        }
        while(anotherTrans !== "No")

    }

    export default mainScreen;