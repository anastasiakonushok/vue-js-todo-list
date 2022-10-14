<template>
    <ul v-if="items.length">
        <li v-for="(item, index) in items" :key="index" class="flex">
            <input type="checkbox">
            <span>{{ item }}</span>
            <button></button>
        </li>
    </ul>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    props: {
        items: {
            type: Array,
            default: []
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>