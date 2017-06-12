<template>
  <!-- Content Wrapper. Contains page content -->
  <div id="Content" class="content-wrapper">
    <section class="content-header" v-if="isManage">
      <div class="row">
        <div class="col-xs-12">
          <ol class="breadcrumb" style="font-size:medium;">
            <li><router-link to = "/index"><i class="fa fa-dashboard"></i> 首页 </router-link></li>
            <li class="active">囚犯账户信息管理</li>
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
                  <th>囚号</th>
                  <th>姓名</th>
                  <th>性别</th>
                  <th>罪名</th>
                  <th>监区</th>
                  <th>账户余额</th>
                  <th>操作记录</th>
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
                  X
                </td>
                <td>
                  X
                </td>
                <td>
                  X
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
  }
</style>
