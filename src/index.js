import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import VueResource from "vue-resource";

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueResource);

// function baseSort(a, b, key) {
//     var a_orderNo = a[key];
//     var b_orderNo = b[key];
//
//     if (a_orderNo > b_orderNo) {
//         return 1;
//     } else if (a_orderNo < b_orderNo) {
//         return -1;
//     } else {
//         return 0;
//     }
// }

import hello from "./hello.vue";

import leftMenu from "./leftMenu.vue";
import projectList from "./projectList.vue";
import areaSelect from "./areaSelect.vue";

// require('./index.css');

// store
var store = new Vuex.Store({
    state: {
        count: 0,
        name: "name1"
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        setName(state) {
            state.name += "good";
        }
    }
})

store.commit('increment')
// console.log(store.state.count)
store.commit('increment')

store.commit('setName')
// console.log(store.state.count)
// console.log(store.state.name)

store.commit('setName')


// 注册组件

var app = new Vue({
    el: '#app',
    data() {
        return {
            message: 'Hello Vue!',
            message2: "message22"
        }
    },
    // created: function () {
    //     console.log("==app created==");
    //
    //     this.$http.get('/someUrl').then((response) => {
    //         console.log("httpGet Ok=>", response);
    //     }, (response) => {
    //         console.log("httpGet Err=>",response);
    //     });
    // },
    components: {
        // <my-component> 将只在父模板可用
        'my-component': {
            template: '<div>A custom component!</div>'
        },
        "hello": hello
    },
    methods: {
        getName: () => {
            console.log(store.state.name);
        },
        setName: () => {
            store.state.name += "setName";
        }
    }
});

// 左侧菜单
var leftMenuApp = new Vue({
    el: "#leftMenu",
    components: {
        "left-menu": leftMenu
    }
});

// 0. 如果使用模块化机制编程， 要调用 Vue.use(VueRouter)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Foo = {
    template: '<div>foo</div>'
}
const Bar = {
    template: '<div>bar</div>'
}
const User = {
    template: '<div>User {{ $route.params.id }} {{ $route.query.a }} </div>'
}

// 定义
var Tree = Vue.extend({
    template: '<div>This is a tree!</div>'
});
// 注册
Vue.component('tree', Tree);
Vue.component('project-list', projectList);
Vue.component('area-select', areaSelect);


const TprojectList = {
    template: '<div><area-select></area-select> <project-list></project-list></div>'
};

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/user/:id', component: User },
    { path: "/project/list", component: TprojectList }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
});

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app2 = new Vue({
    router
}).$mount('#app2');