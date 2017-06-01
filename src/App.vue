<template>
  <div class="wrapper" :class="{'login-wrapper':!isNotLogin}">
    <!--<NavBar></NavBar>-->
    <!--<ToTal></ToTal>-->
    <Header v-if = "isNotLogin"></Header>
    <Aside v-if = "isNotLogin"></Aside>
    <!--<Content></Content>-->
    <router-view></router-view>
    <Footer v-if = "isNotLogin"></Footer>
    <SlideBar v-if = "isNotLogin"></SlideBar>
    <ControlSlideBar v-if = "isNotLogin"></ControlSlideBar>
  </div>
</template>

<script>
//import NavBar from './components/NavBar.vue'
//import ToTal from './components/Total.vue'
import Header from './components/Header/Header.vue'
import Aside from './components/Aside/Aside.vue'
import Content from './components/Content/Content.vue'
import Footer from './components/Footer/Footer.vue'
import SlideBar from './components/SlideBar/SlideBar.vue'
import ControlSlideBar from './components/SlideBar/ControlSlideBar.vue'

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
      Header,
      Aside,
      Content,
      Footer,
      SlideBar,
      ControlSlideBar
    },
    mounted(){
      this.hideBar();
    }
  }
</script>

<style type="text/less" lang="less" scoped>
  .skin-blue {
    .login-wrapper {
      background: #e9e9e9;
      
    }
  }
</style>
