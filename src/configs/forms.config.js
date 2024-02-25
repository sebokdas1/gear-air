const signUpForm = {
    name: {
        required: true,
        requiredMsg: "Name is required",
        minLength: 5,
        minLengthMsg: "Minimum 5 character",
        maxLength: 40,
        maxLengthMsg: "Maximum 40 characters",
    },
    email: {
        required: true,
        requiredMsg: "Email is required",
        minLength: 5,
        minLengthMsg: "Minimum 5 character",
        maxLength: 100,
        maxLengthMsg: "Maximum 100 characters",
    },
    password: {
        required: true,
        requiredMsg: "Password is required",
        minLength: 8,
        minLengthMsg: "Minimum 5 character",
        maxLength: 40,
        maxLengthMsg: "Maximum 40 characters",
    },
    tos: {
        required: true,
        requiredMsg: "You must agree"
    }
}

const recoveryForm = {
    code: {
        required: true,
        requiredMsg: "Confirmation code is required",
        minLength: 6,
        minLengthMsg: "Minimum 6 character",
        maxLength: 10,
        maxLengthMsg: "Maximum 10 characters",
        pattern: /^[0-9- ]{6-10}$/,
        patternMsg: "Invalid code"
    }
}

export { signUpForm, recoveryForm };