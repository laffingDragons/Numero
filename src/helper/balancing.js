const letterMapping = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 8,
    g: 3,
    h: 5,
    i: 1,
    j: 1,
    k: 2,
    l: 3,
    m: 4,
    n: 5,
    o: 7,
    p: 8,
    q: 1,
    r: 2,
    s: 3,
    t: 4,
    u: 6,
    v: 6,
    w: 6,
    x: 5,
    y: 1,
    z: 7,
};

export function nameToNumber(name) {
    const lowercaseName = name.toLowerCase(); // Convert name to lowercase for case insensitivity
    let result = '';
    for (let i = 0; i < lowercaseName.length; i++) {
        const letter = lowercaseName[i];
        if (letter === ' ') {
            result += ' '; // Add space directly to the result
        } else if (letter in letterMapping) {
            result += letterMapping[letter];
        }
    }
    // return result;
    const wholeNumbers = result.split(' ').map(numStr => parseInt(numStr, 10));
    
    const letterSum = wholeNumbers.map((number, index) => {
        const sum = String(number).split('').map(Number).reduce((acc, digit) => acc + digit, 0);
        return sum;
    });
    console.log('🚀___ ~ wholeNumbers_______ :', letterSum);

    return letterSum;
}

export function addAllNo (array) {
    const sum = array.reduce((total, num) => total + num, 0);
    const firstlastSum =array.length > 1 ? array[0] + array[array.length - 1] : array[0];
    return [sum, firstlastSum];
}


