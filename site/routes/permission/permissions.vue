<template>
  <c-main id="page-permissions">
    <header class="toolbar">
      <c-level>
        <template slot="left">
            <div class="cell">
              <!-- <div class="cell__media">
                <i class="icon-footprint"></i>
              </div> -->
              <div class="cell__content">
                <h1 class="toolbar__title">权限管理 <span>管理平台所有的权限和模块</span></h1>
              </div>
            </div>
</template>

<template slot="right">
  <!-- <c-level-item>
              <el-input style="width=300px;" size="small" placeholder="输入权限名称/权限码">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </c-level-item> -->
  <el-dropdown @command="handleCommand">
    <el-button type="primary" size="small">
      添加
    </el-button>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="permission">添加权限</el-dropdown-item>
      <el-dropdown-item command="module">添加模块</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
  <!-- <c-level-item><c-button icon-start="icon-plus-circle" type="info" smart>添加</c-button></c-level-item> -->
</template>
      </c-level>
    </header>
    
    <el-container>

      <!-- 部门控件 -->
      <el-aside style="">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
              <span>模块列表</span>
              <!-- <el-button style="float: right; padding: 3px 0" type="text">添加部门</el-button> -->
          </div>
          <el-tree
          :data="moduleTree"
          node-key="id"
          ref="moduleTree"
          default-expand-all
          @node-drag-start="handleDragStart"
          @node-drag-enter="handleDragEnter"
          @node-drag-leave="handleDragLeave"
          @node-drag-over="handleDragOver"
          @node-drag-end="handleDragEnd"
          @node-drop="handleDrop"
          @node-click="clickModule"
          :highlight-current="true"
          :expand-on-click-node="false"
          :allow-drop="allowDrop"
          :allow-drag="allowDrag">
          <span class="custom-tree-node" slot-scope="{ node, data }">
              <span>{{ node.label }}</span>
                <span>
                  <el-button
                    type="text"
                    v-if="data.id !== 0"
                    class="icon-pen5"
                    @click="openPermissionModuleEditModal(data)"
                    size="mini">
                  </el-button>
                </span>
           </span>
          </el-tree>
          </el-card>
      </el-aside>

      <!-- 用户列表 -->
      <el-main>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
              <span>权限列表</span>
              <!-- <el-button style="float: right; padding: 3px 0" type="text">添加用户</el-button> -->
          </div>

          <el-table
            v-loading="pageLoading"
            :data="showPermissions"
            border
            style="width: 100%">
            <el-table-column
              prop="name"
              label="权限名称"
              width="180">
            </el-table-column>
            <el-table-column
              prop="moduleName"
              label="权限模块"
              width="180">
            </el-table-column>
            <el-table-column
              prop="typeText"
              label="类型">
            </el-table-column>
            <el-table-column
              prop="code"
              width="500"
              label="权限码">
            </el-table-column>
            <el-table-column
              prop="statusText"
              label="状态">
            </el-table-column>
            <!-- <el-table-column
              align="left"
              label="权限描述"
              width="320">
              <span slot-scope="scope" style="width:100%;">
                {{ scope.row.limitFields || '-' }}
              </span>
            </el-table-column> -->
            <el-table-column
              align="center"
              label="操作"
              width="100">
              <span slot-scope="scope" style="width:100%;">
                <el-button type="text" @click="openPermissionEditModal(scope.row)" size="small">编辑</el-button>
                <el-button @click="deletePermission(scope.row)" type="text" size="small">删除</el-button>
              </span>
            </el-table-column>
          </el-table>
          <!-- <br> -->
          <!-- <el-pagination
            background
            layout="prev, pager, next"
            :total="100">
          </el-pagination> -->
          <!-- <br> -->
        </el-card>
      </el-main>
    </el-container>

    <el-dialog title="添加权限" :visible.sync="showPermissionFormModal">
      <el-form v-loading="loading" :model="permissionForm" :rules="permissionFormRules" ref="permissionForm" :validate-on-rule-change="false">
        <el-form-item label="所属模块" :label-width="formLabelWidth" prop="moduleId">
          <el-select v-model="permissionForm.moduleId" placeholder="请选择权限模块" style="width:100%;">
            <el-option v-for="item in permissionFormModules" v-bind:key="'permissionForm_'+item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="权限名称" :label-width="formLabelWidth" prop="name">
          <el-input v-model="permissionForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="权限类型" :label-width="formLabelWidth" prop="type">
          <el-select v-model="permissionForm.type" placeholder="请选择权限类型" style="width:100%;">
            <el-option label="接口" value="1"></el-option>
            <el-option label="页面" value="2"></el-option>
            <el-option label="组件" value="3"></el-option>
            <el-option label="授权" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="权限码" :label-width="formLabelWidth" prop="code">
          <el-input v-model="permissionForm.code" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="权限描述" :label-width="formLabelWidth">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入权限描述，用于绑定权限时提示使用"
            v-model="permissionForm.limitFields">
          </el-input>
        </el-form-item>
        <el-form-item label="权限状态" :label-width="formLabelWidth">
          <el-radio-group v-model="permissionForm.status">
            <el-radio label="1">有效</el-radio>
            <el-radio label="0">无效</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showPermissionFormModal = false">取 消</el-button>
        <el-button type="primary" @click="submitPermissionForm()">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="添加权限模块" :visible.sync="showPermissionModuleFormModal">
      <el-form v-loading="loading" :model="moduleForm" :rules="moduleFormRules" ref="moduleForm" :validate-on-rule-change="false">
        <el-form-item label="父模块" :label-width="formLabelWidth">
          <el-select v-model="moduleForm.parentId" placeholder="请选择父模块" style="width:100%;">
            <el-option v-for="item in moduleFormModules" v-bind:key="'moduleForm_'+item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="模块名称" :label-width="formLabelWidth" prop="name">
          <el-input v-model="moduleForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="模块状态" :label-width="formLabelWidth">
          <el-radio-group v-model="moduleForm.status">
            <el-radio label="1">有效</el-radio>
            <el-radio label="0">无效</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="deleteModule(moduleForm)" style="float:left;">删除模块</el-button>
        <el-button @click="showPermissionModuleFormModal = false">取 消</el-button>
        <el-button type="primary" @click="submitModuleForm()">确 定</el-button>
      </div>
    </el-dialog>
  </c-main>
