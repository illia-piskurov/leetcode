function lengthOfLastWord(s: string): number {
    let len: number = 0;
    let flag: boolean = false;
    for (let i: number = s.length - 1; i >= 0; i--) {
        if (s[i] != ' ') {
            flag = true;
            len++;
        }
        if (s[i] == ' ' && flag) {
            break;
        }
    }
    return len;
};