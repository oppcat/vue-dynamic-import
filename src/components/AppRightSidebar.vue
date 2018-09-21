<template>
    <div class="right-sidebar" v-if="rightSidebar.open">
        <p>Hi i am the right sidebar</p>
    </div>
</template>

<script>
export default {
    name: 'RightSidebar',
    props: ['rightSidebar']
}
</script>


<style scoped>
.right-sidebar {
  display: grid;
  justify-content: center;
  border: 1px solid darkgrey;
  grid-area: right-sidebar;
}
</style>