</template>

<script>
import * as api from '../../../src/api';
import * as codes from '../../../src/codes';
import merge from 'merge';

var moduleForm = {
  parentId: 0,
  name: null,
  status: '1'
};

var permissionForm = {
  moduleId: null,
  name: null,
  type: '1',
  code: null,
  status: '1',
  limitFields: ''
};

export default {
  name: 'PersmissionUsers',
  data() {
    return {
      pageLoading:false,
      loading:false,
      showPermissionModuleFormModal: false,
      showPermissionFormModal: false,
      formLabelWidth: '80px',
      moduleForm: merge({}, moduleForm),
      permissionForm: merge({}, permissionForm),
      selectModule: {},
      permissionFormRules: {
        moduleId: [
          {
            required: true,
            message: '请选择所属模块',
            trigger: 'change'
          }
        ],
        name: [
          {
            required: true,
            message: '请输入权限名称',
            trigger: 'change'
          }
        ],
        type: [
          {
            required: true,
            message: '请选择权限类型',
            trigger: 'change'
          }
        ],
        code: [
          {
            required: true,
            message: '请输入权限码',
            trigger: 'change'
          }
        ]
      },
      moduleFormRules: {
        name: [
          {
            required: true,
            message: '请输入模块名称',
            trigger: 'change'
          }
        ]
      },
      showPermissions: [],
      permissions: [],
      moduleTree: [],
      moduleFormModules: [
        {
          id: 0,
          name: '无'
        }
      ],
      permissionFormModules: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  async mounted() {
    this.pageLoading = true;
    let res = await api.GetPagePermissionPermissionsParams();
    if (res.code === codes.Success) {
      this.permissions = res.data.permissions;
      this.showPermissions = res.data.permissions;
      this.permissionFormModules = res.data.modules;
      this.appendModuleTreeNode({
        id: 0,
        name: '所有模块'
      });
      this.$refs.moduleTree.setCurrentKey({
        id: 0
      });
      res.data.modules.forEach(element => {
        this.appendModuleTreeNode(element);
        this.moduleFormModules.push(element);
      });
    }
    this.pageLoading = false;
  },
  methods: {
    submitPermissionForm() {
      this.$refs['permissionForm'].validate(async valid => {
        this.loading =true;
        if (valid) {
          let data = merge({}, this.permissionForm);
          data.moduleId = parseInt(this.permissionForm.moduleId);
          data.status = parseInt(this.permissionForm.status);
          if (data.id) {
            let res = await api.PutPermission(data);
            if (res.code === codes.Success) {
              this.showPermissionFormModal = false;
              for (let i = 0; i < this.permissions.length; i++) {
                if (this.permissions[i].id === res.data.id) {
                  this.permissions[i] = merge(this.permissions[i], res.data);
                  break;
                }
              }
              this.$message({
                message: '权限更新成功',
                type: 'success'
              });
            } else if (res.code === codes.ValidateError) {
              let rules = merge.recursive(true, {}, this.permissionFormRules);
              for (let i in res.data) {
                if (typeof this.permissionFormRules[i] === 'undefined') {
                  this.permissionFormRules[i] = [];
                }
                this.permissionFormRules[i].push({
                  validator: (rule, value, callback) => {
                    callback(new Error(res.data[i][0]));
                  },
                  trigger: 'blur'
                });
                this.$refs.permissionForm.validateField(i);
              }
              this.permissionFormRules = merge.recursive(true, {}, rules);
            } else {
              this.$message({
                message: res.message,
                type: 'warning'
              });
            }
          } else {
            let res = await api.PostPermissions(data);
            if (res.code === codes.Success) {
              this.showPermissionFormModal = false;
              this.permissions.push(res.data);
              this.showPermissions.push(res.data);
              this.$message({
                message: '权限添加成功',
                type: 'success'
              });
            } else if (res.code === codes.ValidateError) {
              let rules = merge.recursive(true, {}, this.permissionFormRules);
              for (let i in res.data) {
                if (typeof this.permissionFormRules[i] === 'undefined') {
                  this.permissionFormRules[i] = [];
                }
                this.permissionFormRules[i].push({
                  validator: (rule, value, callback) => {
                    callback(new Error(res.data[i][0]));
                  },
                  trigger: 'blur'
                });
                this.$refs.permissionForm.validateField(i);
              }
              this.permissionFormRules = merge.recursive(true, {}, rules);
            } else {
              this.$message({
                message: res.message,
                type: 'warning'
              });
            }
          }
          this.loading = false;
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    submitModuleForm() {
      this.$refs['moduleForm'].validate(async valid => {
        if (valid) {
          let data = merge({}, this.moduleForm);
          data.parentId = parseInt(this.moduleForm.parentId);
          data.status = parseInt(this.moduleForm.status);
          if (this.moduleForm.id) {
            let res = await api.PutPermissionsModule(data);
            if (res.code === codes.Success) {
              this.showPermissionModuleFormModal = false;
              for (let i = 0; i < this.permissionFormModules.length; i++) {
                if (this.permissionFormModules[i].id === res.data.id) {
                  this.permissionFormModules[i] = res.data;
                  break;
                }
              }
              for (let i = 0; i < this.moduleFormModules.length; i++) {
                if (this.moduleFormModules[i].id === res.data.id) {
                  this.moduleFormModules[i] = res.data;
                  break;
                }
              }
              let node = this.$refs.moduleTree.getNode({
                id: res.data.id
              });

              node.data.name = res.data.name;
              node.data.label = res.data.name;
              node.data.status = res.data.status;

              if (res.data.parentId !== node.data.parentId) {
                node.parentId = res.data.parentId;
                this.$refs.moduleTree.remove(node);
                let parentNode = this.$refs.moduleTree.getNode({
                  id: res.data.parentId
                });
                this.$refs.moduleTree.append(node, parentNode);
              }

              this.$message({
                message: '模块更新成功',
                type: 'success'
              });
            } else if (res.code === codes.ValidateError) {
              let rules = merge.recursive(true, {}, this.moduleFormRules);
              for (let i in res.data) {
                if (typeof this.moduleFormRules[i] === 'undefined') {
                  this.moduleFormRules[i] = [];
                }
                this.moduleFormRules[i].push({
                  validator: (rule, value, callback) => {
                    callback(new Error(res.data[i][0]));
                  },
                  trigger: 'blur'
                });
                this.$refs.moduleForm.validateField(i);
              }
              this.moduleFormRules = merge.recursive(true, {}, rules);
            } else {
              this.$message({
                message: res.message,
                type: 'warning'
              });
            }
          } else {
            let res = await api.PostPermissionsModules(this.moduleForm);
            if (res.code === codes.Success) {
              this.showPermissionModuleFormModal = false;
              this.permissionFormModules.push(res.data);
              this.moduleFormModules.push(res.data);
              this.appendModuleTreeNode(res.data);
              this.$message({
                message: '模块添加成功',
                type: 'success'
              });
            } else if (res.code === codes.ValidateError) {
              let rules = merge.recursive(true, {}, this.moduleFormRules);
              for (let i in res.data) {
                if (typeof this.moduleFormRules[i] === 'undefined') {
                  this.moduleFormRules[i] = [];
                }
                this.moduleFormRules[i].push({
                  validator: (rule, value, callback) => {
                    callback(new Error(res.data[i][0]));
                  },
                  trigger: 'blur'
                });
                this.$refs.moduleForm.validateField(i);
              }
              this.moduleFormRules = merge.recursive(true, {}, rules);
            } else {
              this.$message({
                message: res.message,
                type: 'warning'
              });
            }
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    openPermissionModuleFormModal() {
      this.showPermissionModuleFormModal = true;
      this.moduleForm = merge({}, moduleForm);
      if (typeof this.$refs.moduleForm !== 'undefined') {
        this.$refs.moduleForm.resetFields();
      }
      this.moduleForm.parentId = this.selectModule.id;
    },
    openPermissionModuleEditModal(data) {
      this.showPermissionModuleFormModal = true;
      data.status = `${data.status}`;
      this.moduleForm = merge({}, data);
      if (typeof this.$refs.moduleForm !== 'undefined') {
        this.$refs.moduleForm.resetFields();
      }
    },
    openPermissionFormModal() {
      this.showPermissionFormModal = true;
      this.permissionForm = merge({}, permissionForm);
      if (typeof this.$refs.permissionForm !== 'undefined') {
        this.$refs.permissionForm.resetFields();
      }
      this.permissionForm.moduleId = this.selectModule.id;
    },
    openPermissionEditModal(data) {
      this.showPermissionFormModal = true;
      data.status = `${data.status}`;
      data.type = `${data.type}`;
      this.permissionForm = merge({}, data);
      if (typeof this.$refs.permissionForm !== 'undefined') {
        this.$refs.permissionForm.resetFields();
      }
    },
    deletePermission(permission) {
      let $this = this;
      this.$confirm(`删除 ${permission.name} ？`, '删除权限', {
        confirmButtonText: '是',
        cancelButtonText: '否',
        type: 'warning'
      }).then(async () => {
        let res = await api.DeletePermission(permission.id);
        if (res.code === codes.Success) {
          for (let i = 0; i < this.permissions.length; i++) {
            if (this.permissions[i].id === permission.id) {
              this.permissions.splice(i, 1);
              break;
            }
          }
          for (let i = 0; i < this.showPermissions.length; i++) {
            if (this.showPermissions[i].id === permission.id) {
              this.showPermissions.splice(i, 1);
              break;
            }
          }
          this.showRoleFormModal = false;
          this.$message({
            type: 'success',
            message: `已删除 ${permission.name}`
          });
        }
      });
    },
    deleteModule(module) {
      let $this = this;
      this.$confirm(`删除 ${module.name} ？`, '删除权限模块', {
        confirmButtonText: '是',
        cancelButtonText: '否',
        type: 'warning'
      }).then(async () => {
        let res = await api.DeletePermissionModule(module.id);
        if (res.code === codes.Success) {
          for (let i = 0; i < this.permissionFormModules.length; i++) {
            if (this.permissionFormModules[i].id === module.id) {
              this.permissionFormModules.splice(i, 1);
              break;
            }
          }
          for (let i = 0; i < this.permissions.length; i++) {
            if (this.permissions[i].id === module.id) {
              this.permissions.splice(i, 1);
              break;
            }
          }
          for (let i = 0; i < this.showPermissions.length; i++) {
            if (this.showPermissions[i].id === module.id) {
              this.showPermissions.splice(i, 1);
              break;
            }
          }
          this.$refs.moduleTree.remove({
            id: module.id
          });

          this.showPermissionModuleFormModal = false;
          this.$message({
            type: 'success',
            message: `已删除 ${module.name}`
          });
        } else {
          this.$message({
            type: 'warning',
            message: res.message
          });
        }
      });
    },
    handleCommand(command) {
      switch (command) {
        case 'permission':
          this.openPermissionFormModal();
          break;
        case 'module': {
          this.openPermissionModuleFormModal();
          break;
        }
      }
    },
    appendModuleTreeNode(element) {
      if (element.id !== 0) {
        this.$refs['moduleTree'].append(
          {
            id: element.id,
            label: element.name,
            name: element.name,
            parentId: element.parentId,
            status: element.status
          },
          {
            id: element.parentId
          }
        );
      } else {
        this.$refs['moduleTree'].append({
          id: element.id,
          label: element.name,
          name: element.name,
          parentId: element.parentId,
          status: element.status
        });
      }
    },
    clickModule(data) {
      this.selectModule = data;
      if (data.id === 0) {
        this.showPermissions = this.permissions;
      } else {
        this.showPermissions = [];
        this.permissions.forEach(element => {
          let level = this.getModuleLevel(element.moduleId);
          if (
            element.moduleId === data.id ||
            level.indexOf(data.id + ',') > -1
          ) {
            this.showPermissions.push(merge({}, element));
          }
        });
      }
    },
    getModuleLevel(moduleId) {
      for (let i = 0; i < this.moduleFormModules.length; i++) {
        if (this.moduleFormModules[i].id === moduleId) {
          return this.moduleFormModules[i].level;
        }
      }
      return '';
    },
    handleDragStart(node, ev) {
      console.log('drag start', node);
    },
    handleDragEnter(draggingNode, dropNode, ev) {
      console.log('tree drag enter: ', dropNode.label);
    },
    handleDragLeave(draggingNode, dropNode, ev) {
      console.log('tree drag leave: ', dropNode.label);
    },
    handleDragOver(draggingNode, dropNode, ev) {
      console.log('tree drag over: ', dropNode.label);
    },
    handleDragEnd(draggingNode, dropNode, dropType, ev) {
      console.log('tree drag end: ', dropNode && dropNode.label, dropType);
    },
    handleDrop(draggingNode, dropNode, dropType, ev) {
      console.log('tree drop: ', dropNode.label, dropType);
    },
    allowDrop(draggingNode, dropNode, type) {
      if (dropNode.data.label === '二级 3-1') {
        return type !== 'inner';
      } else {
        return true;
      }
    },
    allowDrag(draggingNode) {
      return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
    }
  }
};
</script>

<style lang="scss">
#page-permissions {
  .el-aside {
    padding-right: 30px;
  }
  .el-main {
    padding: 0;
    .el-card__body {
      padding: 0;
    }
    .el-table {
      border-style: none;
      border-radius: 0;
    }
  }
  .el-table td,
  .el-table th {
    padding: 5px;
  }
  // .el-table--border::after,
  // .el-table--group::after,
  // .el-table::before {
  // background-color: #fff;
  // }
  // tree style
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
    .el-button--text {
      color: #409eff;
      font-size: 12px;
      display: none;
    }
    &:hover {
      .el-button--text {
        display: initial;
      }
    }
  }
}
</style>

