<template>
  <nav class="navbar navbar--light">
    <div class="navbar__start">
      <a class="navbar__item u-hidden-up@lg" @click="toggleSider">
        <i class="i-menu i-menu--light"></i>
      </a>
    </div>
    <div class="navbar__end">
      <c-dropdown placement="bottom-end">
        <div class="navbar__item">
          <a role="button" class="account">
            <figure class="account__media">
              <img class="avatar" :src="'static/images/avatar.png'" alt="">
            </figure>
            <div class="account__after">
              <i class="i-caret i-caret--light"></i>
            </div>
          </a>
        </div>
        <c-dropmenu slot="content">
          <c-dropmenu-item @click="openChangePasswordDialog()" title="修改密码" />
          <c-dropmenu-divider />
          <c-dropmenu-item @click="logout()" title="退出" />
        </c-dropmenu>
      </c-dropdown>
    </div>
    <el-dialog title="修改密码" :visible.sync="showChangePasswordDialog" width="50%">
      <el-form :model="changePasswordForm">
        <el-form-item label="原密码" :label-width="formLabelWidth">
          <el-input v-model="changePasswordForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" :label-width="formLabelWidth">
          <el-input v-model="changePasswordForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认新密码" :label-width="formLabelWidth">
          <el-input v-model="changePasswordForm.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showChangePasswordDialog = false">取 消</el-button>
        <el-button type="primary" @click="submitChangePasswordDialog()">修 改</el-button>
      </div>
    </el-dialog>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      version: VERSION,
      showChangePasswordDialog: false,
      formLabelWidth: '120px',
      changePasswordForm: {}
    };
  },
  methods: {
    toggleSider() {
      this.$root.siderOpen = !this.$root.siderOpen;
    },
    logout() {
      window.localStorage.removeItem('accessToken');
      window.localStorage.removeItem('accessTokenExpiredAt');
      this.$router.push({ path: '/auth/login' });
    },
    openChangePasswordDialog() {
      this.showChangePasswordDialog = true;
    },
    submitChangePasswordDialog() {}
  }
};
</script>
