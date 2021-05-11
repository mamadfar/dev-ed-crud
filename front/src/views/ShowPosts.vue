<template>
  <div class="home">
    <HelloWorld msg="من تقریبا یک برنامه نویس کاملا پشته هستم" />
    <div class="">
      <div class="" v-for="post in posts" :key="post._id">
        <div class="title-style">{{ post.title }}</div>
        <router-link :to="{name: `Edit_Post`, params: {id: post._id, title: post.title, description: post.description}}">edit</router-link>
        <button v-on:click="handleDeletePost(post._id)">delete</button>
        <!-- <button v-on:click="handleEditPost(post._id)">edit</button> -->
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "Show_Posts",
  components: {
    HelloWorld,
  },
  data() {
    return {
      posts: [],
    };
  },
  async mounted() {
    try {
      const { data } = await axios.get("http://localhost:3000/posts");
      this.posts = data;
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    async handleDeletePost(id){
      try {
        const {data} = await axios.delete(`http://localhost:3000/posts/${id}`);
        this.posts = data
      } catch (err) {
        console.log(err)
      }
    }
  }
};
</script>

<style lang="scss">
  .title-style {
    background-color: cyan;
    margin: 1rem 0.5rem;
  }
</style>
