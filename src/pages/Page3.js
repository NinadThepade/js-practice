import React from 'react';

function Page3() {
  return (
    <div>
      <h1>Palindrome Number</h1>
      <p>
        Given an integer x, return true if x is palindrome integer.
        An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
        
        Example 1:

        Input: x = 121
        Output: true
        Example 2:

        Input: x = -121
        Output: false
        Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
        Example 3:

        Input: x = 10
        Output: false
        Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
        Example 4:

        Input: x = -101
        Output: false
        

        Constraints:

        {/* -231 <= x <= 231 - 1 */}
      </p>
      <h3>My Solution</h3>
      <p>
        {/* var isPalindrome = function(x) {
            let isNegative = x < 0;
            if(!isNegative) {
                let res = parseInt(x.toString().split('').reverse().join(''));
                return res === x;
            } else {
                return false;
            }
        }; */}
      </p>
    </div>
  );
}

export default Page3;