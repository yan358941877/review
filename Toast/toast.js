function Toast(msg, time){
  this.msg = msg
  this.dismissTime = tiem || 1000
  this.createToast()
  this.showToast()
}

Toast.prototype = {
  createToast: function(){
    var tpl = '<div class="toast">'
            + this.msg
            + '</div>'
    this.$toast = $(tpl)
    $('body').append(this.$toast)
  },

  showToast: function(){
    var self = this
    this.$toast.fadeIn(300, function(){
      setTimeout(function(){
        self.$toast.fadeOut(300, function(){
          self.$toast.remove()
        })
      }, self.dismissTime)
    })
  }
}
// fadeIn的元素之前要设置为display: none
function toastFactory(msg, time){
  return new Toast(msg, time)
}

module.exports.Toast = toastFactory