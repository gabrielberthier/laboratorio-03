import { StudentGrade } from "../models/student-grade";
import { average, toApproved, toReproved } from "./screen-operations";

class ObserverResultable {

  constructor(element, callbackOnAdd, callbackOnRemove) {
    this._element = element;
    this._callbackOnAdd = callbackOnAdd;
    this._callbackOnRemove = callbackOnRemove;
  }
  /**
   * 
   * @param {StudentGrade} studentGrade 
   */
  onNotifyAdd(studentGrade, tFooterView) {
    this._callbackOnAdd(studentGrade, tFooterView, this._element);
  }

  /**
   * 
   * @param {StudentGrade} studentGrade 
   */
  onNotifyRemove(studentGrade, tFooterView) {
    this._callbackOnRemove(studentGrade, tFooterView, this._element);
  }
}


export class TFooterView {
  constructor() {
    this._observers = [];
    this.totalApproved = 0;
    this.totalReproved = 0;
    this.totalGrades = 0;
    this.average = 0.0;
    const elApproved = document.getElementById("aproveds");
    const elReproved = document.getElementById("reproveds");
    const elAverage = document.getElementById("average");
    this._observers.push(new ObserverResultable(elApproved, toApproved));
    this._observers.push(new ObserverResultable(elReproved, toReproved));
    this._observers.push(new ObserverResultable(elAverage, average));
  }

  addObserver(observerResultable) {
    this._observers.push(observerResultable);
  }

  removeObserver(observerResultable) {
    this._observers = this._observers.filter(subscriber => subscriber !== observerResultable);
  }

  notifyAdded(studentGrade) {
    this.average =
      this._observers.forEach(el => el.onNotifyAdd(studentGrade, this));
  }

  notifyRemoved(studentGrade) {
    this._observers.forEach(el => el.onNotifyRemove(studentGrade, this));
  }
}