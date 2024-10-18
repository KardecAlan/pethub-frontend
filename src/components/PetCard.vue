<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({ pet: Object });

function goMedicalHistory() {
  router.push(`/pet/historico-clinico/${props.pet.id}`);
}

</script>

<template>
  <q-card class="q-py-lg q-px-md">
    <p class="text-grey q-ma-none">
      {{ props.pet.especie }} |
      {{ props.pet.sexo == 'M' ? 'Macho' : 'Fêmea' }} |
      {{ props.pet.idade }} Meses
    </p>
    <p class="text-h5 q-ma-none">
      {{ props.pet.nome }}
    </p>
    <p class="q-ma-none">
      Tutor:
      {{ props.pet.tutor }}
    </p>

    <q-btn @click="goMedicalHistory" outline class="q-p-none q-mt-lg" color="primary">
      Ver Histórico Clínico
    </q-btn>

  </q-card>
</template>
