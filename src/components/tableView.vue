<script setup>
import { defineProps } from 'vue';

const props = defineProps(['data', 'labels', 'onDeleteItem', 'onEditItem']);

</script>

<template>

  <q-markup-table class="q-mt-lg">
    <thead>
      <tr>
        <th
        class="text-center"
        v-for="col in props.labels"
        :key="col.label"
        >{{col.toUpperCase()}}</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(data, i) in props.data" :key="i">
        <td class="text-center" v-for="col in props.labels" :key="col.id">{{ data[col] }}
        </td>
        <q-td>
          <q-btn flat icon="edit" @click="props.onEditItem(data.id)" />
          <q-btn flat class="text-red" icon="delete" @click="props.onDeleteItem(data.id)" />
        </q-td>
      </tr>

      <tr v-if="props.data.length === 0">
        <td :colspan="props.labels.length">
          <q-btn flat icon="error" />
          Nenhum dado disponível para visualização
        </td>
      </tr>
    </tbody>

  </q-markup-table>

</template>
