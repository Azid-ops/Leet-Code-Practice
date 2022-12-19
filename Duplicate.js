###Question:1
Return True if duplicate data is found, else return false.

Time and Memory Consumed:
Time:9ms
Memory:48.3MB

Answer:
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) { 
    let count = 0;
    for(let i = 0; i <= nums.length - 1; i++)
    {
        for(let j = i + 1; j < nums.length; j++)
        {
            if(nums[i] === nums[j])
            {
                count++;
            }
        }
    }
    if(count === 0)
    {
        return false;
    }
    else
    {
        return true;
    }
};
