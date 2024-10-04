<script setup>

import { ref, onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import TutorsServices from '../../services/tutors';
import { showPositiveToast } from '../../utils/ToastMessage';

const formFields = ref(
  {
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    endereco: '',
  },
);

const router = useRouter();
const route = useRoute();

const isEditMode = route.path.search('editar') !== -1;

onBeforeMount(async () => {
  // CARREGA DADOS PARA EDITAR
  if (isEditMode) {
    try {
      const id = Number.parseInt(route.params.id, 10);
      const data = await TutorsServices.getById(id);

      formFields.value.nome = data.nome;
      formFields.value.cpf = data.cpf;
      formFields.value.email = data.email;
      formFields.value.endereco = data.endereco;
      formFields.value.telefone = data.telefone;
    } catch (error) {
      /* nothing */
    }
  }
});

const createTutor = async () => {
  try {
    await TutorsServices.createTutor(formFields.value);
    showPositiveToast('Tutor cadastrado com sucesso!');
    router.push('/tutor');
  } catch (error) {
    /* console.log(error); */
  }
};

const saveTutor = async () => { };

const onSubmit = () => {
  if (isEditMode) {
    return saveTutor();
  }
  return createTutor();
};

</script>

<template>
  <div class="q-ma-md q-px-lg">

    <p class="text-h4 q-mb-lg">{{ isEditMode ? 'Editar Dados de ' : 'Cadastrar' }} Tutor</p>

    <q-form @submit="onSubmit">

      <q-input required v-model="formFields.nome" label="Nome" class="col" outlined />

      <div class="row q-gutter-x-sm  q-mt-sm">
        <q-input required v-model="formFields.email" label="Email" class="col" outlined />

        <q-input required v-model="formFields.telefone" label="Telefone" placeholder="DDD + numero"
        class="col" outlined />
      </div>

      <div class="row justify-between q-mt-sm q-gutter-x-sm">

        <q-input required v-model="formFields.endereco" label="Endereço" class="col" outlined />

        <q-input required v-model="formFields.cpf" label="CPF" placeholder="000.000.000-00"
        class="col" outlined />

      </div>

      <div class="q-mt-xl q-ml-auto row">
        <q-btn class="q-mr-sm col-2 q-py-sm" type="submit" label="Salvar" color="primary" />
        <q-btn class="q-mr-sm col-2 q-py-sm" color="primary" outline label="Cancelar"
          @click="() => router.push('/tutor')" />
      </div>
    </q-form>

  </div>
</template>

<style scoped></style>
