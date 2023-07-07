<script lang="ts">
import { defineProps, defineComponent } from "vue";

export default defineComponent({
  name: "TextCount",
});
</script>
<script setup lang="ts">
const props = defineProps({
  total: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div class="textCount">
    <div>세루크님은 이번달에</div>
    <div>
      총 <span>{{ props.total }}</span
      >번 체크인하셨군요
    </div>
  </div>
</template>

<style scoped>
.textCount {
  text-align: center;
}

span {
  color: red;
}
</style>
