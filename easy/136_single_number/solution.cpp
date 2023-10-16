class Solution {
public:
    int singleNumber(vector<int>& nums) {
        unordered_map<int, int> num_counts;
        for (auto num: nums) {
            num_counts[num]++;
        }
        for (auto pair: num_counts) {
            if (pair.second == 1) {
                return pair.first;
            }
        }
        return -1;
    }
};