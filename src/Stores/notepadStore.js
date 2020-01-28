import { observable, action, computed } from "mobx";

export class NotepadsStore {
  @observable subjects = [
    "Math",
    "History",
    "Citizenship",
    "Literture",
    "Physics",
    "Geography"
  ];
  @observable notepads = [
    { subject: "Math", date: new Date(), id: 1, text: "" },
    { subject: "History", date: new Date(), id: 2, text: "" },
    { subject: "Citizenship", date: new Date(), id: 3, text: "lorem ipsum" },
    { subject: "Literture", date: new Date(), id: 4, text: "sin dolor" },
    { subject: "Physics", date: new Date(), id: 5, text: "lorem ipsum" },
    { subject: "Geography", date: new Date(), id: 6, text: "sin dolor" }
  ];
  @observable currentSubject = "";
  @computed get filteredNotepads() {
    return this.currentSubject
      ? this.notepads.filter(n => n.subject === this.currentSubject)
      : [];
  }

  @action setCurrentSubject(subject) {
    this.currentSubject = subject;
  }
  @action updateNotepad(subject, text, id) {
    const notepadIndex = this.notepads.findIndex(n => n.id === id);
    this.notepads[notepadIndex].subject = subject;
    this.notepads[notepadIndex].text = text;
  }
}

export default NotepadsStore;