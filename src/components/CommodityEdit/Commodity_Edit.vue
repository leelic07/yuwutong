<template>
  <div id="Content" class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <!--<h1>-->
      <!--Page Header-->
      <!--<small>Optional description</small>-->
      <!--</h1>-->
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i>首页</a></li>
        <li class="active">商品管理</li>
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
    </section>
    <!-- /.content -->
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
  #Content {
    .breadcrumb {
      margin-right: 55%;
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
