<script setup>

import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';

import TableListView from 'src/components/TableListView.vue';
import TutorsServices from '../../services/tutors';

const router = useRouter();

const tutorColumns = ref([]);
const tutorsData = ref([]);

onBeforeMount(async () => {
  tutorsData.value = await TutorsServices.getTutors();
  tutorColumns.value = Object.keys(tutorsData.value[0]);
});

</script>

<template>

  <div class="q-ma-md q-px-lg">
    <div class="row items-center justify-between">
      <h1 class="text-h4 q-mr-lg">Tutores Cadastrados</h1>
      <q-btn
        class="q-px-lg"
        style="height:40px"
        outline
        color="primary"
        icon="add"
        label="Cadastrar Novo"
        to="/tutores/novo"
      />
    </div>

    <!-- Tabela com informacoes de tutores -->
    <TableListView
      :data="tutorsData"
      :labels="tutorColumns"
      :onEditItem="(tutorId) => router.push(`/tutor/editar/${tutorId}`)"
      :onDeleteItem="async (id) => {
        tutorsData = await TutorsServices.deleteTutor(id);
      }"
    />

  </div>
</template>

<style scoped></style>
