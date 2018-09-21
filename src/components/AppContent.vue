<template>
    <div class="content" v-if="content.open">
        <p>This is some content 
            This is some contentThis is some contentThis is some contentThis is some content
            This is some contentThis is some content
            This is some contentThis is some contentThis is some content
            This is some contentThis is some contentThis is some contentThis is some content
            This is some contentThis is some contentThis is some content
            This is some contentThis is some contentThis is some content
            This is some contentThis is some content
            This is some contentThis is some contentThis is some contentThis is some content
        </p>
    </div>
</template>

<script>
export default {
    name: 'Content',
    props: ['content']
}
</script>


<style scoped>
    .content {
        grid-area: content;
        text-align: center;
        padding: 0 20px;
    }
</style>

