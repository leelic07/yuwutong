<template>
    <!-- Content Wrapper. Contains page content -->
  <div id="Content" class="content-wrapper">

    <section class="content-header">
      <div class="row">
        <div class="col-xs-12">
          <ol class="breadcrumb" style="font-size:medium;">
            <li><router-link to = "/index"><i class="fa fa-dashboard"></i> 首页 </router-link></li>
            <li><router-link to = "/laws_management"> 法律法规信息管理 </router-link></li>
            <li class="active"> 添加法律信息 </li>
          </ol>
        </div>
      </div>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-xs-8 col-xs-offset-2">
            <div class="box box-info law-list">
                <div class="box-header with-border">
                    <h3 class="box-title"></h3>
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                    <div class="col-xs-10 col-xs-offset-1">
                        <div class="input-group">
                            <span class="input-group-addon">法律名称</span>
                            <input type="email" class="form-control" placeholder="请填写法律名称">
                        </div>

                        <div class="input-group laws-intro-box">
                            <span class="input-group-addon">法律简介</span>
                            <editor id="editor_id" height="400px" width="700px" :content="editorText" 
                            pluginsPath="/node_modules/kindeditor/plugins" :loadStyleMode="false"  @on-content-change="onContentChange">
                            </editor>
                            <!--<textarea name="" id="" class="col-xs-12" rows="12"></textarea>-->
                        </div>

                        <button class = "btn btn-default btn-file add-pic-btn">
                            <i class="fa fa-paperclip"></i> 添加图片
                            <input type="file" name="attachment">
                        </button>

                    </div>
                </div>

                <div class="box-footer">
                    <button class = "btn btn-info pull-right">更新</button>
                    
                </div>
            </div>
            
        </div>
      </div>
    </section>

  </div>
</template>
<style type="text/less" lang="less" scoped>
    .content {
        .box-body {
            .laws-intro-box {
                margin-top: 30px;
            }
            .add-pic-btn {
                margin-top: 30px;
            }
        }
    }
</style>
<script>
export default {
    data() {
      return {
        isManage : true,
        editorText: 'dd'
      }
    },
    methods:{
        onContentChange(val) {
            console.log(val);
            this.editorText = val
        },
        send() {
            
        }
    }
  }
</script>