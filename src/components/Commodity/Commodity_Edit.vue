<template>
  <div id="Commodity_Edit">
    <!-- Content Header (Page header) -->
    <section class="content-header col-xs-24">
      <!--<h1>-->
      <!--Page Header-->
      <!--<small>Optional description</small>-->
      <!--</h1>-->
      <ol class="bread_crumb">
        <li><a href="#"><i class="fa fa-dashboard"></i>首页</a></li>
        <li class="right_angle">&gt;</li>
        <li class="active">商品管理</li>
        <li class="right_angle">&gt;</li>
        <li class="active">商品信息编辑</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">

      <!--<div class="row">-->
      <!--<div class="col-xs-12">-->
      <!--<div class="box">-->
      <!--<div class="box-header">-->
      <!--<h3 class="box-title"></h3>-->
      <!--</div>-->
      <!--&lt;!&ndash; /.box-header &ndash;&gt;-->
      <!--<div class="box-body">-->
      <!--<table id="example1" class="table table-bordered table-striped table-hover">-->
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
      <!--<td>Trident</td>-->
      <!--<td>Internet-->
      <!--Explorer 4.0-->
      <!--</td>-->
      <!--<td>Win 95+</td>-->
      <!--<td> 4</td>-->
      <!--<td>X</td>-->
      <!--<td>X</td>-->
      <!--<td>X</td>-->
      <!--<td>X</td>-->
      <!--<td>X</td>-->
      <!--</tr>-->
      <!--</tbody>-->
      <!--<tfoot>-->
      <!--<tr>-->
      <!--<th></th>-->
      <!--<th></th>-->
      <!--<th></th>-->
      <!--<th></th>-->
      <!--<th></th>-->
      <!--<th></th>-->
      <!--<th></th>-->
      <!--</tr>-->
      <!--</tfoot>-->
      <!--</table>-->
      <!--</div>-->
      <!--&lt;!&ndash; /.box-body &ndash;&gt;-->
      <!--</div>-->
      <!--</div>-->
      <!--</div>-->
      <!-- quick email widget -->
      <div class="box box-info">
        <div class="box-header">
          <!--<i class="fa fa-envelope"></i>-->

          <!--<h3 class="box-title">Quick Email</h3>-->

          <h3 class="box-title"></h3>
          <!-- tools box -->
          <div class="pull-right box-tools">
            <!--<button type="button" class="btn btn-info btn-sm" data-widget="remove" data-toggle="tooltip" title="Remove">-->
              <!--<i class="fa fa-times"></i></button>-->
          </div>
          <!-- /. tools -->
        </div>
        <div class="box-body">
          <form action="#" method="post">
            <div class="form-group">
              <input type="email" class="form-control" name="emailto" placeholder="请填写商品条码">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" name="subject" placeholder="请填写商品名称">
            </div>
            <div>
              <textarea class="textarea" placeholder="请填写商品介绍" style="width: 100%; height: 125px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;"></textarea>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" name="subject" placeholder="请填写商品单位">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" name="subject" placeholder="请填写商品单价">
            </div>
            <div class="form-group">
              <input type="file" name="subject">
            </div>
          </form>
        </div>
        <div class="box-footer clearfix">
          <button type="button" class="pull-right btn btn-default" id="sendEmail">Send
            <i class="fa fa-arrow-circle-right"></i></button>
        </div>
      </div>
    </section>
     <!--/.content-->
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style type="text/less" lang="less">
  #Commodity_Edit {
    .content-header {
      .bread_crumb {
        /*margin-right: 55%;*/
        font-size: 16px;
        margin-top:10px;
        list-style: none;
        .right_angle {
          padding:0 10px 0 10px;
        }
        > li {
          float:left;
          &:first-child {
            a {
              color: #3C8DBC;
            }
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
