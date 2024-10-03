import mockedData from '../mocks/data.json';

class TutorsData {
  constructor() {
    this.tutors = mockedData.tutors;
  }

  async getTutors() {
    return this.tutors;
  }

  async getById(id) {
    for (const tutor of this.tutors) {
      if (tutor.id === id) {
        return tutor;
      }
    }

    throw new Error('Nenhum Tutor Foi Encontrado');
  }

  async deleteTutor(id) {
    const newData = this.tutors.filter((tutor) => tutor.id !== id);
    this.tutors = [...newData];
    return this.tutors;
  }
}

export default new TutorsData();
