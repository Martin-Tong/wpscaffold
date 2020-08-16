function List(name, message, choices, defaultChoice, skip = false) {
    if (skip)
        return { [name]: defaultChoice };
    return {
        choices,
        message,
        name,
        type: "list",
        default: defaultChoice
    };
}
exports.List = List;

function Confirm(name, message, defaultChoice = true, skip = false) {
    if (skip)
        return { [name]: defaultChoice };
    return {
            default: defaultChoice,
            message,
            name,
            type: "confirm"
        };
}
exports.Confirm = Confirm;

function Input(name, message, defaultChoice, skip = false) {
    if (skip)
        return { [name]: defaultChoice };
    return {
            default: defaultChoice,
            message,
            name,
            type: "input"
        };
}
exports.Input = Input;
function InputValidate(name, message, cb, defaultChoice, skip) {
    if (skip)
        return { [name]: defaultChoice };
    const input = {
        message,
        name,
        type: "input",
        validate: cb
    };
    if (defaultChoice)
        input.default = defaultChoice;
    return input;
}
exports.InputValidate = InputValidate;