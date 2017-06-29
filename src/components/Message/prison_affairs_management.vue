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
        <div class="col-xs-12">
            <!-- Custom Tabs (Pulled to the right) -->
            <div class="nav-tabs-custom">
                <ul class="nav nav-tabs">
                    <li class="active"><a href="#tab_1-1" data-toggle="tab">狱务公开</a></li>
                    <li><a href="#tab_2-2" data-toggle="tab">工作动态</a></li>
                    <li><a href="#tab_3-2" data-toggle="tab">投诉建议公示</a></li>
                    <router-link to = "/" class="btn btn-primary pull-right">添加狱务公开信息</router-link>
                </ul>
                <div class="tab-content clearfix">
                    <div class="tab-pane active" id="tab_1-1">
                        <div class = "col-sm-6 pull-right">
                            <Search v-on:search = "search"></Search>
                        </div>
                        <table id="newsTable" class="table table-bordered table-striped table-hover">
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
                        <div class = "col-sm-6 pull-right">
                            <Search v-on:search = "search"></Search>
                        </div>
                        <table id="jobTable" class="table table-bordered table-striped table-hover">
                            <thead>
                                <tr>
                                <th>工作动态标题</th>
                                <th>工作动态内容</th>
                                <th>工作动态图片</th>
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
                    <div class="tab-pane" id="tab_3-2">
                        <div class = "col-sm-6 pull-right">
                            <Search v-on:search = "search"></Search>
                        </div>
                        <table id="publicityTable" class="table table-bordered table-striped table-hover">
                            <thead>
                                <tr>
                                <th>公示标题</th>
                                <th>公示内容</th>
                                <th>公示图片</th>
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
                </div>
                <!-- /.tab-content -->
            </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style type="text/less" lang="less">
    #Content {
        .nav-tabs-custom {
            select {
                border-radius: 4px;
                width: 100px;
                margin-right: 10px;
                margin-left: -14px;
            }
        }
    }
</style>
<script>
import Search from '../tools/Search-Input.vue'
import axios from 'axios'
export default {
    data() {
      return {
        isManage : true
      }
    },
    methods:{
        send() {
            
        }
    },
    components: {
      Search
    },
    mounted() {
        $("#newsTable,#jobTable,#publicityTable").DataTable({
            "ordering": false,
            "lengthMenu":[1,10,20,30,40,50],
            "pageLength": 10,
            "pagingType": "full_numbers",
            "dom": "<'col-sm-6'l><t><'col-sm-5'i><'col-sm-7'p>",
            "language": {
                "search":"",
                "info":"共有_MAX_条数据，总共_PAGES_页",
                "lengthMenu":" _MENU_ 条数据",
                "zeroRecords": "未搜索到相关数据",
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