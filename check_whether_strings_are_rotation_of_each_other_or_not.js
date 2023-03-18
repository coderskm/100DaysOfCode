function rotation(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    if (s1.length === s2.length && (s1 + s2).indexOf(s2) !== -1) return true;
    return false;
}

console.log(rotation("abCd", "cdAB"));