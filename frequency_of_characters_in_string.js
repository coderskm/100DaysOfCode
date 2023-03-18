function frequency(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++){
        if (str[i] === " "||str[i]==="") continue;
        else if (!obj[str[i]]) obj[str[i]] = 1;
        else obj[str[i]] += 1;
    }
    return obj;
}

console.log(frequency("return of jedi"))