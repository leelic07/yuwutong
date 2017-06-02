<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="main">
    <div class="content-wrapper ywt-content-wrapper" v-if = "isNotDetail">
      <!-- Content Header (Page header) -->
      <section class="content-header clearfix">
        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-dashboard"></i> 首页</a></li>
          <li class="active">家属订单管理</li>
        </ol>
      </section>

      <!-- Main content -->
      <section class="content">
        <div class="row">
          <!-- left column -->
          <div class="col-xs-12">
            <!-- Form Element sizes -->
            <div class="box box-info">
                <div class="box-body">
                    <table id="orderTable" class="table table-bordered table-striped">
                      <thead>
                      <tr>
                        <th>订单号</th>
                        <th>订单状态</th>
                        <th>创建日期</th>
                        <th>支付日期</th>
                        <th>操作</th>
                        <th></th>
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
                        <td><button type="button" class="btn btn-block btn-primary">配送完成</button></td>
                        <td><button type="button" class="btn btn-block btn-default" @click = "toDetail">订单详情</button></td>
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
         const detailUrl = '/family_order/detail/1';
         const index = detailUrl.lastIndexOf('/');
         if (this.toUrl.substring(0, index) == "/family_order/detail"){
            this.isNotDetail = false;
         }else {
            this.isNotDetail = true;
         }
      },
      toDetail() {
        this.$router.push("family_order/detail/1")
      }
    },
    mounted(){
      this.toUrl = this.$route.path;
      this.inDetail();
      $("#orderTable").DataTable({
          "info": false,
          "searching": false,
          "lengthChange": false,
          "pagingType": "full_numbers",
          "dom":'<"box-body"t><"box-footer"p>',
          "ordering":false,
          "oLanguage": {
            "oPaginate":{
              "sFirst": "首页",
              "sPrevious": "前一页",
              "sNext": "后一页",
              "sLast": "尾页"
            }
          }
      }) 
    } 
 }
</script>
<style type="text/less" lang="less">
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
      #orderTable {
        &.table-striped{
          >tbody{
            tr:nth-of-type(odd){
              background: #c4e3f3;
            }
          }
        }
      }
      .box-footer {
        .dataTables_paginate {
          text-align: center;
        }
      }
    }  
  }
</style>