<template>
  <div>{{ userName }}</div>
  <div>{{ msg }}</div>
  <div v-html="testHtml"></div>
  <div v-for="item in items" v-bind:key="item">{{ item }}</div>
  <input type="text" v-model="title" />
  <div>{{ title }}</div>
  <div id="test">
    <h3 v-if="show">Loading ...✔✔✔</h3>
    <button v-on:click="changeStatus()">눌러봐</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "이가원",
      msg: "test중입니다.",
      testHtml: '<span style = "color: red">이건 v-html 사용한 것</span>',
      items: ["test1", "test2", "test3"],
      title: "",
      show: true,
    };
  },

  methods: {
    changeStatus() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
div {
  font-size: 20px;
  color: pink;
  margin: 10px;
}

#test {
  color: blue;
  font-size: 18px;
}
</style>
