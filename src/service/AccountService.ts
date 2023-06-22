import { AccountModel } from "../models/AccountModel";


export default interface AccountService {
    addAccount(account: AccountModel): String;
    deleteAccount(userName: String): String;
    updateAccount(account: AccountModel): String;
    hasAccount(userName: String): String;
    getAllAccounts(): AccountModel[];
    getAccounts(role: String): AccountModel[];
    getMaxRoles(): number;
}