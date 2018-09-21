<template>
    <div class="actions">
        <template v-for="prop in $props">
            <button 
                v-if="prop"
                class="button" 
                @click="emit_event(prop.action)"
                 >
                 {{ text(prop.open, prop.action) }}
            </button>
        </template>
    </div>
</template>

<script>
export default {
    name: 'Actions',
    props: [
        'header',
        'leftSidebar',
        'rightSidebar',
        'title',
        'content',
        'post',
        'modal',
        'actions'
    ],

    methods: {
        emit_event(action) {
            this.$emit(action, action)
        },
        text(open, action) {
            let verb = open ? 'Close' : 'Open'
            return `${verb} ${action.toUpperCase()}`
        }
    }

}
</script>


<style lang="scss" scoped>
    .actions {
        display: grid;
        grid-template-columns: repeat(auto-fill, 200px);
        justify-content: space-between;
        justify-items: start;
        align-items: center;
        grid-area: actions;
        background: darkblue;
        padding: 0 25px;

        // .button + .button {
        //     margin-left: 15px;
        // }

        .button {
            padding: 10px 15px;
            border: 0;
            border-radius: 5px;
        }
    }
</style>

