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

  async createTutor(tutorData) {
    // VERIFICA SE O TUTOR JA ESTA CADASTRADO
    this.tutors.forEach(tutor => {
      
      if (tutorData.cpf === tutor.cpf) {
        console.log(tutorData.cpf);
        console.log(tutor.cpf);
        
        throw new Error("Tutor já cadastrado");
      }
    });
  
    this.tutors.push({
      id: Math.random().toString(),
      ...tutorData,
    });

  }

  async deleteTutor(id) {
    const newData = this.tutors.filter((tutor) => tutor.id !== id);
    this.tutors = [...newData];
    return this.tutors;
  }
}

export default new TutorsData();
