exports.install = function (Vue, options) {
  Vue.prototype.warning = (that, object) => {
    if (typeof object == "string") {
      that.$message({
        message: object,
        type: 'warning'
      });
    } else if (typeof object.response != "undefined") {
      if (object.response.status == 422) {
        that.$message({
          message: object.response.data.message || object.response.data.code,
          type: 'warning'
        });
      }
    }
  }
  Vue.prototype.success = (that, object) => {
    if (typeof object == "string") {
      that.$message({
        message: object,
        type: 'success'
      });
    }
  }
  Vue.prototype.error = (that, object) => {
    if (typeof object == "string") {
      that.$message({
        message: object,
        type: 'error'
      });
    } else if (typeof object.response != "undefined") {
      if (object.response.status == 422) {
        that.$message({
          message: object.response.data.message || object.response.data.code,
          type: 'error'
        });
      }
    }
  }
  Vue.prototype.message = (that, object) => {
    if (typeof object == "string") {
      that.$message({
        message: object,
        type: 'message'
      });
    }
  }
}
