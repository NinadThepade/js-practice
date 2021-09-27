import React from 'react';

function Page2() {
  return (
    <div>
      <h1>Reverse Integer</h1>
      <p>
      Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

      Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

      Example 1:

      Input: x = 123
      Output: 321
      Example 2:

      Input: x = -123
      Output: -321
      Example 3:

      Input: x = 120
      Output: 21
      Example 4:

      Input: x = 0
      Output: 0
      

      Constraints:

      {/* -231 <= x <= 231 - 1 */}
      </p>
      <h3>My Solution</h3>
      <p>
        {/* var reverse = function(x) {
          let res = parseInt(x.toString().split('').reverse().join(''));
            if(x < 0) {
                return res > Math.pow(2, 31) ? 0 : res * -1;
            } else {
                return res > Math.pow(2, 31) -1 ? 0 : res;
            }
        }; */}
      </p>
    </div>
  );
}

export default Page2;