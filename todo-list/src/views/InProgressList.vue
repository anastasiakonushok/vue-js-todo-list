<template>
    <div class="list">
        <ToDoList :items=" tasks" />
        <button class="list__btn" @click="showInput = !showInput">Create New Item</button>
        <input class="" type="text" v-model="newTask" @keydown.enter="addTask" v-if="showInput">
    </div>
</template>

<script>
import ToDoList from '@/components/ToDoList.vue'
export default {
    data() {
        return {
            showInput:false,
            newTask: '',
            tasks: [
                'Lorem levlklvwq',
                'dwjofjopwqejopgjqew'
            ]
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.newTask);
            this.newTask = '';
        }
    },
    components: {
        ToDoList
    }
}
</script>

<style lang="scss" scoped>
    input {
        border: 1px solid black;
        width: 100%;
    }
    .list {
        &__btn {
            color:blue;
        }
    }
</style>