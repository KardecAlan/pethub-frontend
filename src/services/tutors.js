import mockedData from '../mocks/tutors.json';

class TutorsData {
  constructor() {
    this.tutors = mockedData.tutors;
  }

  async getTutors() {
    return this.tutors;
  }

  async getById(id) {
    for (let i = 0; i < this.tutors.length; i++) {
      const tutor = this.tutors[i];

      if (tutor.id.toString() === id.toString()) {
        return tutor;
      }
    }

    throw new Error('Nenhum Tutor Foi Encontrado');
  }

  async createTutor(tutorData) {
    // VERIFICA SE O TUTOR JA ESTA CADASTRADO
    if (!this.hasTutor()) {
      throw new Error('Tutor já cadastrado');
    }

    this.tutors.push({
      id: Math.random().toString(),
      ...tutorData,
    });
  }

  async saveTutor(id, tutorData) {
    for (let i = 0; i < this.tutors.length; i++) {
      const tutor = this.tutors[i];
      if (tutor.id.toString() === id.toString()) {
        const newData = { id, ...tutorData };
        this.tutors[i] = newData;
        return;
      }
    }

    throw new Error('Tutor não cadastrado');
  }

  async deleteTutor(id) {
    const newData = this.tutors.filter((tutor) => tutor.id !== id);
    this.tutors = [...newData];
    return this.tutors;
  }

  async hasTutor(tutorCpf) {
    for (let i = 0; i < this.tutors.length; i++) {
      const tutor = this.tutors[i];
      if (tutorCpf === tutor.cpf) {
        return true;
      }
    }

    return false;
  }
}

export default new TutorsData();
