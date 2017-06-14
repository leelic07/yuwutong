<template>
  <!-- Content Wrapper. Contains page content -->
  <div id="Content" class="content-wrapper">
    <section class="content-header" v-if="isManage">
      <div class="row">
        <div class="col-xs-12">
          <ol class="breadcrumb" style="font-size:medium;">
            <li><router-link to = "/index"><i class="fa fa-dashboard"></i> 首页 </router-link></li>
            <li class="active">家属注册管理</li>
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
                  <th>电话</th>
                  <th>身份证号</th>
                  <th>申请时间</th>
                  <th>囚号</th>
                  <th>关系</th>
                  <th>申请状态</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
              <tr v-for = "family in families">
                <td>
                  {{family.name}}
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
                <td>
                  <button class="btn btn-primary" :class = "{'hidden':false}" data-toggle="modal" data-target="#modal-authorize">授权</button>
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

    <div class="modal fade" id="modal-authorize">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-light-blue color-palette">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title"><i class="fa-edit fa"></i> 授权</h4>
          </div>
          <div class="modal-body clearfix">
            <div class = "applicant-info-box col-xs-12">
              <p class = "col-xs-12">请核对申请人照片：</p>
              <ul class = "list-unstyled col-xs-12">
                <li class = "pull-left" v-for = "(img,index) in applierImgs" :class = "{'col-xs-4':isSmallImg,'col-xs-12':!isSmallImg,'hidden':isHidden[index]}" @click = "changeSize(index)">
                  <img src="@/../static/dist/img/avatar5.png" class = "applicant-photo">
                </li>
              </ul>
            </div>
            <div class="btn-group col-xs-12">
              <button class="btn btn-primary btn-block">同意</button>
              <button class="btn btn-danger btn-block">不同意</button>
              <button class="btn btn-default btn-block" data-dismiss="modal">关闭</button>
            </div>  
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
        families: [{"name":"liner"},{"name":"dalin"}],
        isManage: true,
        searchVal: '',
        isSmallImg: true,
        applierImgs: [{},{},{}],
        isHidden:[],
      }
    },
    methods: {
      getFamilyRegistInfo() {
        axios.get('/registrations.json').then(res => {
         // this.families = res.data.orders;
          console.log(res);
        }).catch(err => {
          console.log(err);
        });
      },
      search(data) {
        this.searchVal = data;
        $("#shopTable").DataTable().search(data).draw();
      },
      changeSize(i) {
        this.isSmallImg = !this.isSmallImg;
        for (let j = 0;j < this.applierImgs.length;j ++)　{
          if (this.isSmallImg == false) {
            this.isHidden[j] = true;
          }else {
             this.isHidden[j] = false;
          }
        }
        this.isHidden[i] = false;
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

      this.getFamilyRegistInfo();
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

    .modal-content {
      border-radius: 8px;

      .modal-header {
        border-radius: 8px 8px 0 0;
      }
      .applicant-info-box {
         margin: 10px 0 50px;

        .applicant-photo {
          width: 90%;
        }
      }
      

    }
  }
</style>
