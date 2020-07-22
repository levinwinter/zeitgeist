export default {
    install(Vue: any, options: any) {
        Vue.prototype.$customThing = "hi, I am global :)"
    }
}
