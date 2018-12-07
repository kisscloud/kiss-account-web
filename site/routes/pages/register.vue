<template>
  <c-app id="page-register">
    <c-content>
      <section class="sign u-m-auto">
        <h1 class="sign__title">账户注册</h1>
        <p class="sign__text">KISS CLOUD</p>
        <div class="sign__body">
          <c-form>
            <c-form-field label="姓名">
              <c-form-input type="text"></c-form-input>
            </c-form-field>
            <c-form-field label="用户名">
              <c-form-input type="email"></c-form-input>
            </c-form-field>
            <c-form-field label="手机号">
              <c-form-input type="email"></c-form-input>
            </c-form-field>
            <c-form-field label="密码">
              <c-form-input type="password"></c-form-input>
            </c-form-field>
            <c-form-field label="确认密码">
              <c-form-input type="password"></c-form-input>
            </c-form-field>
            <c-button type="primary" @click.prevent="register" block>注册</c-button>
          </c-form>
          <!-- <c-divider>OR</c-divider>
          <div class="u-text-center">
            <a href="#" class="u-color-muted u-ml-10 u-mr-10"><i class="icon-facebook2"></i></a>
            <a href="#" class="u-color-muted u-ml-10 u-mr-10"><i class="icon-twitter"></i></a>
            <a href="#" class="u-color-muted u-ml-10 u-mr-10"><i class="icon-github"></i></a>
          </div>-->
        </div>
        <footer class="sign__footer u-text-center">
          <p>已有账号?
            <router-link to="/auth/login">立即登录</router-link>
          </p>
        </footer>
      </section>
    </c-content>
  </c-app>
</template>

<script>
export default {
  name: 'RegisterView',
  methods: {
    register() {
      this.$toast.loading('Wait...', 2000);
      setTimeout(() => {
        this.$router.replace('/login');
      }, 2300);
    }
  }
};
</script>

<style lang="scss">
#page-register {
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
