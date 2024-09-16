<script setup>
import { defineProps } from "vue";

const props = defineProps(['data', 'columns']);

</script>

<template>

  <q-card class="q-ma-md">
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-center" v-for="col in props.columns">{{ col.label }}</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="data in props.data">
          <td class="text-center" v-for="col in props.columns">{{ data[col.field] }}</td>
          <q-td>
            <q-btn flat icon="edit" />
            <q-btn flat icon="delete" />
          </q-td>
        </tr>
      </tbody>
    </q-markup-table>
  </q-card>
</template>
