<script setup>

import { ref } from 'vue';

const petForm = ref(
  {
    nome: '',
    sexo: '',
    especie: '',
    idade: '',
    peso: '',
    tutorId: '',
  },
);

</script>

<template>
  <q-page-container>
    <q-page>
      <q-card>
        <q-card-section>
          <h2>Cadastrar pet</h2>
        </q-card-section>

        <q-card-section>
          <q-form class="row">
            <q-input v-model="petForm.nome" label="Nome" class="col-3" outlined />
            <q-input v-model="petForm.especie" label="Especie" class="col-3" outlined />
            <q-input v-model="petForm.sexo" label="Sexo" class="col-3" outlined />
            <q-input v-model="petForm.idade" label="Idade" class="col-3" outlined />
            <q-input v-model="petForm.peso" label="Peso" class="col-3" outlined />
            <q-input v-model="petForm.tutorId" label="Tutor" class="col-3" outlined />
            <q-btn type="submit" label="Salvar" color="primary" />
          </q-form>
        </q-card-section>
      </q-card>
    </q-page>
  </q-page-container>

</template>

<style scoped></style>
