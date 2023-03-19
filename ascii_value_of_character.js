function findASCII(ch) {
    if (ch.length !== 1) return 'enter valid character';
    let ascii = ch.charCodeAt(0);
    return `${ch} ASCII value is :- ${ascii}`;
}

console.log(findASCII('i'))