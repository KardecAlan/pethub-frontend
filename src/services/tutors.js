import mockedData from '../mocks/data.json';

class TutorsData {
  constructor() {
    this.data = mockedData.tutors;
  }

  async getTutors() {
    return this.data;
  }

  async deleteTutor(id) {
    const newData = this.data.filter((tutor) => tutor.id !== id);
    this.data = [...newData];
    return this.data;
  }
}

export default new TutorsData();
