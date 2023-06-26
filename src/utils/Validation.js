
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isValidEmail = (email) => {
    return emailRegex.test(email);
}


const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

const isValidPhone = (phoneNumber) => {
    phoneRegex.test(phoneNumber);
}

const passwordRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
/*  At least one uppercase letter
    At least one lowercase letter
    At least one digit
    At least one special character from the set [@ $ ! % * ? &]
    Minimum length of 8 characters                                  */

const isValidPassword = (password) => {
    passwordRegex.test(password);
}

const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
// Alpha-Numerics only
// 3-20 characters

const isValidUsername = (username) => {
    usernameRegex.test(username);
}

export { 
    isValidEmail, 
    isValidPhone,
    isValidPassword,
    isValidUsername,
}; 