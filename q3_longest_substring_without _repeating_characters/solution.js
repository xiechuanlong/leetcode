var lengthOfLongestSubstring = function(s) {
    let query = [], maxLen = 0;
    for(let i = 0; i < s.length; i++) {
        let index = query.indexOf(s[i]);
        if(index >=0) {
            while(query.shift()!=s[i]);
            query.push(s[i])
        } else {
            query.push(s[i]);
            if(query.length > maxLen) {
                maxLen = query.length;
            }
        }
    }
    return maxLen;
};

console.log(lengthOfLongestSubstring('aab'));