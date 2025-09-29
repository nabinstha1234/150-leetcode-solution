function lengthOfLongestSubstring(s: string): number {
    let maxLength =0;
    let charSet = new Set();
    let left =0;
    for(let i=0;i<s.length; i++){
     if(!charSet.has(s[i])){
        charSet.add(s[i]);
        maxLength = Math.max(maxLength, i - left+1)
     }else{
        while(charSet.has(s[i])){
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[i])
     }
    }
    return maxLength;
};