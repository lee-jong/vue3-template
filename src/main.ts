import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
const app = createApp(App);

// 아래 app.use 셋팅을 따로 파일로 처리하면 좋을 것 같음
// 다만 vue3에서 hook의 만들어짐에 따라 hook을 전역에 둘 수 있는 방법이 있을 것 같음
// Data 확인 App.vue
// App component를 root로 지정하여 해당 하위 component context (상속 개념)
app.use({
  install(App) {
    App.config.globalProperties.$test = "context test";
  },
});

app.mount("#app");
