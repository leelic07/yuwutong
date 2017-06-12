<template>
  <div>
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
          <router-link to="/commodity_management">
            <i class="fa fa-link"></i> 
            <span>商品管理</span>
          </router-link>
        </li>
        <li>
          <router-link to="/family_order">
            <i class="fa fa-link"></i>
            <span>家属订单</span>
          </router-link>
        </li>
      </ul>
      <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
  </aside>

  <aside class="main-sidebar">
    <section class="sidebar" style="height: auto;">
      <div class="user-panel">
        <div class="pull-left image">
          <img src="@/../static/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>英山监狱</p>
          <a href="#"><i class="fa fa-circle text-success"></i> 在线</a>
        </div>
      </div>
      <ul class="sidebar-menu">
        <li class="header">导航</li>

        <li class="treeview">
          <router-link to="/message_management">
            <i class="fa fa-bank"></i>
            <span>监狱基本信息管理</span>
          </router-link>
        </li>
        <li class="treeview">
          <router-link to="/laws_management">
            <i class="fa fa-file-text"></i>
            <span>法律法规信息管理</span>
          </router-link>
        </li>
        <li class="treeview">
          <router-link to="/prison_affairs_management">
            <i class="fa fa-newspaper-o"></i>
            <span>狱务公开信息管理</span>
          </router-link>
        </li>
      </ul>
    </section>
  </aside>

  <aside class="main-sidebar">
    <section class="sidebar" style="height: auto;">
      <div class="user-panel">
        <div class="pull-left image">
          <img src="@/../static/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>英山监狱</p>
          <a href="#"><i class="fa fa-circle text-success"></i> 在线</a>
        </div>
      </div>
      <ul class="sidebar-menu">
        <li class="header">导航</li>

        <li class="treeview">
          <router-link to="/family_registration_management">
            <i class="fa fa-edit"></i>
            <span>家属注册管理</span>
          </router-link>
        </li>
        <li class="treeview">
          <router-link to="/meeting_applycation_management">
            <i class="fa fa-file-text-o"></i>
            <span>会见申请管理</span>
          </router-link>
        </li>
        <li class="treeview">
          <router-link to="/prisoner_information_management">
            <i class="fa fa-male"></i>
            <span>服刑人员信息管理</span>
          </router-link>
        </li>
        <li class="treeview">
          <router-link to="/family_information_management">
            <i class="fa fa-users"></i>
            <span>家属信息管理</span>
          </router-link>
        </li>
        <li class="treeview">
          <router-link to="/prisoner_account_management">
            <i class="fa fa-credit-card"></i>
            <span>囚犯账户管理</span>
          </router-link>
        </li>
        <li class="treeview">
          <router-link to="/warden_mailbox">
            <i class="fa fa-envelope"></i>
            <span>监狱长信箱</span>
          </router-link>
        </li>
      </ul>
    </section>
  </aside>

  </div>

</template>

<script>
  export default {
      data() {
          return {
            isCommodity:false
          }
      }
  }
</script>

<style type="text/less" lang="less">
  .user-panel {
    padding-bottom:25px;
  }
</style>
