<template>
    <div>
        <h1>edit specific post</h1>
        <h3>{{this.$route.params.description}}</h3>
        <div class="">
            <label for="post_title">title</label>
            <input id="post_title" type="text" v-model="title">
            <label for="post_description">description</label>
            <textarea name="" id="post_description" cols="30" rows="10" v-model="description"></textarea>
        </div>
        <button v-on:click="handleEditPost()">edit post</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Edit_Post",
    data(){
        return {
            title: null,
            description: null
        }
    },
    methods: {
        handleEditPost(){
            const editPost = {
                title: this.title ? this.title : this.$route.params.title,
                description: this.description ? this.description : this.$route.params.description
            }
            console.log(editPost);
            axios.patch(`http://localhost:3000/posts/${this.$route.params.id}`, editPost).then(()=>{
                this.$router.replace("/")
            })
        }
    },
    beforeMount(){
        console.log(this.$route);
    }
}
</script>