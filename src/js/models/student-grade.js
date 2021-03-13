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
    const { student, approved, ...others } = this;
    return {
      name: student._name,
      ...others,
      situation: approved ? "Aprovado" : "Reprovado",
    }
  }

  get average() {
    const firstGrade = parseFloat(this.firstGrade);
    const secondGrade = parseFloat(this.secondGrade);
    const finalGrade = parseFloat(this.lastGrade);
    const average1 = (firstGrade + secondGrade) / 2;
    if (average1 >= 70 || average1 < 30) {
      return average1;
    }
    return ((average1 + finalGrade) / 2);
  }

  get approved() {
    const frequency = parseFloat(this.frequency);
    const avg = this.average;

    if (frequency < 75 || avg < 30) {
      return false;
    }
    else if (avg >= 70) {
      return true;
    }
    return avg > 50;
  }
}