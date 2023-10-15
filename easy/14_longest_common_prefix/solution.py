class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        preffix: str = ''
        min_w: str = min(strs, key=len)
        for i in range(len(min_w)):
            if all([ch[i] == min_w[i] for ch in strs]):
                preffix += min_w[i]
            else:
                break

        return preffix