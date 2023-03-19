function upperOrLowerOrSpecialChars(ch) {
    if (ch.length !== 1) return "enter valid character";
    else if (ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90) return `${ch} is uppercase`;
    else if (ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122) return `${ch} is lowercase`;
    else return `${ch} is special character`;
}

console.log(upperOrLowerOrSpecialChars('0'))