<script setup>

import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';

import TutorsServices from '../../services/tutors';
import TableView from '../../components/TableView.vue';

const router = useRouter();

const tutorColumns = [
  { label: 'ID', field: 'id' },
  { label: 'Nome', field: 'nome' },
  { label: 'Email', field: 'email' },
  { label: 'Telefone', field: 'telefone' },
  { label: 'CPF', field: 'cpf' },
  { label: 'Endereço', field: 'endereco' },
];

const tutorsData = ref([]);

onBeforeMount(async () => {
  tutorsData.value = await TutorsServices.getTutors();
});

</script>

<template>

  <div class="q-ma-md q-px-lg">
    <div class="row items-center justify-between">
      <h1 class="text-h4 q-mr-lg">Tutores Cadastrados</h1>
      <q-btn class="q-px-lg" style="height:40px" outline color="primary"
      icon="add" label="Cadastrar Novo"
        @click="() => router.push('/tutor/novo')" />
    </div>

    <!-- Tabela com informacoes de tutores -->
    <TableView :data="tutorsData" :labels="tutorColumns" :onEditItem="(tutorId) => {
      router.push(`/tutor/editar/${tutorId}`);
    }" :onDeleteItem="async (id) => {
      tutorsData = await TutorsServices.deleteTutor(id);
    }" />

  </div>
</template>

<style scoped></style>
