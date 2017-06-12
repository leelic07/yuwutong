<template>
  <!-- /.content-wrapper -->
  <div style="min-height: 537px;">

    <section class="content-header">
      <div class="row">
        <div class="col-xs-12">
          <ol class="breadcrumb" style="font-size:medium;">
            <li><router-link to = "/index"><i class="fa fa-dashboard"></i> 首页 </router-link></li>
            <li><router-link to = "/commodity_management">商品信息管理</router-link></li>
            <li class="active">商品信息编辑</li>
          </ol>
        </div>
      </div>
    </section>

    <section class="content" style="margin-top:-25px;">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <div class="box box-info">
            <form class="form-horizontal" id="edit_item_15" enctype="multipart/form-data" action="/items/15" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="_method" value="patch"><input type="hidden" name="authenticity_token" value="JE0TlFNn6FRGw1jKhJaZ0IE9Pzia63ndePYYjDlDejKjftazBv4jAUuScXjBsK5wmjWdjYv7TrAsvp/WJGJlTQ==">
              <div class="box-header with-border">
                <div class="box-title"></div>
              </div>
              <div class="box-body">
                <div class="input-group" style="padding:10px 100px 20px">
                  <span class="input-group-addon input-group-lg">商品条码</span>
                  <input placeholder="请填写商品条码" size="60x12" class="form-control" type="text" value="A" name="item[barcode]" id="item_barcode">
                </div>
                <div class="input-group" style="padding:10px 100px 20px">
                  <span class="input-group-addon input-group-lg">商品名称</span>
                  <input placeholder="请填写商品名称" class="form-control" type="text" value="亲情卡" name="item[title]" id="item_title">
                  <input value="1" type="hidden" name="item[jail_id]" id="item_jail_id">
                </div>
                <div class="input-group" style="padding:10px 100px 20px">
                  <span class="input-group-addon input-group-lg">商品简介</span>
                  <textarea placeholder="请填写商品简介" class="form-control" name="item[description]" id="item_description" cols="60" rows="12">亲情卡</textarea>
                </div>
                <div class="input-group" style="padding:10px 100px 20px">
                  <span class="input-group-addon input-group-lg">单位</span>
                  <input placeholder="请填写商品单位" class="form-control" type="text" value="条" name="item[unit]" id="item_unit">
                </div>
                <div class="input-group" style="padding:10px 100px 20px">
                  <span class="input-group-addon input-group-lg">单价</span>
                  <input placeholder="请填写商品单价" class="form-control" type="text" value="0.1" name="item[price]" id="item_price">
                </div>

                <div class="input-group" style="padding:10px 100px 20px">
                  <div class="btn btn-default btn-file">
                    <i class="fa fa-paperclip"></i> 添加商品图片
                    <input class="form-contrller" type="file" name="item[avatar]" id="item_avatar">
                  </div>
                </div>

                <div class="input-group" style="padding:10px 100px 20px">
                  <span class="input-group-addon input-group-lg">生产厂家</span>
                  <input class="form-control" type="text" value="湖南国科云通信息科技有限公司" name="item[factory]" id="item_factory">
                </div>
                <div class="input-group" style="padding:10px 100px 20px">
                  <span class="input-group-addon input-group-lg">请选择商品部类</span>
                  <select name="item[category_id]" id="item_category_id"><option value="1">洗化日用</option>
                    <option value="2">食品饮料</option>
                    <option value="3">服饰鞋帽</option>
                    <option value="4">医药保健</option>
                    <option selected="selected" value="5">充值卡</option></select>
                </div>
                <div class="box-footer">
                  <button name="button" type="submit" class="btn btn-info pull-right save btn-add">更新</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
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
