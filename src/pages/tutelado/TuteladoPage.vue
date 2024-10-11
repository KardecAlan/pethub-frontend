<script setup>

import { onBeforeMount, ref } from 'vue';
import { api } from 'boot/axios';
import { useRouter } from 'vue-router';

const tuteladoList = [
  {
    name: 'id',
    label: 'ID',
    field: 'id',
    align: 'left',
  },
  {
    name: 'nome',
    label: 'Nome',
    field: 'nome',
    align: 'left',
  },
  {
    name: 'sexo',
    label: 'Sexo',
    field: 'sexo',
    align: 'left',
  },
  {
    name: 'especie',
    label: 'Especie',
    field: 'especie',
    align: 'left',
  },
  {
    name: 'idade',
    label: 'Idade',
    field: 'idade',
    align: 'left',
  },
  {
    name: 'peso',
    label: 'Peso',
    field: 'peso',
    align: 'left',
  },
  {
    name: 'tutorNome',
    label: 'Tutor',
    field: 'tutorNome',
    align: 'left',
  },
];

const dadosTutelado = ref([]);

const router = useRouter();

onBeforeMount(async () => {
  const response = await api.get('/tutelados');
  dadosTutelado.value = response.data.content;
});

</script>

<template>
  <q-page-container>
    <q-page>
      <q-card>
        <q-card-section>
          Tutelado
        </q-card-section>

        <q-card-section>
          <q-btn
            color="primary"
            label="Novo"
            @click="() => router.push('/tutelado/novo')"
          />
        </q-card-section>

        <q-card-section>
          <q-table
            :rows="dadosTutelado"
            :columns="tuteladoList"
          />
        </q-card-section>
      </q-card>
    </q-page>
  </q-page-container>
</template>

<style scoped>

</style>
