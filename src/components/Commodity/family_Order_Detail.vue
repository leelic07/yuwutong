<template>
  <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper ywt-content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header clearfix">
        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-dashboard"></i> 首页</a></li>
          <li><a href="#">家属订单管理</a></li>
          <li class="active">订单详情</li>
        </ol>
      </section>

      <!-- Main content -->
      <section class="content">
        <div class="row">
          <!-- left column -->
          <div class="col-xs-12">
            <!-- Form Element sizes -->
            <div class="box">
                <div class="box-header with-border">
                  <p class="pull-left order-desc">订单号：<span></span></p>
                  <small class="pull-right">Date: 2/10/2014</small>
                </div>
                <div class="box-body">
                    <table id="detailTable" class="table table-bordered">
                      <thead>
                      <tr>
                        <th>商品名称</th>
                        <th>商品单价</th>
                        <th>商品数量</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>Trident</td>
                        <td>Internet
                          Explorer 4.0
                        </td>
                        <td>Win 95+</td>
                      </tr>
                      </tbody>
                  </table>
                </div>
                <!-- /.box-body -->
                <div class="box-footer">
                  <h3 class = "pull-right">总计：<em class = "money">￥0.1</em></h3>
                </div>
            </div>
            <!-- /.box -->
          </div>
        </div>
      </section>
    </div>
    <!-- /.content-wrapper -->
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        toUrl: ""
      }
    },
    methods:{
      inDetail() {

      }
    },
    mounted(){
      
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
      .box-header {
        .order-desc {
          font-size: 16px;
          margin: 0;
          padding: 0;
        }
      }
      .box-footer {
        .money {
          font-style:normal;
        }
      }
    }  
  }
</style>