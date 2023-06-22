
export type ImitatorAction = {
    prob: number;
    action: String;
}

export type ImitatorSubject = {
    prob: number;
    subject: String;
}

export const imitatorActions: ImitatorAction[] = [
    {prob: 80, action: 'nothing'},
    {prob: 90, action: 'add'},
    {prob: 95, action: 'update'},
    {prob: 100, action: 'remove'}
]

export const imitatorSubjects: ImitatorSubject[] = [
    {prob: 30, subject: 'car'},
    {prob: 60, subject: 'driver'},
    {prob: 90, subject: 'report'},
    {prob: 100, subject: 'zone'}
]