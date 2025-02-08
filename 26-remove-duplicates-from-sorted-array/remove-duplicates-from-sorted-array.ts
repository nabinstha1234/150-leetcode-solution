function removeDuplicates(nums: number[]): number {
    let val;
    let count=0;
    for(let i=0;i<nums.length;i++){
         if(nums[i]!==val){
            nums[count]=nums[i];
            count++;
            val= nums[i];
         }
    }
    return count;
};