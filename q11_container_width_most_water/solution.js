/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0, start = 0, end = height.length-1;

    while(start<end) {
        let sum = Math.min(height[start], height[end])*(end-start);
        if(sum > max) {
            max = sum;
        }
        if(height[start] < height[end]) {
            start++;
        } else {
            end--;
        }
    }
    return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
