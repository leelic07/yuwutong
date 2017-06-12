<template>
  <div class="wrapper" :class="{'login-wrapper':!isNotLogin}">
    <!--<NavBar></NavBar>-->
    <!--<ToTal></ToTal>-->
    <ywtHeader v-if = "isNotLogin"></ywtHeader>
    <ywtAside v-if = "isNotLogin"></ywtAside>
    <!--<Content></Content>-->
    <router-view></router-view>
    <ywtFooter v-if = "isNotLogin"></ywtFooter>
    <SideBar v-if = "isNotLogin"></SideBar>
  </div>
</template>
<script>
//import NavBar from './components/NavBar.vue'
//import ToTal from './components/Total.vue'
import ywtHeader from './components/Header/Header.vue'
import ywtAside from './components/Aside/Aside.vue'
import ywtFooter from './components/Footer/Footer.vue'
import SideBar from './components/SlideBar/SideBar.vue'

  export default {
    name: 'app',
    data() {
        return {
          isNotLogin: true,
          toUrl:""
        }
    },
    watch:{
      $route(to){
        this.toUrl = to.path;
        $("html,body,.wrapper").css("height","100%");
      },
      toUrl(){
        const loginUrl = "/login";
        if (this.toUrl == loginUrl ) {
            this.isNotLogin = false;
        }else {
            this.isNotLogin = true;
        }
      }
    },
    methods:{
      //初始为登陆页时隐藏侧边和顶边栏
      hideBar() {
        const loginUrl = "/login";
        if (this.$route.path == loginUrl ) {
            this.isNotLogin = false;
        }
      }
    },
    components:{
//      NavBar
//      ToTal
      ywtHeader,
      ywtAside,
      ywtFooter,
      SideBar,
    },
    mounted(){
      this.hideBar();
    }
  }
</script>

<style>
  .content-wrapper,.main{
    height:calc(100% - 101px);
    min-height: 0;
  }
  .login-wrapper {
    background: #e9e9e9;
  }
</style>
