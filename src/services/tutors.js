import mockedData from '../mocks/data.json';

async function getTutors() {
  return mockedData.tutors;
}

export {
  getTutors,
};
