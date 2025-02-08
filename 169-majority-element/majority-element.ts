function majorityElement(nums: number[]): number {
    let el = nums[0];
    let count =1;
    for(let i=1;i<nums.length;i++){
        if(count===0){
            el = nums[i];
        }
        if(el===nums[i]){
            count++;
        }
        else{
            count--;
        }
    }
    return el;
};