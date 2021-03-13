/**
 * 
 * @param {StudentGrade} s 
 * @param {TFooterView} footerView 
 */
export function toApproved(s, footerView, element) {
  if (s.approved) {
    footerView.totalApproved += 1;
    element.textContent = footerView.totalApproved;
  }
}

/**
* 
* @param {StudentGrade} s 
* @param {TFooterView} footerView 
*/
export function toReproved(s, footerView, element) {
  if (!s.approved) {
    footerView.totalReproved += 1;
    element.textContent = footerView.totalReproved;
  }
}

/**
* 
* @param {StudentGrade} s 
* @param {TFooterView} footerView 
*/
export function average(s, footerView, element) {
  const totalStudents = footerView.totalReproved + footerView.totalApproved;
  footerView.totalGrades += s.average;
  footerView.average = footerView.totalGrades / totalStudents;
  element.textContent = footerView.average;
}