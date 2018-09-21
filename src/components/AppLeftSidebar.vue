<template>
    <div class="left-sidebar" v-if="leftSidebar.open">
        <p>Hi i am sidebar</p>
    </div>
</template>

<script>
export default {
    name: 'LeftSidebar',
    props: ['leftSidebar']
}
</script>


<style scoped>
.left-sidebar {
  display: grid;
  justify-content: center;
  grid-area: left-sidebar;
  border: 1px solid darkgrey;
}
</style>