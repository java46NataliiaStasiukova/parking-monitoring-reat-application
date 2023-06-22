import { AccountModel } from "../models/AccountModel";
import AccountService from "./AccountService";


export default class AccountsServiceArray implements AccountService {
    
    accounts: Map<String, AccountModel> = new Map<String, AccountModel>();

    addAccount(account: AccountModel): String {
        let res = `account with username: ${account.userName} alredy exist`;
        if(!this.accounts.has(account.userName)){
            res = `account with username: ${account.userName} was added`;
            this.accounts.set(account.userName, account);
        }
        return res;
    }
    deleteAccount(userName: String): String {
        let res = `account with username: ${userName} not exist`;
        if(this.accounts.has(userName)){
            res = `account with username: ${userName} has been deleted`;
            this.accounts.delete(userName);
        }
        return res;
    }
    updateAccount(account: AccountModel): String {
        let res = `account with username: ${account.userName} not exist`;
        if(this.accounts.has(account.userName)){
            res = `account with username: ${account.userName} was updated`;
            this.accounts.set(account.userName, account);
        }
        return res;
    }
    hasAccount(userName: String): String {
        let res = `account with username: ${userName} not exist`;
        if(this.accounts.has(userName)){
            res = `account with username: ${userName} exist`;
        }
        return res;
    }
    getAllAccounts(): AccountModel[]{

        return Array.from(this.accounts.values());
    }
    getAccounts(role: String): AccountModel[] {
        let tmpAccounts = Array.from(this.accounts.values());
        return tmpAccounts.filter(acc => acc.roles.includes(role));
    }
    getMaxRoles(): number {
        let tmpAccounts = Array.from(this.accounts.values());
        return tmpAccounts.reduce((res, cur) => Math.max(cur.roles.length, res), 0);
    }
    
}