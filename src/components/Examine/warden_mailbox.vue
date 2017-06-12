<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="main">
    <div class="content-wrapper ywt-content-wrapper" v-if = "isNotDetail">
      <!-- Content Header (Page header) -->
      <section class="content-header clearfix">
        <ol class="breadcrumb">
          <li><router-link to = "/index"><i class="fa fa-dashboard"></i> 首页</router-link></li>
          <li class="active">监狱长信箱</li>
        </ol>
      </section>

      <!-- Main content -->
      <section class="content">
        <div class="row">
          <!-- left column -->
          <div class="col-xs-12">
            <!-- Form Element sizes -->
            <div class="box box-primary">
                <div class="box-header with-border">
                  <button class = "btn btn-primary pull-right"><i class="fa fa-refresh"></i> 刷新</button>
                </div>
                <div class="box-body">
                    <table id="mailTable" class="table table-bordered table-striped">
                      <thead>
                      <tr>
                        <th></th>
                        <th>标题</th>
                        <th>内容</th>
                        <th>发件人</th>
                        <th>发送日期</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td><i class = "fa fa-star mail-icon"></i></td>
                        <td><router-link to = "/warden_mailbox/detail/1">Trident</router-link></td>
                        <td>Internet
                          Explorer 4.0
                        </td>
                        <td>Win 95+</td>
                        <td> 4</td>
                      </tr>
                      </tbody>
                  </table>
                </div>
                <!-- /.box-body -->
                
            </div>
            <!-- /.box -->
          </div>
        </div>
      </section>
    </div>
    <!-- /.content-wrapper -->
    
    <!--点击订单详情入口-->
    <router-view></router-view>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        isNotDetail: true,
        toUrl: ""
      }
    },
    watch:{
      $route(to) {
        this.toUrl = to.path;
      },
      toUrl() {
         this.inDetail();
      }
    },
    methods:{
      inDetail() {
         const detailUrl = '/warden_mailbox/detail/1';
         const index = detailUrl.lastIndexOf('/');
         if (this.toUrl.substring(0, index) == "/warden_mailbox/detail"){
            this.isNotDetail = false;
         }else {
            this.isNotDetail = true;
         }
      }
    },
    mounted() {
      this.toUrl = this.$route.path;
      this.inDetail();
      $("#mailTable").DataTable({
          "info": false,
          "searching": false,
          "lengthChange": false,
          "pagingType": "full_numbers",
          "dom":'<"box-body"t><"box-footer"p>',
          "ordering":false,
          "language": {
            "paginate":{
              "first": "首页",
              "previous": "前一页",
              "next": "后一页",
              "last": "尾页"
            }
          }
      }) 
    } 
 }
</script>
<style type="text/less" lang="less">
  .main {
    .content-wrapper {
      height: 100%;
    }
  }
  .ywt-content-wrapper {
    .content-header {
      background: #f5f5f5;

      .breadcrumb {
        float: left;
        position: static;
        padding-left: 10px;

        >li {
          font-size: 16px;
          a {
            color:#367fa9;
          }  
        }

      }
    }
    .box {
      #mailTable {
        &.table-striped{
          >tbody{
            .mail-icon {
              color: #f39c12;
            }
          }
        }
      }
      .box-body {
        padding: 0;
      }
      .dataTables_paginate {
        text-align: center;
      }
    }  
  }
</style>