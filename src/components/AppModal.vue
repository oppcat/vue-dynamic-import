<template>
    <div class="modal-wrapper" v-if="modal.open">
        <div class="modal-content">
            <header class="content-header">
                <h2>Hi i am modal</h2> 
                <i class="icon" @click="close">✖️</i> 
            </header>

            <p class="modal-text">Some Default Content</p>

        </div>
        <div class="backdrop" @click="close"></div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: ['modal'],

    methods: {
        close() {
            this.$emit('close', 'modal')
        }
    }
}
</script>


<style lang="scss" scoped>
.modal-wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  z-index: 99;

  .modal-content {
    width: 400px;
    height: 55%;
    background: whitesmoke;
    display: grid;
    grid-template-rows: 75px 1fr;
    box-shadow: 32px 33px 1px -9px rgba(0, 0, 0, 0.5);
    z-index: 2;
  }

  .content-header {
    display: grid;
    grid-template-columns: 1fr 20px;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid;
    padding: 0 20px;

    > .icon {
      cursor: pointer;
    }
  }
  .modal-text {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .backdrop {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1;
  }
}
</style>
