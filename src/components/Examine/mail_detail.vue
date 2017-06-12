<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="main">
    <div class="content-wrapper ywt-content-wrapper" v-if = "isNotDetail">
      <!-- Content Header (Page header) -->
      <section class="content-header clearfix">
        <ol class="breadcrumb">
          <li><router-link to = "/index"><i class="fa fa-dashboard"></i> 首页</router-link></li>
          <li><router-link to = "/warden_mailbox">监狱长信箱</router-link></li>
          <li class="active">邮件详情</li>
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
              <h3 class="box-title"></h3>

              <div class="box-tools pull-right">
                <a href="#" class="btn btn-box-tool" data-toggle="tooltip" title="Previous"><i class="fa fa-chevron-left"></i></a>
                <a href="#" class="btn btn-box-tool" data-toggle="tooltip" title="Next"><i class="fa fa-chevron-right"></i></a>
              </div>
            </div>
            <!-- /.box-header -->
            <div class="box-body no-padding">
              <div class="mailbox-read-info">
                <h4 class = "mail-info-tit">罪犯申请</h4>
                <h5 class = "mail-info-subtit"><span class = "mailbox-read-time">发件人:</span> 王二
                  <span class="mailbox-read-time pull-right">2017-04-06 03:10:15</span></h5>
              </div>
              <!-- /.mailbox-controls -->
              <div class="mailbox-read-message with-border">
                <p>Hello John,</p>

                <p>Keffiyeh blog actually fashion axe vegan, irony biodiesel. Cold-pressed hoodie chillwave put a bird
                  on it aesthetic, bitters brunch meggings vegan iPhone. Dreamcatcher vegan scenester mlkshk. Ethical
                  master cleanse Bushwick, occupy Thundercats banjo cliche ennui farm-to-table mlkshk fanny pack
                  gluten-free. Marfa butcher vegan quinoa, bicycle rights disrupt tofu scenester chillwave 3 wolf moon
                  asymmetrical taxidermy pour-over. Quinoa tote bag fashion axe, Godard disrupt migas church-key tofu
                  blog locavore. Thundercats cronut polaroid Neutra tousled, meh food truck selfies narwhal American
                  Apparel.</p>
              </div>
              <!-- /.mailbox-read-info -->
              <div class="mailbox-controls with-border clearfix">
                 <textarea class="form-control reply-input" rows="2" placeholder="快捷回复"></textarea>
                 <button class = "btn btn-primary pull-right">回复</button>
              </div>
              <!-- /.mailbox-read-message -->
            </div>
            <!-- /.box-body -->
                
            </div>
            <!-- /.box -->
          </div>
        </div>
      </section>
    </div>
    <!-- /.content-wrapper -->
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
    mounted() {
      this.toUrl = this.$route.path;
      this.inDetail(); 
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
          
      }
      .mailbox-read-info {
          border-top:1px solid #ccc;
       /*   background: #edf6fa; */
      }
      .mailbox-read-message {
          border-top:1px solid #357ca5;
          background: #edf6fa;
      }
      .mailbox-controls {
          border-top: 1px solid #357ca5;
         /* background: #edf6fa;*/
      }
      .mail-info-tit {
          height: 30px;
          line-height: 30px;
          font-weight: bold;
      }
      .mail-info-subtit {
          margin-bottom: 10px;
      }
      .reply-input {
          margin-top: 10px;
          margin-bottom: 10px;
          border-radius: 5px;
      }
    }  
  }
</style>