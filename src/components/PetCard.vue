<script>
export default {
  props: {
    pet: Object,
  },
};

</script>

<template>
  <q-card class="q-py-lg q-px-md">
    <p class="text-grey q-ma-none">
      {{ pet.especie }} |
      {{ pet.sexo == 'M' ? 'Macho' : 'Fêmea' }} |
      {{ pet.idade }} Meses
    </p>
    <p class="text-h5 q-ma-none">
      {{ pet.nome }}
    </p>
    <p class="q-ma-none">
      Tutor:
      {{ pet.tutor }}
    </p>

    <q-btn outline class="q-p-none q-mt-lg" color="primary">Ver Histórico Clínico</q-btn>

  </q-card>
</template>
