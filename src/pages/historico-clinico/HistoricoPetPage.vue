<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import PetServices from 'src/services/pets';


const route = useRoute();
const router = useRouter();
const petId = route.params.id;
const pet = ref({});
const histories = ref({});

onBeforeMount(async ()=> {
  try {
    pet.value = await PetServices.getById(petId);
    histories.value = await PetServices.getMedicalHistory(petId);
    console.log(histories.value);
    
  } catch (error) {
    console.log('deu ruim pai');
  }
});

</script>

<template>
  <section class="q-ma-md q-px-lg">

    <article class="row items-center justify-between">
      <h1 class="text-h4 q-mr-lg">Dados do Pet</h1>
      <q-btn
        class="q-px-lg"
        style="height:40px"
        outline
        color="primary"
        icon="edit"
        label="Editar Dados"
        @click="() => router.push(`/pet/editar/${petId}`)"
      />
    </article>

    <article class="row">
      <div class="q-mr-xl">
        <p><strong>Nome:</strong> {{ pet.nome }}</p>
        <p><strong>Tutor:</strong> {{ pet.tutor }}</p>
        <p><strong>Idade:</strong> {{ pet.idade }} Meses</p>
      </div>
      <div class="q-ml-xl">
        <p><strong>Espécie:</strong> {{ pet.especie }}</p>
        <p><strong>Peso:</strong> {{ pet.peso }} Kg</p>
        <p><strong>Sexo:</strong> {{ pet.sexo }}</p>
      </div>
    </article>

    <article>
      <h2 class="text-h4">Histórico Clínico</h2>
      
      <div>
        <q-card class="q-pa-md  q-mb-md" v-for="history in histories" :key="history.petId">
          <h3 class="text-h5">Ficha de Atendimento - 05/01/24</h3>
          <p><strong>Alergias:</strong> {{ history.alergia }}</p>
          <p><strong>Cirurgias:</strong> {{ history.cirurgia }}</p>
          <p><strong>Exames:</strong> {{ history.exames }}</p>
          <p><strong>Medicação:</strong> {{ history.medicamento }}</p>
          <p><strong>Suplementação:</strong> {{ history.suplementacao }}</p>
        </q-card>
      </div>
    </article>

</section>
</template>
