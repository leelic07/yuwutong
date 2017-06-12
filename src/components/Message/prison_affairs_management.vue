<template>
    <!-- Content Wrapper. Contains page content -->
  <div id="Content" class="content-wrapper">
    <section class="content-header">
      <div class="row">
        <div class="col-xs-12">
          <ol class="breadcrumb" style="font-size:medium;">
            <li><router-link to = "/index"><i class="fa fa-dashboard"></i> 首页 </router-link></li>
            <li class="active">狱务公开信息管理</li>
          </ol>
        </div>
      </div>
    </section>

    <!-- Main content -->
    <section class="content" v-if="isManage">
      <div class="row">
        <div class="col-xs-8">
            <!-- Custom Tabs (Pulled to the right) -->
            <div class="nav-tabs-custom">
                <ul class="nav nav-tabs pull-right">
                    <li class="active"><a href="#tab_1-1" data-toggle="tab">狱务公开</a></li>
                    <li><a href="#tab_2-2" data-toggle="tab">工作动态</a></li>
                    <li><a href="#tab_3-2" data-toggle="tab">投诉建议公示</a></li>
                    <li></li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane active" id="tab_1-1">
                        <div class = "col-sm-6 pull-right">
                            <Search v-on:search = "search"></Search>
                        </div>
                        <table id="shopTable" class="table table-bordered table-striped table-hover">
                            <thead>
                                <tr>
                                <th>新闻标题</th>
                                <th>新闻内容</th>
                                <th>新闻图片</th>
                                <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                X
                                </td>
                                <td>
                                X
                                </td>
                                <td>
                                X
                                </td>
                                <td>
                                    <router-link to="/commodity_management/edit" class = "btn btn-primary">编辑</router-link>
                                    <button class = "btn btn-danger" data-toggle="modal" data-target="#modal-delete" >删除</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div> 
                    <!-- /.tab-pane -->
                    <div class="tab-pane" id="tab_2-2">
                        
                    </div>
                    <!-- /.tab-pane -->
                    <div class="tab-pane" id="tab_3-2">
                        
                    </div>
                <!-- /.tab-pane -->
                </div>
                <!-- /.tab-content -->
            </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style type="text/less" lang="less" scoped>
    .content {
        
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