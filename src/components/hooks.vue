<template>
<div>
    <div class='title'>{{myTitle}}</div>
    <button @click="handleCLick">防抖测试</button>
    <div class='scroll-box' @scroll="handleScroll(throttleRef)">
      {{throttleRef}}测试
      <div style="height: 200px"></div>
      <div style="height: 200px"></div>
      <div style="height: 200px"></div>
    </div>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { useDebounce } from '@/hooks/common/use-debounce';
import { useThrottle } from '@/hooks/common/use-throttle';

/**
 * hooks使用示例组件
 */
export default defineComponent({
  name: 'Hooks',
  props: {
    title: String,
  },
  setup(props) {
    const throttleRef = ref('节流');

    const handleCLick = useDebounce((() => { console.log('防抖测试'); }), 500);
    const handleScroll = useThrottle(((message) => { console.log(`${message}测试`); }), 500);

    return {
      myTitle: props.title,
      throttleRef,
      handleCLick,
      handleScroll,
    };
  },
});
</script>

<style lang="scss">

.title{
  text-align: center;
}

button{
  margin-bottom: 8px;
}

.scroll-box{
  height:300px;
  width:500px;
  background-color:rgb(209, 204, 204);
  overflow-y:scroll;
}

</style>
