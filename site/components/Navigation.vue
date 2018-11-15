<template>
  <c-menu theme="dark" :activeIndex="$route.path" @select="onSelect">
    <c-menu-heading  v-if="can($auth.DashboardPage)" label="概览" />
    <c-menu-item v-if="can($auth.DashboardPage)" index="/" icon="icon-compass2" label="主面板" />
    <c-menu-heading label="系统管理" />
    <c-menu-item index="/clients" icon="icon-shield2" label="授权管理" />
    <c-submenu index="/permission" class="is-open" icon="icon-user" label="账户系统">
      <c-menu-item index="/permission/accounts" label="成员管理" />
      <c-menu-item index="/permission/roles" label="角色管理" />
      <c-menu-item index="/permission/permissions" label="权限管理" />
      <c-menu-item index="/permission/logs" label="操作日志" />
    </c-submenu>
    
  </c-menu>
</template>

<script>
  export default {
    name: 'Navigation',
    methods: {
      onSelect(index) {
        this.$router.push(index);
      }
    }
  };
</script>
