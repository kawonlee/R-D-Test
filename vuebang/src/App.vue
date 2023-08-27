<template>
  <div class="black-bg" v-if="modalOn == true">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>우리 원룸은 이렇습니다.</p>
      <button @click="modalOn == false">닫기</button>
    </div>
  </div>
  <div class="menu">
    <a v-for="menu in menus" :key="menu">{{ menu }}</a>
  </div>
  <!-- <div v-for="(a, i) in products" :key="i">
    <h4>{{ a }}</h4>
    <p>{{ price[i] }} 만원</p>
  </div> -->
  <div>
    <img :src="list[0].image" alt="baduck" class="image" />
    <h4 v-on:click="modalOn == true">{{ list[0].title }}</h4>
    <p>{{ list[0].price }}원</p>
    <p>{{ list[0].content }}</p>
    <button v-on:click="increase(0)">허위매물신고</button>
    <span>신고 수 : {{ reportNum[0] }}</span>
  </div>
  <div>
    <img :src="list[1].image" alt="baduck" class="image" />
    <h4 v-on:click="modalOn == true">{{ list[1].title }}</h4>
    <p>{{ list[1].price }}원</p>
    <p>{{ list[1].content }}</p>
    <button v-on:click="increase(1)">허위매물신고</button>
    <span>신고 수 : {{ reportNum[1] }}</span>
  </div>
  <div>
    <img :src="list[2].image" alt="baduck" class="image" />
    <h4 v-on:click="modalOn == true">{{ list[2].title }}</h4>
    <p>{{ list[2].price }}원</p>
    <p>{{ list[2].content }}</p>
    <button v-on:click="increase(2)">허위매물신고</button>
    <span>신고 수 : {{ reportNum[2] }}</span>
  </div>
  <div>
    <img :src="list[3].image" alt="baduck" class="image" />
    <h4 v-on:click="modalOn == true">{{ list[3].title }}</h4>
    <p>{{ list[3].price }}원</p>
    <p>{{ list[3].content }}</p>
    <button v-on:click="increase(3)">허위매물신고</button>
    <span>신고 수 : {{ reportNum[3] }}</span>
  </div>
  <div>
    <img :src="list[4].image" alt="baduck" class="image" />
    <h4 v-on:click="modalOn == true">{{ list[4].title }}</h4>
    <p>{{ list[4].price }}원</p>
    <p>{{ list[4].content }}</p>
    <button v-on:click="increase(4)">허위매물신고</button>
    <span>신고 수 : {{ reportNum[4] }}</span>
  </div>
  <div>
    <img :src="list[5].image" alt="baduck" class="image" />
    <h4 v-on:click="modalOn == true">{{ list[5].title }}</h4>
    <p>{{ list[5].price }}원</p>
    <p>{{ list[5].content }}</p>
    <button v-on:click="increase(5)">허위매물신고</button>
    <span>신고 수 : {{ reportNum[5] }}</span>
  </div>
  <!-- <div>
    <img src="./assets/baduck.gif" alt="baduck" class="image" />
    <h4>{{ products[1] }}</h4>
    <p>{{ price[1] }} 만원</p>
    <button v-on:click="increase(1)">허위매물신고</button>
    <span>신고 수 : {{ reportNum[1] }}</span>
  </div>
  <div>
    <img src="./assets/baduck.gif" alt="baduck" class="image" />
    <h4>{{ products[2] }}</h4>
    <p>{{ price[2] }} 만원</p>
    <button v-on:click="increase(2)">허위매물신고</button>
    <span>신고 수 : {{ reportNum[2] }}</span>
  </div> -->
</template>

<script>
import oneroom from "./assets/post.js";
oneroom;
export default {
  name: "App",
  data() {
    return {
      // 여기 안에 데이터 보관, 데이터는 object 자료형으로 작성 {자료이름: 자료내용}
      list: oneroom,
      modalOn: false,
      menus: ["Home", "Shop", "About"],
      products: ["역삼동 원룸", "천호동 원룸", "마포구 원룸"],
      price: ["50", "70", "100"],
      reportNum: [0, 0, 0, 0, 0, 0],
    };
  },
  methods: {
    // 함수 만드는 공간
    increase(i) {
      this.reportNum[i] += 1;
    },
  },

  components: {},
};
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background-color: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

.image {
  width: 100%;
  margin-top: 40px;
}
</style>
