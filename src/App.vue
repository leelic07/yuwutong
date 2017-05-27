<template>
  <div class="wrapper">
    <!--<NavBar></NavBar>-->
    <!--<ToTal></ToTal>-->
    <Header></Header>
    <Aside></Aside>
    <!--<Content></Content>-->
    <router-view></router-view>
    <Footer></Footer>
    <SlideBar></SlideBar>
    <ControlSlideBar></ControlSlideBar>

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
    }
  }
</script>

<style></style>
