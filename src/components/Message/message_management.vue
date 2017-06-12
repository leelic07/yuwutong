<template>
  <div class="content-wrapper" style="min-height: 537px;">

    <section class="content-header">

      <div class="row">
        <div class="col-xs-12">
          <ol class="breadcrumb" style="font-size:medium;">
            <li><router-link to = "/index"><i class="fa fa-dashboard"></i> 首页</router-link></li>
            <li class="active">监狱基本信息管理</li>
          </ol>
        </div>
      </div>
    </section>


    <section class="content" style="margin-top:-25px;">
      <div class="row">
        <div class="col-xs-8">
          <div class="panel box" style="margin-left:20%;background-image:url(/images/3.png);background-size:100%;background-repeat:no-repeat;">
            <div style="height:60px;margin-top:50px;margin-bottom:30px;">
              <p style="font-size:24px;color:white;width:35%;height:100%;margin:0 auto;background-image:url(/images/5.png);background-repeat:no-repeat;line-height:60px;text-align:center;" class="title">
                英山监狱
              </p>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <strong><i class="fa fa-map-marker margin-r-5" style="line-height:20px;"></i>监狱封面</strong>
              <p class="text-muted">
                <img src="/system/jails/images/000/000/001/thumb/%E8%8B%B1%E5%B1%B1%E7%9B%91%E7%8B%B1.jpg?1490751776" alt="%e8%8b%b1%e5%b1%b1%e7%9b%91%e7%8b%b1">
              </p>
              <hr>
              <strong><i class="fa fa-map-marker margin-r-5"></i>监狱所在省</strong>
              <p class="text-muted state" style="line-height:20px;">
                广西省
              </p>
              <hr>
              <strong><i class="fa fa-map-marker margin-r-5" style="line-height:20px;"></i>监狱所在市</strong>
              <p class="text-muted city">
                南宁市
              </p>
              <hr>
              <strong><i class="fa fa-map-marker margin-r-5" style="line-height:20px;"></i>监狱所在行政区</strong>
              <p class="text-muted district">
                南宁市
              </p>
              <hr>
              <strong><i class="fa fa-map-marker margin-r-5" style="line-height:20px;"></i>监狱所在街道</strong>
              <p class="text-muted street">
                七星区横塘路29号
              </p>
              <hr>
              <strong><i class="fa fa-file-text-o margin-r-5"></i>监狱简介</strong>
              <p class="text-muted description">
                广西英山监狱建于1968年，原址在柳州鹿寨县，2008年1月16日，从山区搬至桂林市近郊的七星区横塘路29号。是一所关押刑期15年以上的重刑犯监狱。
              </p>
            </div>
            <!-- /.box-body -->
            <div class="box-footer">
              <!--<a href="/jails/1/edit">编辑</a>-->
              <router-link to="/message_management/edit"></router-link>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
      data() {
          return {

          }
      }
  }
</script>

<style type="text/less" lang="less">

</style>
