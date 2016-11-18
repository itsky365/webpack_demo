<template>
    <div class="example">
        <h1>{{ title }}</h1>
        <h2>{{ c_title }}</h2>
        <button type="button" v-on:click="getName">获取名称</button>
    </div>
</template>

<script>
    module.exports = {
        props: ['title'],
        computed: {
            c_title: function() {
                return this.title + ' computed.';
            }
        },
        methods: {
            getName: () => {
                console.log("aaa");
            },
            setName: () => {
                store.state.name += "setName";
            }
        }
    };
</script>

<style>
    .example {
        text-align: left;
        color: #f00;
    }
</style>