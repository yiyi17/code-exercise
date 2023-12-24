// 搜索插入位置

// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 请必须使用时间复杂度为 O(log n) 的算法。

// 示例 1:

// 输入: nums = [1,3,5,6], target = 5
// 输出: 2

// 双指针
var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    if (nums[left] === target) return left;
    if (nums[left] < target) {
      left++;
    }
    if (nums[right] > target) {
      right--;
    }
  }
  left;
  right;
  return left;
};

var searchInsert = function (nums, target) {
  const n = nums.length;
  let left = 0,
    right = n - 1,
    ans = n;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    mid;
    if (target <= nums[mid]) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans;
};

// 二分查找;
// 二分查找所需的时间复杂度为 O(log⁡n)O(\log n)O(logn)
var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1,
    mid = right;
  if (nums[right] < target) return right + 1;

  while (left <= right) {
    mid = Math.floor((right + left) / 2);
    mid;
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      left++;
    }
    if (nums[mid] > target) {
      right--;
    }
  }

  return mid;
};

(nums = [1, 3, 5, 6]), (target = 7); // 4
(nums = [1, 3, 5, 6]), (target = 3); // 1
(nums = [1, 3, 5, 6]), (target = 4); // 2

console.log(searchInsert(nums, target));
