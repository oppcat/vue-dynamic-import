<template>
    <div class="post" v-if="post.open">
        <p>Hi i am the post</p>
    </div>
</template>

<script>
export default {
    name: 'Post',
    props: ['post']
}
</script>


<style scoped>
    .post {
        display: grid;
        grid-area: post;
        justify-content: center;
    }
</style>
