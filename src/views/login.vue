<template>
  <div>
    <el-button @click="handleLogin">登录</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElButton } from 'element-plus';
import { useRouter } from '@/hooks/common/use-router';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Login',
  components: { ElButton },
  setup() {
    const store = useStore();
    const { router } = useRouter();
    const handleLogin = async () => {
      const data = await store.dispatch('user/login', { userName: 'zqc', password: '18' }); // 派发事件，调用actions
      if (data.accessToken) {
        router.push('home');
      }
    };
    return {
      handleLogin,
    };
  },
});
</script>
