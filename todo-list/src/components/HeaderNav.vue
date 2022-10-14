<template>
    <div class="header">
        <div class="header-date">
            <span>{{ (new Date()).getDate() }}</span>
            <h2>Today</h2>
        </div>
        <div class="header-select">

            <div class="header-select__header" @click="showMenu = !showMenu">
                <img src="@/assets/img/ellipsis.svg" alt="">
            </div>
            <div v-if="showMenu" class="header-select__body">
                <div
                    v-for="(option, index) in options" 
                    :key="index"
                    @click="goToList(option.value)"
                    :class="{'active': currentRouteName === option.value}"
                >
                    {{ option.name }}
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            statusValue: 'progress',
            showMenu: false,
            options: [
                { name: 'In Progress', value: 'inprogress' },
                { name: 'Completed', value: 'completed' },
                { name: 'Removed', value: 'removed' }
            ]
        }
    }
    ,
    computed: {
        currentRouteName() {
            return this.$route.name;
        }
    },
    methods: {
        goToList(status) {
            if (status === 'completed') {
                this.$router.push('/completed')
            } else if (status === 'removed') {
                this.$router.push('/removed')
            } else {
                this.$router.push('/')
            }
            this.showMenu = false;
        }
    }
}
</script>

<style lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-date {
    display: flex;
    align-items: center;

    span {
        margin-right: 10px;
        color: blue;
        font-weight: 400;
    }

    h2 {
        font-weight: 700;
        font-size: 28px;
    }
}

.header-select {
    position: relative;

    &__header {
        cursor: pointer;
        width: 20px;

        img {
            width: 100%;
        }
    }

    &__body {
        position: absolute;
        right: 0px;
        background: #FFFFFF;
        box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.15);
        border-radius: 5px 0px 5px 5px;
        min-width: 100px;
        padding: 8px;

        div {
            cursor: pointer;
        }

        div:not(:last-child) {
            margin-bottom: 10px;
        }
    }
}
.active {
    color:blue;
}
</style>