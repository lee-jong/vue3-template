<script lang="ts">
import {
  ref,
  computed,
  ComponentPublicInstance,
  getCurrentInstance,
  onMounted,
} from "vue";
import TopImage from "./components/topImage.vue";
// import TextCount from "./components/TextCount.vue";
// import Calendar from "./components/Calendar.vue";
// import type { CalendarComponent } from "./components/Calendar.vue";
import { testJson } from "./helper/testJson";
</script>

<script setup lang="ts">
// 하위 component의 함수나 변수 상수들을 가져다 쓸 수 있게 되었음
// 다만 component의 type을 ComponentPublicInstance 해당 값이 정확히 맞는지는 조금 더 확인이 필요
const data = ref<CalendarGroup>(testJson);
// const calendarCp =
//   ref<ComponentPublicInstance<typeof Calendar & CalendarComponent>>();
const test3 = getCurrentInstance()?.appContext.config.globalProperties.$test;
const test4 = import.meta.env.VITE_API_URL;

onMounted(() => {
  // Context 상속
  // * 예제로만 일단 기억 - 사용성에 따라 Mixin or Hook의 사용이 더 좋을 것 같음
  console.log(getCurrentInstance()?.appContext.config.globalProperties.$test);
});
</script>

<template>
  <div id="container">
    <TopImage />
    <!-- Context Test -->
    <div>{{ test3 }}</div>
    <div>{{ test4 }}</div>
  </div>
</template>

<style scoped></style>
