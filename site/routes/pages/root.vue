<template>
  <c-app id="page-install-root">
    <c-content>
      <section class="sign u-m-auto">
        <h1 class="sign__title">超级管理员</h1>
        <p class="sign__text">KISS CLOUD</p>
        <div class="sign__body">
          <el-form
            v-loading="loading"
            :model="form"
            ref="form"
            :rules="rules"
            status-icon
            class="demo-ruleForm"
          >
            <el-form-item label="姓名" prop="name">
              <el-input size="small" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="用户名" prop="username">
              <el-input size="small" v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input size="small" v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="mobile">
              <el-input size="small" v-model="form.mobile"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input size="small" type="password" v-model="form.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="repeatPassword">
              <el-input
                size="small"
                type="password"
                v-model="form.repeatPassword"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item style="margin-top: 25px;">
              <c-button type="primary" @click.prevent="PostRoot" block>创建</c-button>
            </el-form-item>
            <br>
          </el-form>
        </div>
      </section>
    </c-content>
  </c-app>
</template>

<script>
import * as api from '../../../src/api';
import * as codes from '../../../src/codes';
import merge from 'merge';

export default {
  name: 'RegisterView',
  data() {
    return {
      loading: false,
      form: {
        groupId: 0,
        name: '',
        username: '',
        mobile: '',
        password: '',
        repeatPassword: ''
      },
      rules: {
        name: { required: true, message: '请输入姓名', trigger: 'change' },
        username: {
          required: true,
          message: '请输入用户名',
          trigger: 'change'
        },
        email: [
          { required: true, message: '请输入邮箱', trigger: 'change' },
          {
            type: 'email',
            message: '请输入正确的邮箱',
            trigger: 'change'
          }
        ],
        mobile: { required: true, message: '请输入手机号', trigger: 'change' },
        password: { required: true, message: '请输入密码', trigger: 'change' },
        repeatPassword: {
          required: true,
          message: '请输入重复密码',
          trigger: 'change'
        }
      }
    };
  },
  methods: {
    PostRoot() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true;
          let form = merge({}, this.form);
          form.mobile = '+86-' + this.form.mobile;
          let res = await api.PostRoot(form);
          if (res.code === codes.Success) {
            this.$message({
              message: '超级管理员创建成功！',
              type: 'success'
            });
            this.$router.push({ path: '/auth/login' });
          }
          this.loading = false;
        }
      });
    }
  }
};
</script>

<style lang="scss">
#page-install-root {
  .sign {
    top: -100px;
  }
  .sign__title {
    font-size: 22px;
  }
  .sign__footer {
    /* margin-top: 16px; */
    position: fixed;
    bottom: 10px;
    left: 0;
    right: 0;
  }
  .el-form-item {
    margin-bottom: 0;
  }
  .el-form-item__label {
    margin-bottom: -5px;
  }
  .el-form-item__error {
    left: auto;
    right: 0;
  }
  .el-input__suffix {
    display: none;
  }
}
</style>
