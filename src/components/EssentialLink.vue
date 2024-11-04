<template>
  <q-item clickable tag="a" @click="() => handleClick()">
    <q-item-section v-if="props.icon" avatar>
      <q-icon :name="props.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ props.title }}</q-item-label>
      <q-item-label caption>{{ props.caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { useRouter } from 'vue-router';

defineOptions({
  name: 'EssentialLink',
});

const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  caption: {
    type: String,
    default: '',
  },

  link: {
    type: String,
    default: '#',
  },

  icon: {
    type: String,
    default: '',
  },
  onClick: {
    type: Function,
    default: () => {},
  },
});

const router = useRouter();

function handleClick() {
  props.onClick();
  router.push(props.link);
}

</script>
