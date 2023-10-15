class Solution:
    def isValid(self, s: str) -> bool:
        par = {
            '{': '}',
            '[': ']',
            '(': ')',

        }
        stack = []
        for c in s:
            if c in par:
                stack.append(c)
            else:
                if len(stack) == 0 or not c == par[stack.pop()]:
                    return False
        
        return len(stack) == 0


sol = Solution()
print(sol.isValid('(}'))
