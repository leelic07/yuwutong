<template>
  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">

    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">

      <!-- Sidebar user panel (optional) -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="@/../static/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>英山监狱</p>
          <!-- Status -->
          <a href="#"><i class="fa fa-circle text-success"></i>在线</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <ul class="sidebar-menu">
        <li class="header">导航</li>
        <!-- Optionally, you can add icons to the links -->
        <li class="active">
          <a href="#"><i class="fa fa-link"></i> <span>商品管理</span></a>
        </li>
        <li>
          <a href="#"><i class="fa fa-link"></i> <span>家属订单</span></a>
        </li>
      </ul>
      <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
  export default {
      data() {
          return {

          }
      }
  }
</script>

<style type="text/less" lang="less" scoped>
  .user-panel{
    padding-bottom:20px;
  }
  .sidebar-menu {
    margin-top:20px;
  }
</style>
