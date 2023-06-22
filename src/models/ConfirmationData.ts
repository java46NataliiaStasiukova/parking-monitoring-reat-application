type ConfirmationData = {
    title: String;
    content: String;
    confirmHandler: (flag: boolean) => void;
}

export default ConfirmationData;