<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { authServices } from 'src/services/auth.js';
import { showNegativeToast } from 'src/utils/ToastMessage';

const router = useRouter();
const credentials = ref({
  username: '',
  password: ''
}); 

function login(evt) {
  const {password, username} = credentials.value;
  evt.preventDefault();
  
  authServices.login(username, password)
  .then(() => {
    router.push('/');
  })
  .catch((err)=> {
    showNegativeToast(err.message);
  });
}
</script>

<template>
  <section id="page" class="row justify-center items-center">
    <q-card id="login-card" class="q-pa-lg">
      <q-form @submit="login">
        <p class="text-h5 text-center">Login</p>
        <q-input
          class="q-mb-sm"
          v-model="credentials.username"
          outlined
          required
          placeholder="Usuário"
        />
        <q-input
          class="q-mb-lg"
          v-model="credentials.password"
          outlined
          required
          type="password"
          placeholder="Senha"
        />

        <q-btn 
          id="btn-login"
          type="submit"
          class="q-px-lg text-light q-py-sm"
          color="primary"
          label="Entrar"
          @click="login"
        />
      </q-form>
    </q-card>
  </section>
</template>

<style scoped>
section#page {
  height: 100vh;
}

#login-card {
  width: 350px;
}

#btn-login {
  width: 100%;
}
</style>