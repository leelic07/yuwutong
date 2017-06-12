<template>
  <!-- Content Wrapper. Contains page content -->
  <div id="Content" class="content-wrapper">
    <section class="content-header" v-if="isManage">
      <div class="row">
        <div class="col-xs-12">
          <ol class="breadcrumb" style="font-size:medium;">
            <li><router-link to = "/index"><i class="fa fa-dashboard"></i> 首页 </router-link></li>
            <li class="active">商品管理</li>
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
                  <th>商品图片</th>
                  <th>商品名称</th>
                  <th>商品简介</th>
                  <th>商品条码</th>
                  <th>单价</th>
                  <th>单位</th>
                  <th>生产厂家</th>
                  <th>商品部类</th>
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
                  <button class="btn btn-default" data-toggle="modal" data-target="#modal-introduction">简介详情</button>
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
                  <router-link to="/commodity_management/edit" class = "btn btn-primary">编辑</router-link>
                  <button class = "btn btn-danger" data-toggle="modal" data-target="#modal-delete" >删除</button>
                </td>
              </tr>
              <tr>
                <td>
                  XXXX
                </td>
                <td>
                  3
                </td>
                <td>
                  <button class="btn btn-default" data-toggle="modal" data-target="#modal-introduction">简介详情</button>
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
                  <router-link to="/commodity_management/edit" class = "btn btn-primary">编辑</router-link>
                  <button class = "btn btn-danger">删除</button>
                </td>
              </tr>
              </tbody>
              </table>

              <!--<table class="table table-striped table-hover table-bordered dataTable no-footer" id="example1"
                     role="grid" aria-describedby="tTrolleys_info" style="width: 100%;">
                <thead>
                  <tr role="row" style="height: 0px;">
                    <th class="sorting_disabled" rowspan="1" colspan="1">
                      <div class="dataTables_sizing">商品图片</div>
                    </th>
                    <th class="sorting_disabled" rowspan="1" colspan="1">
                      <div class="dataTables_sizing">商品名称</div>
                    </th>
                    <th class="sorting_disabled" rowspan="1" colspan="1">
                      <div class="dataTables_sizing">商品简介</div>
                    </th>
                    <th class="sorting_disabled" rowspan="1" colspan="1">
                      <div class="dataTables_sizing">商品条码</div>
                    </th>
                    <th class="sorting_disabled" rowspan="1" colspan="1">
                      <div class="dataTables_sizing">单价</div>
                    </th>
                    <th class="sorting_disabled" rowspan="1" colspan="1">
                      <div class="dataTables_sizing">单位</div>
                    </th>
                    <th class="sorting_disabled" rowspan="1" colspan="1">
                      <div class="dataTables_sizing">生产厂家</div>
                    </th>
                    <th class="sorting_disabled" rowspan="1" colspan="1">
                      <div class="dataTables_sizing">商品部类</div>
                    </th>
                    <th rowspan="1" colspan="1">
                      <div class="dataTables_sizing">操作</div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                <tr role="row" class="odd">
                  <td><p style="line-height:80px;text-align:center"><img style="width:80px;height:80px"
                                                                         src="/system/items/avatars/000/000/015/original/timg.jpg?1495592477">
                  </p></td>
                  <td><p style="text-align:center">亲情卡</p></td>
                  <td><p style="line-height:80px;text-align:center"><a class="btn btn-default btn-xs"
                                                                       onclick="show(this)">简介详情</a></p>
                    <p class="description" style="display:none;">亲情卡</p>
                    <p></p></td>
                  <td><p style="line-height:80px;text-align:center">A</p></td>
                  <td><p style="line-height:80px;text-align:center">0.1</p></td>
                  <td><p style="line-height:80px;text-align:center">条</p></td>
                  <td><p style="text-align:center">湖南国科云通信息科技有限公司</p></td>
                  <td><p style="line-height:80px;text-align:center"><span>充值卡</span></p></td>
                  <td><p style="text-align:center;margin-top:10px;"><a style="color:#FF3030;"
                                                                       class="btn btn-default btn-sm"
                                                                       href="/items/15/delete">删除</a><br><br><router-link
                    class="btn btn-edit btn-sm btn-primary" to="commodity_management/edit">编辑</router-link></p></td>
                </tr>
                <tr role="row" class="even">
                  <td><p style="line-height:80px;text-align:center"><img style="width:80px;height:80px"
                                                                         src="/system/items/avatars/000/000/012/original/%E7%A2%B3%E9%85%B8%E5%A5%B3%E9%95%81%E7%89%87.jpg?1490956110">
                  </p></td>
                  <td><p style="text-align:center">碳酸铝镁咀嚼片</p></td>
                  <td><p style="line-height:80px;text-align:center"><a class="btn btn-default btn-xs"
                                                                       onclick="show(this)">简介详情</a></p>
                    <p class="description" style="display:none;">适应症为：·胆酸相关性疾病；急、慢性胃炎·反流性食管炎；胃、十二指肠溃疡·与胃酸有关的胃部不适症状</p>
                    <p></p></td>
                  <td><p style="line-height:80px;text-align:center">6936177313459</p></td>
                  <td><p style="line-height:80px;text-align:center">0.1</p></td>
                  <td><p style="line-height:80px;text-align:center">盒</p></td>
                  <td><p style="text-align:center">湖南国科云通信息科技有限公司</p></td>
                  <td><p style="line-height:80px;text-align:center"><span>医药保健</span></p></td>
                  <td><p style="text-align:center;margin-top:10px;"><a style="color:#FF3030;"
                                                                       class="btn btn-default btn-sm"
                                                                       href="/items/12/delete">删除</a><br><br><a
                    class="btn btn-edit btn-sm btn-primary" href="/items/12/edit">编辑</a></p></td>
                </tr>
                <tr role="row" class="odd">
                  <td><p style="line-height:80px;text-align:center"><img style="width:80px;height:80px"
                                                                         src="/system/items/avatars/000/000/011/original/%E6%84%9F%E5%BA%B7.jpg?1490955895">
                  </p></td>
                  <td><p style="text-align:center">复方氨酚烷胺片</p></td>
                  <td><p style="line-height:80px;text-align:center"><a class="btn btn-default btn-xs"
                                                                       onclick="show(this)">简介详情</a></p>
                    <p class="description" style="display:none;">
                      复方氨酚烷胺片，适应症为适用于缓解普通感冒及流行性感冒引起的发热、头痛、四肢酸痛、打喷嚏、流鼻涕、鼻塞、咽痛等症状。</p>
                    <p></p></td>
                  <td><p style="line-height:80px;text-align:center">6936177313459</p></td>
                  <td><p style="line-height:80px;text-align:center">0.01</p></td>
                  <td><p style="line-height:80px;text-align:center">盒</p></td>
                  <td><p style="text-align:center">湖南国科云通信息科技有限公司</p></td>
                  <td><p style="line-height:80px;text-align:center"><span>医药保健</span></p></td>
                  <td><p style="text-align:center;margin-top:10px;"><a style="color:#FF3030;"
                                                                       class="btn btn-default btn-sm"
                                                                       href="/items/11/delete">删除</a><br><br><a
                    class="btn btn-edit btn-sm btn-primary" href="/items/11/edit">编辑</a></p></td>
                </tr>
                <tr role="row" class="even">
                  <td><p style="line-height:80px;text-align:center"><img style="width:80px;height:80px"
                                                                         src="/system/items/avatars/000/000/010/original/timg.jpg?1490955745">
                  </p></td>
                  <td><p style="text-align:center">六位地黄丸</p></td>
                  <td><p style="line-height:80px;text-align:center"><a class="btn btn-default btn-xs"
                                                                       onclick="show(this)">简介详情</a></p>
                    <p class="description" style="display:none;">
                      六味地黄丸，中成药名。为补益剂，具有滋阴补肾之功效。用于肾阴亏损，头晕耳鸣，腰膝酸软，骨蒸潮热，盗汗遗精，消渴。</p>
                    <p></p></td>
                  <td><p style="line-height:80px;text-align:center">6936177313459</p></td>
                  <td><p style="line-height:80px;text-align:center">0.01</p></td>
                  <td><p style="line-height:80px;text-align:center">盒</p></td>
                  <td><p style="text-align:center">湖南国科云通信息科技有限公司</p></td>
                  <td><p style="line-height:80px;text-align:center"><span>医药保健</span></p></td>
                  <td><p style="text-align:center;margin-top:10px;"><a style="color:#FF3030;"
                                                                       class="btn btn-default btn-sm"
                                                                       href="/items/10/delete">删除</a><br><br><router-link
                    class="btn btn-edit btn-sm btn-primary" to="commodity_management/edit">编辑</router-link></p></td>
                </tr>
                <tr role="row" class="odd">
                  <td><p style="line-height:80px;text-align:center"><img style="width:80px;height:80px"
                                                                         src="/system/items/avatars/000/000/009/original/%E5%B7%A6%E6%B0%A7%E6%B0%9F%E6%B2%99%E6%98%9F.jpg?1490955644">
                  </p></td>
                  <td><p style="text-align:center">盐酸左氧氟沙星</p></td>
                  <td><p style="line-height:80px;text-align:center"><a class="btn btn-default btn-xs"
                                                                       onclick="show(this)">简介详情</a></p>
                    <p class="description" style="display:none;">喹诺酮类药物中的一种，具有广谱抗菌作用，抗菌作用强，对多数肠杆菌科细菌</p>
                    <p></p></td>
                  <td><p style="line-height:80px;text-align:center">6936177313459</p></td>
                  <td><p style="line-height:80px;text-align:center">0.01</p></td>
                  <td><p style="line-height:80px;text-align:center">盒</p></td>
                  <td><p style="text-align:center">湖南国科云通信息科技有限公司</p></td>
                  <td><p style="line-height:80px;text-align:center"><span>医药保健</span></p></td>
                  <td><p style="text-align:center;margin-top:10px;"><a style="color:#FF3030;"
                                                                       class="btn btn-default btn-sm"
                                                                       href="/items/9/delete">删除</a><br><br><a
                    class="btn btn-edit btn-sm btn-primary" href="/items/9/edit">编辑</a></p></td>
                </tr>
                <tr role="row" class="even">
                  <td><p style="line-height:80px;text-align:center"><img style="width:80px;height:80px"
                                                                         src="/system/items/avatars/000/000/008/original/%E8%AF%9D%E6%A2%85.jpg?1490955408">
                  </p></td>
                  <td><p style="text-align:center">话梅干</p></td>
                  <td><p style="line-height:80px;text-align:center"><a class="btn btn-default btn-xs"
                                                                       onclick="show(this)">简介详情</a></p>
                    <p class="description" style="display:none;">话梅的作用有健胃、敛肺、温脾、止血涌痰、消肿解毒、生津止渴等等</p>
                    <p></p></td>
                  <td><p style="line-height:80px;text-align:center">6936177313459</p></td>
                  <td><p style="line-height:80px;text-align:center">0.01</p></td>
                  <td><p style="line-height:80px;text-align:center">包</p></td>
                  <td><p style="text-align:center">湖南国科云通信息科技有限公司</p></td>
                  <td><p style="line-height:80px;text-align:center"><span>食品饮料</span></p></td>
                  <td><p style="text-align:center;margin-top:10px;"><a style="color:#FF3030;"
                                                                       class="btn btn-default btn-sm"
                                                                       href="/items/8/delete">删除</a><br><br><a
                    class="btn btn-edit btn-sm btn-primary" href="/items/8/edit">编辑</a></p></td>
                </tr>
                <tr role="row" class="odd">
                  <td><p style="line-height:80px;text-align:center"><img style="width:80px;height:80px"
                                                                         src="/system/items/avatars/000/000/007/original/%E5%A8%81%E5%8C%96%E9%A5%BC%E5%B9%B2.jpg?1490955272">
                  </p></td>
                  <td><p style="text-align:center">威化饼干</p></td>
                  <td><p style="line-height:80px;text-align:center"><a class="btn btn-default btn-xs"
                                                                       onclick="show(this)">简介详情</a></p>
                    <p class="description" style="display:none;">香甜可口威化饼干，超级美味。</p>
                    <p></p></td>
                  <td><p style="line-height:80px;text-align:center">6936177313459</p></td>
                  <td><p style="line-height:80px;text-align:center">0.01</p></td>
                  <td><p style="line-height:80px;text-align:center">盒</p></td>
                  <td><p style="text-align:center">湖南国科云通信息科技有限公司</p></td>
                  <td><p style="line-height:80px;text-align:center"><span>食品饮料</span></p></td>
                  <td><p style="text-align:center;margin-top:10px;"><a style="color:#FF3030;"
                                                                       class="btn btn-default btn-sm"
                                                                       href="/items/7/delete">删除</a><br><br><a
                    class="btn btn-edit btn-sm btn-primary" href="/items/7/edit">编辑</a></p></td>
                </tr>
                <tr role="row" class="even">
                  <td><p style="line-height:80px;text-align:center"><img style="width:80px;height:80px"
                                                                         src="/system/items/avatars/000/000/006/original/%E5%A4%A7%E7%99%BD%E5%85%94%E5%A5%B6%E7%B3%96.jpg?1490954876">
                  </p></td>
                  <td><p style="text-align:center">大白兔奶糖</p></td>
                  <td><p style="line-height:80px;text-align:center"><a class="btn btn-default btn-xs"
                                                                       onclick="show(this)">简介详情</a></p>
                    <p class="description" style="display:none;">大白兔奶糖是白色
                      、有嚼劲的圆柱形奶糖，质感类似西方的鸟结糖，如今大白兔奶糖已经成为中国首屈一指的糖果品牌，并且大白兔奶糖一直以其优异的品质，无比的美味和健康的形象受到无数消费者的追捧。
                    </p>
                    <p></p></td>
                  <td><p style="line-height:80px;text-align:center">6936177313459</p></td>
                  <td><p style="line-height:80px;text-align:center">0.01</p></td>
                  <td><p style="line-height:80px;text-align:center">包</p></td>
                  <td><p style="text-align:center">湖南国科云通信息科技有限公司</p></td>
                  <td><p style="line-height:80px;text-align:center"><span>食品饮料</span></p></td>
                  <td><p style="text-align:center;margin-top:10px;"><a style="color:#FF3030;"
                                                                       class="btn btn-default btn-sm"
                                                                       href="/items/6/delete">删除</a><br><br><a
                    class="btn btn-edit btn-sm btn-primary" href="/items/6/edit">编辑</a></p></td>
                </tr>
                <tr role="row" class="odd">
                  <td><p style="line-height:80px;text-align:center"><img style="width:80px;height:80px"
                                                                         src="/system/items/avatars/000/000/005/original/%E5%86%9C%E5%A4%AB%E5%B1%B1%E6%B3%89.jpg?1490954712">
                  </p></td>
                  <td><p style="text-align:center">农夫山泉纯净水</p></td>
                  <td><p style="line-height:80px;text-align:center"><a class="btn btn-default btn-xs"
                                                                       onclick="show(this)">简介详情</a></p>
                    <p class="description" style="display:none;">
                      农夫山泉——饮用天然水选取无污染的优质水源，仅对水做最小限度的、必要的处理，去除了原水中极少的杂质，保存了原水中钾、钙、钠、镁、偏硅酸等对人体有益的矿物元素
                      ，呈天然弱碱性，有利于长期饮用 </p>
                    <p></p></td>
                  <td><p style="line-height:80px;text-align:center">6936177313459</p></td>
                  <td><p style="line-height:80px;text-align:center">0.01</p></td>
                  <td><p style="line-height:80px;text-align:center">瓶</p></td>
                  <td><p style="text-align:center">湖南国科云通信息科技有限公司</p></td>
                  <td><p style="line-height:80px;text-align:center"><span>食品饮料</span></p></td>
                  <td><p style="text-align:center;margin-top:10px;"><a style="color:#FF3030;"
                                                                       class="btn btn-default btn-sm"
                                                                       href="/items/5/delete">删除</a><br><br><a
                    class="btn btn-edit btn-sm btn-primary" href="/items/5/edit">编辑</a></p></td>
                </tr>
                <tr role="row" class="even">
                  <td><p style="line-height:80px;text-align:center"><img style="width:80px;height:80px"
                                                                         src="/system/items/avatars/000/000/004/original/%E7%89%99%E5%88%B7.jpg?1490954456">
                  </p></td>
                  <td><p style="text-align:center">黑人软柄牙刷</p></td>
                  <td><p style="line-height:80px;text-align:center"><a class="btn btn-default btn-xs"
                                                                       onclick="show(this)">简介详情</a></p>
                    <p class="description" style="display:none;">柔软手柄，及软毛，能够极致清理好牙齿，让口腔十分健康</p>
                    <p></p></td>
                  <td><p style="line-height:80px;text-align:center">6936177313459</p></td>
                  <td><p style="line-height:80px;text-align:center">0.01</p></td>
                  <td><p style="line-height:80px;text-align:center">把</p></td>
                  <td><p style="text-align:center">湖南国科云通信息科技有限公司</p></td>
                  <td><p style="line-height:80px;text-align:center"><span>洗化日用</span></p></td>
                  <td><p style="text-align:center;margin-top:10px;"><a style="color:#FF3030;"
                                                                       class="btn btn-default btn-sm"
                                                                       href="/items/4/delete">删除</a><br><br><a
                    class="btn btn-edit btn-sm btn-primary" href="/items/4/edit">编辑</a></p></td>
                </tr>
                <tr role="row" class="even">
                  <td><p style="line-height:80px;text-align:center"><img style="width:80px;height:80px"
                                                                         src="/system/items/avatars/000/000/004/original/%E7%89%99%E5%88%B7.jpg?1490954456">
                  </p></td>
                  <td><p style="text-align:center">黑人软柄牙刷</p></td>
                  <td><p style="line-height:80px;text-align:center"><a class="btn btn-default btn-xs"
                                                                       onclick="show(this)">简介详情</a></p>
                    <p class="description" style="display:none;">柔软手柄，及软毛，能够极致清理好牙齿，让口腔十分健康</p>
                    <p></p></td>
                  <td><p style="line-height:80px;text-align:center">6936177313459</p></td>
                  <td><p style="line-height:80px;text-align:center">0.01</p></td>
                  <td><p style="line-height:80px;text-align:center">把</p></td>
                  <td><p style="text-align:center">湖南国科云通信息科技有限公司</p></td>
                  <td><p style="line-height:80px;text-align:center"><span>洗化日用</span></p></td>
                  <td><p style="text-align:center;margin-top:10px;"><a style="color:#FF3030;"
                                                                       class="btn btn-default btn-sm"
                                                                       href="/items/4/delete">删除</a><br><br><a
                    class="btn btn-edit btn-sm btn-primary" href="/items/4/edit">编辑</a></p></td>
                </tr>
                <tr role="row" class="even">
                  <td><p style="line-height:80px;text-align:center"><img style="width:80px;height:80px"
                                                                         src="/system/items/avatars/000/000/004/original/%E7%89%99%E5%88%B7.jpg?1490954456">
                  </p></td>
                  <td><p style="text-align:center">黑人软柄牙刷</p></td>
                  <td><p style="line-height:80px;text-align:center"><a class="btn btn-default btn-xs"
                                                                       onclick="show(this)">简介详情</a></p>
                    <p class="description" style="display:none;">柔软手柄，及软毛，能够极致清理好牙齿，让口腔十分健康</p>
                    <p></p></td>
                  <td><p style="line-height:80px;text-align:center">6936177313459</p></td>
                  <td><p style="line-height:80px;text-align:center">0.01</p></td>
                  <td><p style="line-height:80px;text-align:center">把</p></td>
                  <td><p style="text-align:center">湖南国科云通信息科技有限公司</p></td>
                  <td><p style="line-height:80px;text-align:center"><span>洗化日用</span></p></td>
                  <td><p style="text-align:center;margin-top:10px;"><a style="color:#FF3030;"
                                                                       class="btn btn-default btn-sm"
                                                                       href="/items/4/delete">删除</a><br><br><a
                    class="btn btn-edit btn-sm btn-primary" href="/items/4/edit">编辑</a></p></td>
                </tr>
                <tr role="row" class="even">
                  <td><p style="line-height:80px;text-align:center"><img style="width:80px;height:80px"
                                                                         src="/system/items/avatars/000/000/004/original/%E7%89%99%E5%88%B7.jpg?1490954456">
                  </p></td>
                  <td><p style="text-align:center">黑人软柄牙刷</p></td>
                  <td><p style="line-height:80px;text-align:center"><a class="btn btn-default btn-xs"
                                                                       onclick="show(this)">简介详情</a></p>
                    <p class="description" style="display:none;">柔软手柄，及软毛，能够极致清理好牙齿，让口腔十分健康</p>
                    <p></p></td>
                  <td><p style="line-height:80px;text-align:center">6936177313459</p></td>
                  <td><p style="line-height:80px;text-align:center">0.01</p></td>
                  <td><p style="line-height:80px;text-align:center">把</p></td>
                  <td><p style="text-align:center">湖南国科云通信息科技有限公司</p></td>
                  <td><p style="line-height:80px;text-align:center"><span>洗化日用</span></p></td>
                  <td><p style="text-align:center;margin-top:10px;"><a style="color:#FF3030;"
                                                                       class="btn btn-default btn-sm"
                                                                       href="/items/4/delete">删除</a><br><br><a
                    class="btn btn-edit btn-sm btn-primary" href="/items/4/edit">编辑</a></p></td>
                </tr>
                </tbody>
              </table>-->
            </div>
            <!-- /.box-body -->
          </div>
        </div>
      </div>
    </section>

    <div class="modal fade" id="modal-introduction">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title">简介详情</h4>
          </div>
          <div class="modal-body">
            <p>亲情卡</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default btn-block" data-dismiss="modal">关闭</button>     
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->

    <div class="modal modal-danger fade" id="modal-delete">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title">警示框</h4>
            </div>
            <div class="modal-body">
              <p>删除数据操作不可恢复！</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline pull-left" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-outline">确认</button>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- /.modal -->

    <!--点击编辑路由入口-->
    <router-view></router-view>
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
        toUrl: '',//到达路由
        fromUrl: '',//进入路由
        searchVal: ''
      }
    },
    watch: {
      $route(to, from) {//监听路由变化
        this.toUrl = to.path;
      },
      toUrl() {
        this.inEdit();
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
      //控制进入编辑页隐藏原先的列表页
      inEdit(){
        const editUrl = '/commodity_management/edit/3';
        const index = editUrl.lastIndexOf('/');
        if (this.toUrl.substring(0, index) == "/commodity_management/edit") {
          this.isManage = false;
        } else {
          this.isManage = true;
        }
      },
      search(data) {
        this.searchVal = data;
        $("#shopTable").DataTable().search(this.searchVal).draw();
      }
    },
    components: {
      Search
    },
    mounted() {
      this.toUrl = this.$route.path;
      this.inEdit();
      $("#shopTable").DataTable({
        "ordering": false,
        "lengthMenu":[1,10,20,30,40,50],
        "pageLength": 10,
        "pagingType": "full_numbers",
        "dom": "<'col-sm-6'l><t><'col-sm-5'i><'col-sm-7'p>",
        "language": {
          "search":"",
          "info":"共有_MAX_条数据，总共_PAGES_页",
          "lengthMenu":"每页显示 _MENU_ 条",
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

<style type="text/less" lang="less" scoped>
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
    }
  }
</style>
