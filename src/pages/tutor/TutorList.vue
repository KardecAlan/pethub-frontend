<script setup>

import { formatarCpf } from 'src/utils/StringUtils';
import { onBeforeMount, ref } from 'vue';
import { api } from 'boot/axios';
import { useRouter } from 'vue-router';
import { Notify } from 'quasar';

const excluirTutor = async (id) => {
  try {
    await api.delete(`/tutors/${id}`);
    Notify.create({
      message: 'Tutor excluído com sucesso!',
      color: 'positive',
    });
  } catch (error) {
    Notify.create({
      message: 'Erro ao excluir tutor!',
      color: 'negative',
    });
  }
};
const tutorList = [
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
    name: 'telefone',
    label: 'Telefone',
    field: 'telefone',
    align: 'left',
  },
  {
    name: 'cpf',
    label: 'CPF',
    field: 'cpf',
    align: 'left',
    format: formatarCpf,
  },
  {
    name: 'actions',
    label: 'Ações',
    field: 'actions',
    align: 'left',
    sortable: false,
  },
];

const dadosTutor = ref([]);

const router = useRouter();

onBeforeMount(async () => {
  const response = await api.get('/tutors');
  dadosTutor.value = response.data.content;
});

</script>

<template>
      <q-card class="q-ma-md">
        <q-card-section>
          <p class="text-h5">Tutores</p>
          <q-btn
            color="primary"
            label="Novo"
            @click="() => router.push('/tutor/novo')"
          />
        </q-card-section>
        <q-card-section>
          <q-table
            :rows="dadosTutor"
            :columns="tutorList"
          >
            <template v-slot:body-cell-actions="props">
              <q-td :props="props">
                <q-btn
                  flat
                  icon="edit"
                  @click="() => router.push(`/tutor/${props.row.id}`)"
                />
                <q-btn
                  flat
                  icon="delete"
                  @click="() => excluirTutor(props.row.id)"
                />
              </q-td>
            </template>
          </q-table>
        </q-card-section>
      </q-card>
</template>

<style scoped>

</style>
