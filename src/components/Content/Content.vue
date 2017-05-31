<template>
  <!-- Content Wrapper. Contains page content -->
  <div id="Content" class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header" v-if="isManage">
      <!--<h1>-->
      <!--Page Header-->
      <!--<small>Optional description</small>-->
      <!--</h1>-->
      <ol class="breadcrumb pull-left">
        <li><a href="#"><i class="fa fa-dashboard"></i>首页</a></li>
        <li class="active">商品管理</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content" v-if="isManage">

      <!-- Your Page Content Here -->
      <!--<table class="table table-striped">-->
      <!--<thead>-->
      <!--<tr>-->
      <!--<th>商品图片</th>-->
      <!--<th>商品名称</th>-->
      <!--<th>商品简介</th>-->
      <!--<th>商品条码</th>-->
      <!--<th>单价</th>-->
      <!--<th>单位</th>-->
      <!--<th>生产厂家</th>-->
      <!--<th>商品部类</th>-->
      <!--<th>操作</th>-->
      <!--</tr>-->
      <!--</thead>-->
      <!--<tbody>-->
      <!--<tr>-->
      <!--<td>1</td>-->
      <!--<td>2</td>-->
      <!--<td>3</td>-->
      <!--<td>4</td>-->
      <!--<td>5</td>-->
      <!--<td>6</td>-->
      <!--<td>7</td>-->
      <!--<td>8</td>-->
      <!--<td>9</td>-->
      <!--</tr>-->
      <!--<tr>-->
      <!--<td>1</td>-->
      <!--<td>2</td>-->
      <!--<td>3</td>-->
      <!--<td>4</td>-->
      <!--<td>5</td>-->
      <!--<td>6</td>-->
      <!--<td>7</td>-->
      <!--<td>8</td>-->
      <!--<td>9</td>-->
      <!--</tr>-->
      <!--</tbody>-->
      <!--</table>-->

      <div class="row">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title"></h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table id="example1" class="table table-bordered table-striped table-hover">
                <thead>
                  <tr>
                    <th>商品图片</th>
                    <th>商品名称</th>
                    <th>商品简介</th>
                    <th>商品条码</th>
                    <th>单价</th>
                    <th>单位</th>
                    <th>生产厂家</th>
                    <th>商品部类</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Trident</td>
                    <td>Internet
                      Explorer 4.0
                    </td>
                    <td>Win 95+</td>
                    <td> 4</td>
                    <td>X</td>
                    <td>X</td>
                    <td>X</td>
                    <td>X</td>
                    <td>
                      <router-link to="/commodity_management/edit" @click="isManage()">编辑</router-link>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <!--<th></th>-->
                    <!--<th></th>-->
                    <!--<th></th>-->
                    <!--<th></th>-->
                    <!--<th></th>-->
                    <!--<th></th>-->
                    <!--<th></th>-->
                  </tr>
                </tfoot>
              </table>
            </div>
            <!-- /.box-body -->
          </div>
        </div>
      </div>
    </section>

    <!--点击编辑路由入口-->
    <router-view></router-view>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        order: [],
        isManage: true,
        toUrl: '',//到达路由
        fromUrl: ''//进入路由
      }
    },
    watch: {
      $route(to, from) {//监听路由变化
        this.toUrl = to.path;
        this.fromUrl = from.path;
      },
      toUrl() {
        const editUrl = '/commodity_management/edit';
//        const index = editUrl.lastIndexOf('/');
//        if (this.toUrl.substring(0, index) == "/crimsearch/edit") {//进入编辑页面
//          this.isManage = false;//将管理页隐藏
//        } else {
//          this.isManage = true;
//        }

        if (this.toUrl == '/commodity_management/edit') {
          this.isManage = false;
        } else {
          this.isManage = true;
        }
      },
      fromUrl() {
        const editUrl = '/commodity_management/edit';
        if(this.fromUrl == '/commodity_management/edit'){

        }
      }
    },
    methods: {
      getAllCommodity() {
        axios.get('/orders').then(res => {
          this.orders = res.data.orders;
          console.log(this.orders);
        }).catch(err => {
          console.log(err);
        });
      },

      isManage() {
        this.commodityTableShow = !this.commodityTableShow;
      }
    },
    mounted() {
      $(function () {
        $("#example1").DataTable();
        $('#example2').DataTable({
          "paging": true,
          "lengthChange": false,
          "searching": true,
          "ordering": true,
          "info": true,
          "autoWidth": false
        });
      });
      this.getAllCommodity();
    },
    updated() {
      $(function () {
        $("#example1").DataTable();
        $('#example2').DataTable({
          "paging": true,
          "lengthChange": false,
          "searching": true,
          "ordering": true,
          "info": true,
          "autoWidth": false
        });
      });
    }
  }
</script>

<style type="text/less" lang="less" scoped>
  #Content {
    .breadcrumb {
      /*margin-right: 85%;*/
      font-size: 16px;
      > li {
        &:first-child {
          a {
            color: #3C8DBC;
          }
        }
      }
    }

    .box {
      margin-top: 35px;
      .dataTables_filter {
        label {
          float: right;
          margin-left: 80%;
        }
      }
    }
  }
</style>
