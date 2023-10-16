class Solution {
    public boolean isPalindrome(String s) {
        var onlyLetter = new StringBuilder();
        for (var ch: s.toCharArray()) {
            if (Character.isLetter(ch) || Character.isDigit(ch)) {
                onlyLetter.append(Character.toLowerCase(ch));
            }
        }
        var len = onlyLetter.length();
        for (int i = 0; i < len / 2; i++) {
            if (onlyLetter.charAt(i) != onlyLetter.charAt(len - i - 1)) {
                return false;
            }
        }
        return true;
    }
}