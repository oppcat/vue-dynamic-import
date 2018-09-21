<template>
    <div class="title" v-if="title.open">
        <p>Hi i am the title</p>
    </div>
</template>

<script>
export default {
    name: 'Title',
    props: ['title']
}
</script>


<style scoped>
    .title {
        display: grid;
        justify-content: center;
        grid-area: title;
        border-top: 1px solid darkgrey;
    }
</style>
