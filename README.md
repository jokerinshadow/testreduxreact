###redux总结:
const.js存储的是只读的变量;
index.js存储的是reducer传过来的state;
reducer.js可以存储默认变量和改变变量的方法，注意在react中1到1也算改变变量;
state.js存储的是默认的state，先传给reducer，reducer传给index;
actionCreator.js存储的是组件的动作，并且有一个标识性的const传过来的只读变量，后面跟上组件变化所需的变量;
注意原型继承的使用，通过原型继承全局使用store ：Component.prototype.$store = store;
this.$store.getState();

###redux工作:
组件发出动作,拿到组件动作变化所需的变量，通过actionCreator定义一个动作，利用dispatch方法将动作传递给reducer,
reducer接受到动作传过来的方法后作出改变，state的值也相应的发生变化，最终渲染到页面上;

##redux用途：
通常用于多组件的通信，开发大型应用！MVC...可以运用在vue，react，java，js...