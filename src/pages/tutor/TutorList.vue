<script setup>

import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';
import { getTutors } from '../../services/tutors';
import TableView from '../../components/tableView.vue';


const tutorsData = ref([]);
const tutorColumns = [
  { label: 'ID', field:'id' },
  { label: 'Nome', field:'nome' },
  { label: 'Email', field:'email' },
  { label: 'Telefone', field:'telefone' },
  { label: 'CPF', field:'cpf' },
  { label: 'Endereço', field:'endereco' },
]
const router = useRouter();

onBeforeMount(async () => {
  tutorsData.value = await getTutors();
});

</script>

<template>

  <div class="q-ma-md">
    <h1 class="text-h5">Tutores</h1>
    <q-btn color="primary" label="Novo" @click="() => router.push('/tutor/novo')" />
  </div>

  <TableView :data="tutorsData" :columns="tutorColumns" />

</template>

<style scoped></style>
