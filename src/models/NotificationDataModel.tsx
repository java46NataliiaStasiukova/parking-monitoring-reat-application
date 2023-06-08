

export type NotificationDataModel = {
    carNumber: number;
    email: String;
    name: String;
    driverId: number;
}

export function createNotificationData(carNumber: number, email: String,
    name: String, driverId: number){
        return {carNumber, email, name, driverId};
    }