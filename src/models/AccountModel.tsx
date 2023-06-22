
export type AccountModel = {
    userName: String;
    password: String;
    roles: String[];
}

export function createAccount(userName: String, password: String, roles: String[]): AccountModel{
    return {userName, password, roles};
}