<template>
  <hooks :title="hookTitle"></hooks>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Hooks from '@/components/hooks.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Hooks,
  },
  setup() {
    return {
      hookTitle: 'Hooks使用示例',
    };
  },
});
</script>
