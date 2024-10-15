<script setup>

import { ref, onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import petsServices from '../../services/pets';
import { showPositiveToast, showNegativeToast } from '../../utils/ToastMessage';

const formFields = ref(
  {
    nome: '',
    especie: '',
    sexo: '',
    idade: '1',
    peso: '',
  },
);

const router = useRouter();
const route = useRoute();

const isEditMode = route.path.search('editar') !== -1;
const petId = route.params.id;

onBeforeMount(async () => {
  // CARREGA DADOS PARA EDITAR
  if (isEditMode) {
    try {
      const data = await petsServices.getById(petId);

      formFields.value.nome = data.nome;
      formFields.value.especie = data.especie;
      formFields.value.sexo = data.sexo;
      formFields.value.idade = data.idade;
      formFields.value.peso = data.peso;
    } catch (error) {
      /* nothing */
    }
  }
});

const createPet = async () => {
  try {
    await petsServices.createPet(formFields.value);
    showPositiveToast('pet cadastrado com sucesso!');
    router.push('/pet');
  } catch (error) {
    showNegativeToast('pet informado já está cadastrado!');
  }
};

const savePet = async () => {
  try {
    await petsServices.savePet(petId, formFields.value);
    showPositiveToast('Dados salvos com sucesso!');
    router.push('/pet');
  } catch (error) {
    showNegativeToast('Não é possivel salvar os dados no momento!');
  }
};

const onSubmit = () => {
  if (isEditMode) {
    return savePet();
  }
  return createPet();
};

</script>

<template>
  <div class="q-ma-md q-px-lg q-pr-xl q-mr-xl">

    <p class="text-h4 q-mb-lg">{{ isEditMode ? 'Editar Dados de ' : 'Cadastrar' }} pet</p>

    <q-form @submit="onSubmit">
      <div class="row q-gutter-x-sm q-mt-sm q-pr-xl q-mr-xl">
        <!-- Nome -->
        <q-input required v-model="formFields.nome" label="Nome" class="col" outlined />
        <!-- Especie -->
        <q-select
          required
          v-model="formFields.especie"
          label="Especie"
          class="col"
          outlined
          :options="['Cachorro', 'Gato', 'Hamster', 'Coelho', 'Twister']"
        />
      </div>
      <div class="row q-gutter-x-sm  q-mt-sm q-pr-xl q-mr-xl">
        <!-- Idade -->
        <q-input
          type="number"
          min="1"
          required
          v-model="formFields.idade"
          label="Idade (Meses)"
          class="col"
          outlined
        />
        <!-- Sexo -->
        <q-select
          required
          v-model="formFields.sexo"
          label="Sexo"
          class="col"
          outlined
          :options="['M', 'F']"
        />
        <!-- Peso -->
        <q-input
          required
          type="number"
          v-model="formFields.peso"
          label="Peso (Kg)"
          class="col"
          outlined />
      </div>

      <!--Form Buttons -->
      <div class="q-mt-xl q-ml-auto row">
        <q-btn class="q-mr-sm col-2 q-py-sm" type="submit" label="Salvar" color="primary" />
        <q-btn class="q-mr-sm col-2 q-py-sm" color="primary" outline label="Cancelar"
          @click="() => router.back()" />
      </div>
    </q-form>

  </div>
</template>

<style scoped></style>
