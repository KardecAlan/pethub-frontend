<script setup>

import { ref, onBeforeMount, onMounted } from 'vue';
import { api } from 'boot/axios';
import { Notify } from 'quasar';
import { useRouter, useRoute } from 'vue-router';

const tutorForm = ref(
  {
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    endereco: {
      cep: '',
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: '',
    },
  },
);

const router = useRouter();
const route = useRoute();

const acao = ref('Cadastrar');
const tutorId = route.params.id;

async function findById(id) {
  if (id) {
    acao.value = 'Alterar';
    const response = await api.get(`/tutors/${id}`);
    tutorForm.value = {
      ...response.data,
      endereco: response.data.endereco == null ? {
        cep: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: '',
      } : response.data.endereco,
    };
  }
}

const cadatrarTutor = async () => {
  try {
    await api.post('/tutors', tutorForm.value);
    Notify.create({
      message: 'Tutor cadastrado com sucesso!',
      color: 'positive',
    });
  } catch (error) {
    Notify.create({
      message: 'Erro ao cadastrar tutor!',
      color: 'negative',
    });
  }
};
const alterarTutor = async () => {
  try {
    await api.put(`/tutors/${tutorForm.value.id}`, tutorForm.value);
    Notify.create({
      message: 'Tutor alterado com sucesso!',
      color: 'positive',
    });
  } catch (error) {
    Notify.create({
      message: 'Erro ao alterar tutor!',
      color: 'negative',
    });
  }
};

const onSumbit = () => {
  if (acao.value === 'Cadastrar') {
    cadatrarTutor();
  } else {
    alterarTutor();
  }
};

onBeforeMount(async () => {
  if (route.params.id) {
    acao.value = 'Alterar';
    const { data } = await api.get(`/tutors/${route.params.id}`);
    tutorForm.value = data;
  }
});

onMounted(() => {
  findById(tutorId);
});

</script>

<template>
      <q-card class="q-ma-md">
        <q-card-section>
          <p class="text-h5">{{ acao }} Tutor</p>
          <q-form @submit="onSumbit" class="row">
            <q-input
              v-model="tutorForm.nome"
              label="Nome"
              class="col-3"
              outlined
            />
            <q-input
              v-model="tutorForm.cpf"
              label="CPF"
              class="col-3"
              outlined
            />
            <q-input
              v-model="tutorForm.email"
              label="Email"
              class="col-3"
              outlined
            />
            <q-input
              v-model="tutorForm.telefone"
              label="Telefone"
              class="col-3"
              outlined
            />
            <q-input
              v-model="tutorForm.endereco.cep"
              label="CEP"
              class="col-3"
              outlined
            />
            <div class="col-12 q-mt-md">
              <q-btn
                type="submit"
                label="Salvar"
                color="primary"
                class="q-mr-sm"
              />
              <q-btn
                color="primary"
                label="Voltar"
                @click="() => router.push('/tutor')"
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
</template>

<style scoped>

</style>
