/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* plusOne(int* digits, int digitsSize, int* returnSize) {
    *returnSize = digitsSize + 1;
    int* result = (int*) malloc(*returnSize * sizeof(int));
    memcpy(result + 1, digits, digitsSize * sizeof(int));
    result[0] = 0;

    int i = *returnSize - 1;
    while(result[i] == 9) {
        result[i] = 0;
        i--;
    }
    result[i] += 1;
    if (result[0] == 0) {
        *returnSize -= 1;
        return result + 1;
    } 
    return result;
}
