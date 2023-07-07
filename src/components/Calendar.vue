<script lang="ts">
import {
  ref,
  PropType,
  defineComponent,
  defineEmits,
  defineExpose,
  defineProps,
  getCurrentInstance,
} from "vue";

export default defineComponent({
  name: "Calendar",
});
export interface CalendarComponent {
  onClickTest(): void;
}
// interface IProps {
//   test: Array<CalendarItem>;
// }
</script>

<script setup lang="ts">
import hook from "../hooks/index";
const { testNum, setNumber } = hook();
console.log("check me!", testNum);

// vite
const props = defineProps({
  list: {
    type: Array as PropType<Array<CalendarItem>>,
    required: true,
    default: () => [],
  },
});

const emit = defineEmits<{
  (e: "onClick", day: number): void;
}>();

// Calendar 생성을 위한 script

const days: number[] = [];
const gap: number = 0;
const today: Date = new Date();
const week: Array<string> = ["일", "월", "화", "수", "목", "금", "토"];
const year: number = today.getFullYear();
const month: number = today.getMonth();
const day: number = today.getDate();

const firstDay: number = new Date(year, month + 1, 1).getDay();
const lastDate: number = new Date(year, month + 1, 0).getDate();

for (let i = 0; i < firstDay; i++) {
  days.push(0);
}
for (let i = 1; i <= lastDate; i++) {
  days.push(i);
}

const weekCount = Math.ceil(days.length / week.length);

// 출석확인을 위한 script
const onClick = () => {
  emit("onClick", day);
};

const onClickTest = () => {
  console.log("check in test");
};

defineExpose<CalendarComponent>({
  onClickTest,
});
</script>

<template>
  <div class="calendar">
    <div>{{ month + 1 }}월</div>
    <table class="calendarTable">
      <thead>
        <tr>
          <th v-for="item in week" :key="item">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <!-- 한달에 4~6주가 존재 -->
        <tr v-for="(item, index) in weekCount" :key="item">
          <th
            v-for="_item in days.slice(index * week.length, item * week.length)"
            :key="_item"
          >
            <span
              v-if="_item"
              :style="
                props.list[_item - 1].yn ? 'color : red' : 'color : black'
              "
              >{{ _item }}
            </span>
          </th>
        </tr>
      </tbody>
    </table>
    <button @click="onClick">출석</button>
  </div>
</template>

<style scorped>
.calendar {
  text-align: center;
}

.calendarTable {
  margin: 0 auto;
}
</style>
