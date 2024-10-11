import mockedData from '../mocks/pets.json';

class PetsData {
  constructor() {
    this.pets = mockedData.pets;
  }

  async getPets() {
    return this.pets;
  }

  async getById(id) {
    for (let i = 0; i < this.pets.length; i++) {
      const pet = this.pets[i];

      if (pet.id.toString() === id.toString()) {
        return pet;
      }
    }

    throw new Error('Nenhum pet foi encontrado');
  }

  async createPet(petData) {
    // VERIFICA SE O pet JA ESTA CADASTRADO
    if (!this.hasPet()) {
      throw new Error('pet já cadastrado');
    }

    this.pets.push({
      id: Math.random().toString(),
      ...petData,
    });
  }

  async savePet(id, petData) {
    for (let i = 0; i < this.pets.length; i++) {
      const pet = this.pets[i];
      if (pet.id.toString() === id.toString()) {
        const newData = { id, ...petData };
        this.pets[i] = newData;
        return;
      }
    }

    throw new Error('Pet não cadastrado');
  }

  async deletePet(id) {
    const newData = this.pets.filter((pet) => pet.id !== id);
    this.pets = [...newData];
    return this.pets;
  }

  async hasPet(petCpf) {
    for (let i = 0; i < this.pets.length; i++) {
      const pet = this.pets[i];
      if (petCpf === pet.cpf) {
        return true;
      }
    }

    return false;
  }
}

export default new PetsData();
