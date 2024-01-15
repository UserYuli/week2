import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    login() {
      const url = 'https://vue3-course-api.hexschool.io/v2/admin/signin';
      axios.post(url, this.user).then((response) => {
        const { token, expired } = response.data;
        // 寫入 cookie token
        // expires 設置有效時間
        document.cookie = `hexToken = ${token}; expires = ${new Date(expired)}; path = /`;
        // 跳轉
        window.location = 'products.html';

      }).catch((err) => {
        alert(err.response.data.message);
      });
    },
  },
}).mount('#app');