function shortcut(str1, str2) {
    // If either string is empty, return empty string
    if (!str1 || !str2) {
        return '';
    }
    // Return first character of each string combined
    return str1[0] + str2[0];
}

// Examples
console.log(shortcut("Amnesty", "International")); // 'AI'
console.log(shortcut("Hello", "world"));           // 'Hw'
console.log(shortcut("", "International"));        // ''
console.log(shortcut("Amnesty", ""));               // ''


// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
