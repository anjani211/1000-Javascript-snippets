function two_sum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const compl = target - nums[i];
    if (map.has(compl)) {
      return [i, map.get(compl)];
    } else {
      map.set(nums[i], i);
    }
  }
}
