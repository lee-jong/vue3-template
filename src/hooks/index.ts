import { ref, onMounted } from "vue";
// import type { Ref } from "vue";

// hook example
// Calendar.vue
interface C {
  // 어차피 value값을 불러와 사용할게 뻔하여 아래와 같이 정의가 편리
  // testNum: Ref<number>;
  testNum: number;
  setNumber: (number: number) => void;
}

// 즉시 호출하여 사용할 수도 있으나, 그럴 경우 lifecycle이 동작하지 않음 참조
export default function useHookTest(): C {
  const testNum = ref<number>(0);

  onMounted(() => {
    console.log("check hook mounted");
  });

  const setNumber = (number: number) => {
    testNum.value = number;
  };
  return {
    testNum: testNum.value,
    setNumber,
  };
}
