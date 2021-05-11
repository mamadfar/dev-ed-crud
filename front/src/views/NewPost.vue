<template>
  <div class="newPost">
    <h1>make a new post</h1>
    <div class="">
      <label for="post_title">title</label>
      <input id="post_title" type="text" v-model="title" />
      <label for="post_description">description</label>
      <textarea
        name=""
        id="post_description"
        cols="30"
        rows="10"
        v-model="description"
      ></textarea>
    </div>
    <button v-on:click="handleNewPost">new post</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "new_post",
  data() {
    return {
      title: null,
      description: null,
    };
  },
  methods: {
    handleNewPost() {
      const newPost = {
        title: this.title,
        description: this.description,
      };
      axios.post("http://localhost:3000/posts", newPost);
    },
  },
};
</script>