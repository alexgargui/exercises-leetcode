/**
 * Problem: Employee importance
 * Link to problem: https://leetcode.com/problems/employee-importance
 * Coder: alexgargui
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
const GetImportance = (employees, id) => {
  let firstEmployee = employees.find((e) => e.id === id);
  const ids = [];
  let maximumImportance = firstEmployee.importance;
  if (firstEmployee.subordinates.length > 0)
      ids.push(...firstEmployee.subordinates);
  while (ids.length > 0) {
      let currentId = ids.pop();
      let employee = employees.find((e) => e.id === currentId);
      maximumImportance += employee.importance;
      if (employee.subordinates.length > 0)
          ids.push(...employee.subordinates);
  }
  return maximumImportance;
};