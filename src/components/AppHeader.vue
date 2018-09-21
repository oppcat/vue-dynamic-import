<template>
    <div class="header" v-if="header.open">
        <p>Hi i am the header</p>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: ['header']
}
</script>


<style scoped>
    .header {
        display: grid;
        grid-area: header;
        justify-content: center;
        align-items: center;
        padding-left: 10px;
        background: darkgray;
        color: white;
    }
</style>