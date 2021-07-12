/**
 * Problem: Asteroid collision
 * Link to problem: https://leetcode.com/problems/asteroid-collision
 * Coder: alexgargui
 * @param {number[]} asteroids
 * @return {number[]}
 */
 const asteroidCollision = (asteroids) => {
  let i = 0;
  let collision = false;
  while (i < (asteroids.length - 1)) {
      if (asteroids[i] > 0) {
          if (asteroids[i + 1] < 0) {
              if (Math.abs(asteroids[i]) > Math.abs(asteroids[i + 1])) {
                  asteroids.splice(i + 1, 1);
              } else if (Math.abs(asteroids[i]) < Math.abs(asteroids[i + 1])) {
                  asteroids.splice(i, 1);
              } else {
                  asteroids.splice(i, 2);
              }
              collision = true;
          }
      }
      if (collision) i = 0;
      else i++;
      collision = false;
  }
  return asteroids;
};