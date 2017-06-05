<template>
    <div class = "login-content-box">
        <div class = "login-box">
            <div class = "login-box-body">
                <h2 class = "login-tit">狱务公开管理平台</h2>
                <form action="/login" method="post">
                    <div class="form-group has-feedback">
                        <input type="text" class="form-control" placeholder="监狱代码" name = "prison">
                        <span class="fa fa-university form-control-feedback"></span>
                    </div>
                    <div class="form-group has-feedback">
                        <input type="text" class="form-control" placeholder="用户名"  name = "username">
                        <span class="glyphicon glyphicon-user form-control-feedback"></span>
                    </div>
                    <div class="form-group has-feedback">
                        <input type="password" class="form-control" placeholder="密码" name = "password">
                        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                    </div>
                    <div class="row">
                        <div class="col-xs-8">
                            <p class = "warn-text" v-show = "isWrong">用户名或密码错误!</p>
                        </div>
                        <div class="col-xs-4">
                        <button type="submit" class="btn btn-primary btn-block btn-flat">登录</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        isWrong: false
      }
    },
    methods:{

    }
}
</script>
<style type="text/less" lang="less" scoped>
   .login-content-box {
       margin-top: 160px;
       background-color: #4f98c2;

       .login-box {
          margin: 0 auto;

          .login-box-body {
            background: transparent;
            padding-top: 0;

            .login-tit {
              color: #fff;
              text-align: center;
              font-weight: normal;
              line-height: 80px;
            }

            .warn-text {
                color: #fff;
            }

            .btn-primary {
                background: #186c9c;
            }
          }
       }
   }
</style>