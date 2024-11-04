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
import { ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import EssentialLink from 'components/EssentialLink.vue';
import { authServices } from 'src/services/auth';

defineOptions({
  name: 'MainLayout',
});

const linksList = [
  {
    title: 'Consultar Pets',
    icon: 'search',
    link: '/',
  },
  {
    title: 'Gerenciar Tutores',
    icon: 'settings',
    link: '/tutores',
  },
  {
    title: 'Gerenciar pets',
    icon: 'settings',
    link: '/pets',
  },
  {
    title: 'Encerrar Sessão',
    icon: 'logout',
    link: '/login',
    onClick: async () => {
      await authServices.logout();
    },
  },
];

const leftDrawerOpen = ref(false);
const router = useRouter();

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

onBeforeMount(async () => {
  const isAuthenticaded = await authServices.hasToken();

  if (!isAuthenticaded) {
    router.push('/login');
  }
});
</script>
