export class StudentGrade {
  constructor(_student, _firstGrade, _secondGrade, _frequency, _lastGrade) {
    Object.assign(this, _student);
    this.firstGrade = _firstGrade;
    this.secondGrade = _secondGrade;
    this.frequency = _frequency;
    this.lastGrade = _lastGrade;

  }
}