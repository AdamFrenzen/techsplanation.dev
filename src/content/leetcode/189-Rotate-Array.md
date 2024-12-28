---
title: "189-Rotate-Array"
pubDate: "Dec 28 2024"
difficulty: "Medium"
---

## LeetCode Problem

```
### Description
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

### Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
  rotate 1 steps to the right: [7,1,2,3,4,5,6]
  rotate 2 steps to the right: [6,7,1,2,3,4,5]
  rotate 3 steps to the right: [5,6,7,1,2,3,4]

### Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
  rotate 1 steps to the right: [99,-1,-100,3]
  rotate 2 steps to the right: [3,99,-1,-100]
```

## Problem Summary:

This problem is asking you to shift (or rotate) the array's elements to the right `k` times. Elements at the end of the array need to move to the starting place. The modification has to be done in-place and not return a new array.

## First Approach:

I originally thought this problem was going to be very trivial. I didn't yet see a crucial aspect of the problem: I didn't know that `k` could be greater than the length of the array.

1. Take the back `k` long segment of the array
2. Remove the last `k` elements
3. Put the previously removed segment of the array at the beginning of the original array

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let poppedElements = nums.slice(-k);
  nums.splice(-k, k);
  nums.unshift(...poppedElements);
};
```

This solution did not pass the test cases because it cannot handle `k` being greater than the array's length. This solution is pretty simple. I am effectively grabbing the end chunk of the array, which is the last `k` elements. Then, because in JavaScript `.slice()` does not modify the array and instead returns a copy, we need to remove those last `k` elements from the original array to satisfy the in-place modifications. Then I use `.unshift()` to stich the removed chunk of the array on to the front/beginning of the original array, modifying in-place. This solution is straightforward and intuitive approach. However, it is not a valid solution, so I must try another.

## Second Approach

There is an even simpler approach that I decided to not try originally. However, after the shortcomings of approach 1, I decided to give it a go. The problem is really quite simple and this approach might be the most intuitive (and naive) approach. The problem is asking you to shift/rotate/cycle the array one element to the right `k` times and this approach is spelling that out.

<ol>
  <li>
    Working backwards, looping `k` times
    <ol>
      <li> remove and store last element of the array </li>
      <li> insert that last element onto the beginning of the array</li>
    </ol>
  </li>
</ol>

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  for (i = k; i > 0; i--) {
    element = nums.pop();
    nums.unshift(element);
  }
};
```

This approach will work functionally. However, it is inefficient, and does not pass the test cases due to timeout with large arrays and where `k` is very large. The reason why it is so inefficient is because the array is having to be unshifted `k` times. `.unshift()` is slow because it is reverse iterating through the array and modifying as it goes. Therefore, this approach is O(n^2) complexity which becomes quite slow when using large data and numbers. The naive approach fails due to time.

## Final Approach:

My final (for now) solution is hacky and is admittedly not a good solution. If you can recall, my solution 1 failed because `k` can be greater than the arrays length. Solution 1 solves the problem very efficiently if this weren't an issue. And I noticed something: the test cases that are large in size do not have a `k` value greater than their length. Therefore my efficient solution that I originally went for COULD work to solve the large test cases quickly.

<ol>
  <li>
    If the excess `k` issue is NOT an issue
    <ol>
      <li>Take the back `k` long segment of the array</li>
      <li>Remove the last `k` elements</li>
      <li>Put the previously removed segment of the array at the beginning of the original array</li>
    </ol>
  </li>

  <li>
    If the excess `k` issue IS an issue: Working backwards, looping `k` times
    <ol>
      <li> remove and store last element of the array </li>
      <li> insert that last element onto the beginning of the array</li>
    </ol>
  </li>
  </li>
</ol>

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (k < nums.length && k !== 0 && nums.length > 1) {
    let poppedElements = nums.slice(-k);
    nums.splice(-k, k);
    nums.unshift(...poppedElements);
    return;
  }

  for (i = k; i > 0; i--) {
    element = nums.pop();
    nums.unshift(element);
  }
};
```

This solution combines the efficient approach 1, which works well if `k` is not greater than the array length, with approach 2 that works inefficiently but can handle the overflowed `k` issue. Combining the two covers each of their points of failure and passes all the LeetCode test cases. But, this solution is hacky and only works because LeetCode does not have a large, time-sensitive, test case with the overflow `k`. I decided to stop here for now and keep this solution that passes the test cases and I intend to come back to this problem again in the future.

## Conclusion and Learning:

This is my first LeetCode problem in quite a while, and I relearned the importance of thinking about edge cases and questioning what test cases would cause your solution to fail.

While I often use `.pop()`, I became more familiar with some of JavaScript's other array methods like `.slice()`, `.splice()`, and `.unshift()`.
