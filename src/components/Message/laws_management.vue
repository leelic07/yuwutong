<template>
    <!-- Content Wrapper. Contains page content -->
  <div id="Content" class="content-wrapper">
    <section class="content-header">
      <div class="row">
        <div class="col-xs-12">
          <ol class="breadcrumb" style="font-size:medium;">
            <li><router-link to = "/index"><i class="fa fa-dashboard"></i> 首页 </router-link></li>
            <li class="active">法律法规信息管理</li>
          </ol>
        </div>
      </div>
    </section>

    <!-- Main content -->
    <section class="content" v-if="isManage">
      <div class="row">
        <div class="col-xs-4">
            <router-link to = "/laws_add" class = "btn btn-block btn-primary">添加法律法规信息</router-link>

            <div class="box box-solid law-list">
                <div class="box-header with-border">
                    <h3 class="box-title">法律法规列表</h3>
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                    <ul class = "products-list product-list-in-box">
                        <li><i class = "fa fa-envelope-o list-icon"></i>中华人民共和国刑法</li>
                    </ul>
                </div>
            </div>
            
        </div>
        <div class="col-xs-8">
            <div class="box box-primary laws-box">
                <div class="box-header with-border">
                    <h3 class="box-title">法律内容</h3>
                </div>
                <!-- /.box-header -->
                <div class="box-body laws-content-box">
                    <!-- Custom Tabs (Pulled to the right) -->
                    <div class="nav-tabs-custom">
                        
                        <!-- /.tab-content -->
                    </div>
                </div>
                <div class="box-footer">
                    <div class="col-xs-4 col-xs-offset-5">
                        <button class = "btn btn-danger">删除</button>
                        <router-link to="/commodity_management/edit" class = "btn btn-primary">编辑</router-link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style type="text/less" lang="less" scoped>
    #Content {
        .law-list {
            margin-top: 20px;
            .list-icon {
                margin-right: 10px;
            }
        }
        .laws-box {
            margin-top:0;
            .laws-content-box {
                overflow-y: scroll;
                height: 650px;
            }
        }
        
    }
</style>
<script>
export default {
    data() {
      return {
        isManage : true
      }
    },
    methods:{
        send() {
            
        }
    }
  }
</script>