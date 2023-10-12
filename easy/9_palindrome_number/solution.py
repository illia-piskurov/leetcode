class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        xstr = str(x)
        xlen = len(xstr)
        result = True
        for i in range(0, xlen//2):
            if (xstr[i] != xstr[-(i+1)]):
                result = False
                break
        return result

# or

class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False

        temp = x
        rev = 0

        while temp:
            digit = temp % 10
            rev = rev * 10 + digit
            temp = temp // 10

        return rev == x