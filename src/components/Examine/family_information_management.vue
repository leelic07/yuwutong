<template>
  <!-- Content Wrapper. Contains page content -->
  <div id="Content" class="content-wrapper">
    <section class="content-header" v-if="isManage">
      <div class="row">
        <div class="col-xs-12">
          <ol class="breadcrumb" style="font-size:medium;">
            <li><router-link to = "/index"><i class="fa fa-dashboard"></i> 首页 </router-link></li>
            <li class="active">家属信息管理</li>
          </ol>
        </div>
      </div>
    </section>

    <!-- Main content -->
    <section class="content" v-if="isManage">
      <div class="row">
        <div class="col-xs-12">
          <div class="box">
            <!-- /.box-header -->
            <div class="box-body">
             <div class = "col-sm-6 pull-right">
               <Search v-on:search = "search"></Search>
             </div>
              <table id="shopTable" class="table table-bordered table-striped table-hover">
              <thead>
                <tr>
                  <th>姓名</th>
                  <th>身份证</th>
                  <th>电话</th>
                  <th>关系</th>
                  <th>对应囚犯</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                <td>
                  XXXX
                </td>
                <td>
                  23
                </td>
                <td>
                  X
                </td>
                <td>
                  X
                </td>
                <td>
                  <span data-toggle="modal" data-target="#modal-prisoner-info">张三</span>
                </td>
              </tr>
              <tr>
                <td>
                  XXXX
                </td>
                <td>
                  23
                </td>
                <td>
                  X
                </td>
                <td>
                  X
                </td>
                <td>
                  <span data-toggle="modal" data-target="#modal-prisoner-info">张三</span>
                </td>
              </tr>
              <tr>
                <td>
                  XXXX
                </td>
                <td>
                  23
                </td>
                <td>
                  X
                </td>
                <td>
                  X
                </td>
                <td>
                  <span data-toggle="modal" data-target="#modal-prisoner-info">张三</span>
                </td>
              </tr>
              <tr>
                <td>
                  XXXX
                </td>
                <td>
                  23
                </td>
                <td>
                  X
                </td>
                <td>
                  X
                </td>
                <td>
                  <span data-toggle="modal" data-target="#modal-prisoner-info">张三</span>
                </td>
              </tr>
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
                  X
                </td>
                <td>
                  X
                </td>
              </tr>
              </tbody>
              </table>
            </div>
            <!-- /.box-body -->
          </div>
        </div>
      </div>
    </section>

    <div class="modal fade" id="modal-prisoner-info">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-light-blue color-palette">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title"><i class="fa-file-text fa"></i> 囚犯信息</h4>
          </div>
          <div class="modal-body">
            <ul class = "list-unstyled clearfix">
              <li class = "col-xs-6">姓名：</li>
              <li class = "col-xs-6">性别：</li>
              <li class = "col-xs-6">囚号：</li>
              <li class = "col-xs-6">监区：</li>
              <li class = "col-xs-6">罪名：</li>
            </ul>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default col-xs-offset-4 col-xs-4" data-dismiss="modal">关闭</button>     
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->

    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

</template>

<script>
  import Search from '../tools/Search-Input.vue'
  import axios from 'axios'
  export default {
    data() {
      return {
        order: [],
        isManage: true,
        searchVal: ''
      }
    },
    methods: {
      getAllCommodity() {
        axios.get('/orders').then(res => {
          this.orders = res.data.orders;
          console.log(this.orders);
        }).catch(err => {
          console.log(err);
        });
      },
      search(data) {
        this.searchVal = data;
        $("#shopTable").DataTable().search(data).draw();
      }
    },
    components: {
      Search
    },
    mounted() {
      $("#shopTable").DataTable({
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
      });

     // this.getAllCommodity();
    }
  }
</script>

<style type="text/less" lang="less">
  #Content {
    .content-header {
      
      .breadcrumb {
        margin-bottom: 0;
      }
    }

    .box {
      margin-top: 15px;
      .dataTables_filter {
        label {
          float: right;
          margin-left: 80%;
        }
      }

      select {
        border-radius: 4px;
        width: 100px;
        margin-right: 10px;
      }
    }

    #modal-prisoner-info {
      .modal-title {
        i {
          margin-right: 5px;
        }
      }
      ul {
        li {
          line-height: 38px;
        }
      }
    }
  }
</style>
