import dayjs from 'dayjs';

export const calcDriver = ({ userInfo }) => {
    if (!userInfo?.birthDate) return '?';

    const dateString = dayjs(userInfo?.birthDate).format('DD/MM/YYYY');

    return `${(+dateString[0]) + (+dateString[1])}/${(dateString[0]) + (dateString[1])}`;
}

export const calcConductor = ({ userInfo }) => {
    if (!userInfo?.birthDate) return '?';


    const birthdate = dayjs(userInfo?.birthDate).format('DD/MM/YYYY');

    // Step 1: Remove non-numeric characters
    const numericString = birthdate.replace(/\D/g, '');

    // Step 2: Convert string to array of digits
    const digitArray = numericString.split('').map(Number); // Result: [2, 3, 1, 1, 1, 9, 9, 5]

    // Step 3: Sum up all digits using reduce
    const sum = digitArray.reduce((acc, digit) => acc + digit, 0); // Result: 31

    const singleDigitSum = numericString.split('').map(Number).reduce((acc, digit) => acc + digit, 0); // Calculate initial sum

    const output = addDigitsUntilSingle(singleDigitSum);

    return `${output}/${sum}`;
}

export const calcKua = ({ userInfo }) => {
    if (!userInfo?.birthDate) return '?';

    const birthdate = dayjs(userInfo?.birthDate).format('DD/MM/YYYY');
    const gender = userInfo.gender

    const numericString = birthdate.replace(/\D/g, '').slice(-4);

    const digitArray = numericString.split('').map(Number);

    const input = digitArray.reduce((acc, digit) => acc + digit, 0); // Result: 24


    let sum = addDigitsUntilSingle(input);

    if (gender === "male") {
        sum = 11 - sum; // Subtract 11 for male
    } else if (gender === "female") {
        sum = 4 + sum; // Add 4 for female
    } else {
        return "?"; // Return "?" for other genders
    }

    sum = addDigitsUntilSingle(sum);

    return `${sum}/${input}`;
}


export const addDigitsUntilSingle = (num) => {
    // Function to calculate the sum of digits in a number
    const sumOfDigits = (n) => String(n).split('').reduce((acc, digit) => acc + parseInt(digit), 0);

    let result = num;

    // Continue summing digits until the result is a single digit
    while (result >= 10) {
        result = sumOfDigits(result);
    }

    return result;
}


//   Weightages calculating function 

export const calculateWeightage = (input) => {

    if(input === '?') return input;

    let [numerator, denominator] = input.split('/');

    numerator = numerator.replace(/0/g, '');
    
    if (denominator.includes(0)) {


        if (denominator.includes(numerator)) return `${numerator} = 100%`;
        
        return `${numerator} = 50%, ${denominator[0]} = 50%`;
    }


    if (denominator.includes(numerator)) {

        if (countOccurrences(denominator, numerator) >= 2) return `${numerator} = 100%`;

        return `${numerator} = 80%, ${denominator[0] === numerator ? denominator[1] : denominator[0]} = 20%`;

    } else if (denominator[0] === denominator[1]) return `${numerator} = 50%, ${denominator[0]} = 50%`;


    if (denominator.length === 1) return `${numerator} = 50%, ${denominator[0]} = 50%`;

    return `${numerator} = 50%, ${denominator[0]} = 30%, ${denominator[1]} = 20%,`;
}

export const countOccurrences = (string, char) => {
    return string.split(char).length - 1;
}