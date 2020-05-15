<template>
<div>
    {{message}}
</div>
</template>

<script>
    import {ref} from 'vue'
    export default {
        name: 'Index',
        setup() {
            let message = ref(0)
            return {
                message
            }
        }
    }
</script>

<style scoped>

</style>
