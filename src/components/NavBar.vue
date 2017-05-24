<template>
  <div class="row nav">
    <div class="col-xs-24">
      <div class="left-side">
        <router-link class="col-xs-24 pull-left" to="/" >
          <div class="col-xs-24 pull-left dashboardItem" :style="textWhite">狱务公开管理平台</div>
          <!--<div class="col-xs-12 pull-left dashboardItem" :style="tWhite">管理平台</div>-->
        </router-link>
      </div>
      <div class="right-side navBar">
        <div class="col-xs-1">
          <a class="pull-left glyphicon glyphicon-align-justify"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        textWhite:{
          color:'#fff',
          fontSize:'18px',
          fontWeight:'bold',
          textAlign:'right'
        }
      }
    }
  }
</script>

<style type="text/less" lang="less" scoped>
  @white:#fff;
  @darkBlue:#3A80A7;
  @lightBlue:#408EBA;
  @navBarHeight:53px;
  @leftWidth:19%;
  @rightWidth:100%;

  *{
    /*border:1px solid #000;*/
  }
  .nav {

    .left-side {
      width:@leftWidth;
    }

    .right-side {
      width:@rightWidth;
    }

    .dashboardItem {
      background-color:@lightBlue;
      padding:14px 23% 14px 0;
      text-align:center;
      &:hover {
        background-color:@darkBlue;
      }
    }

    .navBar {
      background-color:@lightBlue;
      min-height:@navBarHeight;
      >div {
        min-height:@navBarHeight;
        &:hover {
          cursor:pointer;
          background:@darkBlue;
        }
        &:first-child {
          a {
            margin-left:35%;
            margin-top:18px;
            color:@white;
            text-decoration:none;
          }
        }
      }
    }
  }
</style>
