<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          PetHub
        </q-toolbar-title>

        <!--        <div>Quasar v{{ $q.version }}</div>-->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

defineOptions({
  name: 'MainLayout',
});

const linksList = [
  {
    title: 'Medico',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    title: 'Tutor',
    icon: 'school',
    link: '/tutor',
  },
  {
    title: 'Tutelado',
    icon: 'school',
    link: '/tutelado',
  },
  {
    title: 'Endereco',
    icon: 'school',
    link: '/endereco',
  },
  {
    title: 'Ficha Medica',
    icon: 'school',
    link: '/fichamedica',
  },
  {
    title: 'Historico Clinico',
    icon: 'school',
    link: '/historicosclinico',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
