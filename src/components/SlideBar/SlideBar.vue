<template>
  <!-- Control Sidebar -->
  <!--<aside class="control-sidebar control-sidebar-dark">-->
    <!--&lt;!&ndash; Create the tabs &ndash;&gt;-->
    <!--<ul class="nav nav-tabs nav-justified control-sidebar-tabs">-->
      <!--<li class="active"><a href="#control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-home"></i></a></li>-->
      <!--<li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i class="fa fa-gears"></i></a></li>-->
    <!--</ul>-->
    <!--&lt;!&ndash; Tab panes &ndash;&gt;-->
    <!--<div class="tab-content">-->
      <!--&lt;!&ndash; Home tab content &ndash;&gt;-->
      <!--<div class="tab-pane active" id="control-sidebar-home-tab">-->
        <!--<h3 class="control-sidebar-heading">Recent Activity</h3>-->
        <!--<ul class="control-sidebar-menu">-->
          <!--<li>-->
            <!--<a href="javascript:;">-->
              <!--<i class="menu-icon fa fa-birthday-cake bg-red"></i>-->

              <!--<div class="menu-info">-->
                <!--<h4 class="control-sidebar-subheading">Langdon's Birthday</h4>-->

                <!--<p>Will be 23 on April 24th</p>-->
              <!--</div>-->
            <!--</a>-->
          <!--</li>-->
        <!--</ul>-->
        <!--&lt;!&ndash; /.control-sidebar-menu &ndash;&gt;-->

        <!--<h3 class="control-sidebar-heading">Tasks Progress</h3>-->
        <!--<ul class="control-sidebar-menu">-->
          <!--<li>-->
            <!--<a href="javascript:;">-->
              <!--<h4 class="control-sidebar-subheading">-->
                <!--Custom Template Design-->
                <!--<span class="pull-right-container">-->
                  <!--<span class="label label-danger pull-right">70%</span>-->
                <!--</span>-->
              <!--</h4>-->

              <!--<div class="progress progress-xxs">-->
                <!--<div class="progress-bar progress-bar-danger" style="width: 70%"></div>-->
              <!--</div>-->
            <!--</a>-->
          <!--</li>-->
        <!--</ul>-->
        <!--&lt;!&ndash; /.control-sidebar-menu &ndash;&gt;-->

      <!--</div>-->
      <!--&lt;!&ndash; /.tab-pane &ndash;&gt;-->
      <!--&lt;!&ndash; Stats tab content &ndash;&gt;-->
      <!--<div class="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>-->
      <!--&lt;!&ndash; /.tab-pane &ndash;&gt;-->
      <!--&lt;!&ndash; Settings tab content &ndash;&gt;-->
      <!--<div class="tab-pane" id="control-sidebar-settings-tab">-->
        <!--<form method="post">-->
          <!--<h3 class="control-sidebar-heading">General Settings</h3>-->

          <!--<div class="form-group">-->
            <!--<label class="control-sidebar-subheading">-->
              <!--Report panel usage-->
              <!--<input type="checkbox" class="pull-right" checked>-->
            <!--</label>-->

            <!--<p>-->
              <!--Some information about this general settings option-->
            <!--</p>-->
          <!--</div>-->
          <!--&lt;!&ndash; /.form-group &ndash;&gt;-->
        <!--</form>-->
      <!--</div>-->
      <!--&lt;!&ndash; /.tab-pane &ndash;&gt;-->
    <!--</div>-->
  <!--</aside>-->
  <div>
    <!--<aside class="main-sidebar" v-if="isCommodity">-->
      <!--<section class="sidebar" style="height: auto;">-->
        <!--<div class="user-panel">-->
          <!--<div class="pull-left image">-->
            <!--<img src="/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">-->
          <!--</div>-->
          <!--<div class="pull-left info">-->
            <!--<p>英山监狱</p>-->
            <!--<a href="#"><i class="fa fa-circle text-success"></i> 在线</a>-->
          <!--</div>-->
        <!--</div>-->
        <!--<ul class="sidebar-menu">-->
          <!--<li class="header">导航</li>-->

          <!--<li class="treeview">-->
            <!--<router-link to="/commodity_management/edit">-->
              <!--<i class="fa  fa-barcode"></i><span>商品管理</span>-->
            <!--</router-link>-->
          <!--</li>-->
          <!--<li class="treeview">-->
            <!--<a href="/orders">-->
              <!--<i class="fa   fa-list-ol"></i><span>家属订单</span>-->
            <!--</a>-->
          <!--</li>-->
        <!--</ul>-->
      <!--</section>-->
    <!--</aside>-->

    <aside class="main-sidebar">
      <section class="sidebar" style="height: auto;">
        <div class="user-panel">
          <div class="pull-left image">
            <img src="/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
          </div>
          <div class="pull-left info">
            <p>英山监狱</p>
            <a href="#"><i class="fa fa-circle text-success"></i> 在线</a>
          </div>
        </div>
        <ul class="sidebar-menu">
          <li class="header">导航</li>

          <li class="treeview">
            <a href="/jails">
              <i class="fa fa-bank"></i>
              <span>监狱基本信息管理</span>
            </a>
          </li>
          <li class="treeview">
            <a href="/laws">
              <i class="fa fa-file-text"></i>
              <span>法律法规信息管理</span>
            </a>
          </li>
          <li class="treeview">
            <a href="/news">
              <i class="fa fa-newspaper-o"></i><span>狱务公开信息管理</span>
            </a>
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
