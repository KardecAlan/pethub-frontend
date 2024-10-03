<script setup>

import { ref, onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import TutorsServices from '../../services/tutors';

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

/* LIFECYCLE HOOKS  */
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

</script>

<template>
  <div class="q-pa-lg">

    <p class="text-h5">{{ isEditMode? 'Editar Dados de ': 'Cadastrar' }} Tutor</p>
    <q-form @submit="onSumbit" class="">
      <div class="row q-gutter-x-sm">
        <q-input v-model="formFields.nome" label="Nome" class="col" outlined />
        <q-input v-model="formFields.email" label="Email" class="col" outlined />
      </div>

      <div class="row justify-between q-mt-sm q-gutter-x-sm">
        <q-input v-model="formFields.telefone" label="Telefone" class="col" outlined />
        <q-input v-model="formFields.endereco" label="Endereço" class="col" outlined />
        <q-input v-model="formFields.cpf" label="CPF" class="col" outlined />
      </div>

      <div class="q-mt-xl q-ml-auto row">
        <q-btn class="q-mr-sm col-2 q-py-sm" type="submit" label="Salvar" color="primary" />
        <q-btn class="q-mr-sm col-2 q-py-sm" color="primary" outline label="Voltar"
          @click="() => router.push('/tutor')" />
      </div>
    </q-form>

  </div>
</template>

<style scoped></style>
