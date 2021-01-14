import {
  reactive, toRefs, watch, getCurrentInstance, Ref,
} from 'vue';

import { Router } from 'vue-router';

/**
 *  获取路由
 *  @returns 当前路由以及Router实例
 */
export function useRouter():{route:Ref, router:Router } {
  const vm = getCurrentInstance();
  const state = reactive({ route: vm?.proxy?.$route });
  watch(() => vm?.proxy?.$route, (newValue) => { state.route = newValue; });
  return { ...toRefs(state), router: vm?.proxy?.$router as Router };
}
