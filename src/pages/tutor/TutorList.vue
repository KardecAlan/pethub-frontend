<script setup>

import { onBeforeMount, ref, watch } from 'vue';
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
let a = ref(0);
onBeforeMount(async () => {
  tutorsData.value = await TutorsServices.getTutors();
});

watch(tutorsData, (value) => {
  console.log(value.length);

}, { deep: true, immediate: false });

</script>

<template>

  <div class="q-ma-md">
    <h1 class="text-h5">Tutores</h1>
    <q-btn color="primary" label="Novo" @click="() => router.push('/tutor/novo')" />

    <!-- Tabela com informacoes de tutores -->
    <TableView :data="tutorsData" :labels="tutorColumns" :onDeleteItem="async (id) => {
      tutorsData = await TutorsServices.deleteTutor(id);
    }" />

  </div>
</template>

<style scoped></style>
