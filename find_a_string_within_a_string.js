function findStringInString(s1, s2) {
    if (s1.indexOf(s2) === -1) return "not present";
    return "present";
}

console.log(findStringInString("codezinger", "zinger"));