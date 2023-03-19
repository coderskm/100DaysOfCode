function vowelOrConsonant(ch) {
    if (ch.length !== 1) return "enter valid character";
    if (ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U' || ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') return `${ch} is vowel`;
    return `${ch} is consonant`;
}

console.log(vowelOrConsonant('r'));