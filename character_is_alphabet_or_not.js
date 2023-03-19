function isAlphabet(ch) {
    if (ch.length !== 1) return "enter valid character";
    if ((ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90) || (ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122)) {
        return `${ch} is alphabet`;
    }
    return `${ch} is not an alphabet`;
}

console.log(isAlphabet('* '));