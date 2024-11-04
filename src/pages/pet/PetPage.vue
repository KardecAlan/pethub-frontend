<script setup>

import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';

import TableListView from 'src/components/TableListView.vue';
import PetsServices from '../../services/pets';

const router = useRouter();

const petColumns = ref([]);
const petsData = ref([]);

onBeforeMount(async () => {
  petsData.value = await PetsServices.getPets();
  petColumns.value = Object.keys(petsData.value[0]);
});

</script>

<template>

  <div class="q-ma-md q-px-lg">
    <div class="row items-center justify-between">
      <h1 class="text-h4 q-mr-lg">Pets Cadastrados</h1>
      <q-btn
        class="q-px-lg"
        style="height:40px"
        outline
        color="primary"
        icon="add"
        label="Cadastrar Novo"
        to="/pets/novo"
      />
    </div>

    <!-- Tabela com informacoes de petes -->
    <TableListView
      :data="petsData"
      :labels="petColumns"
      :onEditItem="(petId) => router.push(`/pet/editar/${petId}`)"
      :onDeleteItem="async (id) => {
        petsData = await PetsServices.deletePet(id);
      }"
    />

  </div>
</template>

<style scoped></style>
