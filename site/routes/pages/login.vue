<template>
  <c-app id="page-login">
    <c-content>
      <section class="sign u-m-auto">
        <h1 class="sign__title">统一账户中心</h1>
        <p class="sign__text">KISS CLOUD</p>
        <div class="sign__body">
          <!-- <h1 class="sign__title">Kiss Console</h1> -->
          <!-- <p class="sign__text">统一授权中心</p> -->
          <c-form v-loading="loading">
            <c-form-field label="用户名">
              <c-form-input v-model="form.username" type="text"></c-form-input>
            </c-form-field>
            <c-form-field label="密码">
              <c-form-input v-model="form.password" type="password"></c-form-input>
            </c-form-field>
            <c-form-field>
              <c-level>
                <c-form-checkbox label="记住我" slot="left"></c-form-checkbox>
                <router-link to="/auth/forgot" slot="right">忘记密码？</router-link>
              </c-level>
            </c-form-field>
            <c-button type="primary" @click.prevent="login" block>登录</c-button>
          </c-form>
          <!-- <c-divider>OR</c-divider>
          <div class="u-text-center">
            <a href="#" class="u-color-muted u-ml-10 u-mr-10"><i class="icon-facebook2"></i></a>
            <a href="#" class="u-color-muted u-ml-10 u-mr-10"><i class="icon-twitter"></i></a>
            <a href="#" class="u-color-muted u-ml-10 u-mr-10"><i class="icon-github"></i></a>
          </div>-->
        </div>
        <footer class="sign__footer u-text-center">
          <p class="u-text-muted u-fs-12">LD Capital © 2017-2018. All RIGHT RESERVED.</p>
        </footer>
      </section>
    </c-content>
  </c-app>
</template>

<script>
import * as api from './../../../src/api';
import * as codes from './../../../src/codes';
import base64 from 'base-64';

export default {
  data() {
    return {
      loading: false,
      form: {
        clientId: '',
        username: '',
        password: ''
      },
      source: '',
      target: ''
    };
  },
  async mounted() {
    this.form.clientId = this.$route.query.client_id;
    this.source = this.$route.query.source;
    this.target = this.$route.query.target;
    let res = await api.CheckRoot();
    if (res.code === codes.Success) {
      if (!res.data.rootExist) {
        this.$router.push({ path: '/install/root' });
      }
    }
  },
  methods: {
    async login() {
      if (this.form.username == '') {
        this.$message({
          message: '用户名不能为空',
          type: 'warning'
        });
        return;
      }
      if (this.form.password == '') {
        this.$message({
          message: '密码不能为空',
          type: 'warning'
        });
        return;
      }

      this.loading = true;

      try {

        let res = await api.AuthLogin(this.form);
      
        if (this.source) {
          let url = this.getRedirectSource(res.authorizationCode);
          window.location.href = url;
        } else {
          localStorage.setItem('accessToken', res.accessToken);
          localStorage.setItem('accessTokenExpiredAt', res.expiredAt);
          this.$router.push({ path: '/' });
        }
      } catch (e) {
        this.error(this, e);
      }

      this.loading = false;
    },

    getRedirectSource(authorizationCode) {
      let source = base64.decode(this.source);
      if (source.indexOf('?') !== '-1') {
        return `${source}?authorizationCode=${authorizationCode}&target=${
          this.target
        }`;
      }

      return `${source}&authorizationCode=${authorizationCode}&target=${
        this.target
      }`;
    }
  }
};
</script>

<style lang="scss">
#page-login {
  .sign {
    top: -140px;
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
}
</style>

