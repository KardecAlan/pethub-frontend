<script>
import PetServices from 'src/services/pets';
import PetCard from 'src/components/PetCard.vue';

export default {
  data() {
    return {
      petName: '',
      results: [],
    };
  },

  components: { PetCard },

  methods: {
    async search(evt) {
      evt.preventDefault();
      this.results = await PetServices.searchPet(this.petName);
    },
  },

};

</script>

<template>
  <section class="q-pa-xl">

    <h2 class="text-h4 q-mb-xs">Consultar Pet</h2>
    <p class="text-grey">Otenha informaões sobre o histórico clínico de um pet</p>
    <!-- Barra de Pesquisa -->
    <form>
      <div class="row justify-center q-gutter-sm">
        <q-input
          class="col"
          type="search"
          v-model="petName"
          outlined
          placeholder="Digite o nome do Pet"
        />
        <q-btn
          @click="search"
          type="submit"
          class="col-lg-2"
          color="primary"
          icon="search"
          label="Pesquisar"
        />
      </div>
    </form>
    <!-- Resultados -->
    <section>
      <p class="text-grey-7 q-mt-md q-mb-xl">Resultados encontrados: {{ results.length }}</p>
      <article v-if="results.length > 0">
        <div class="row justify-center">
          <div class=" col-5 q-mb-md q-mr-md bg-green" v-for="pet in results" :key="pet.id">
            <PetCard :pet="pet" />
          </div>
        </div>
      </article>
      <article
        v-if="results.length === 0 && petName !== ''"
        class="q-mt-lg">
        Nenhum Resultado encontrado
      </article>
    </section>

  </section>

</template>
