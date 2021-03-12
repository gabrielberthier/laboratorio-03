export class StudentGrade {
  constructor(_student, _firstGrade, _secondGrade, _frequency, _lastGrade) {
    this.student = _student;
    this.firstGrade = _firstGrade;
    this.secondGrade = _secondGrade;
    this.lastGrade = _lastGrade;
    this.frequency = _frequency;
    Object.freeze(this);
  }

  asRowRegistry() {
    const { student, ...others } = this;
    return {
      name: student._name,
      ...others
    }
  }
}