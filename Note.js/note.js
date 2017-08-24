function Note(opts){
  this.initOpts(opts)
  this.crateNote()
  this.setStyle()
  this.bindEvent()
}

Note.prototype = {
  colors: [
    ['#ea9b35','#efb04e'], // headColor, containerColor
    ['#dd598b','#e672a2'],
    ['#eee34b','#f2eb67'],
    ['#c24226','#d15a39'],
    ['#c1c341','#d0d25c'],
    ['#3f78c3','#5591d2']
  ],

  defaultOpts = {
    id: '',
    $ct: $('#content').length>0?$('#content'):$('body'),
    context: 'input here'
  },

  initOpts: function(opts){
    this.opts = $.extend({}, this.defaultOpts, opts||{})
    this.opts.context = this.opts.context == '' ? 'input here': this.opts.context
    this.username = this.opts.username
    this.updateTime = this.ops.updateTime
    if(this.opts.id){
      this.id = this.opts.id
    }
  },

  createNote: function(){
    var tpl = '<div class="note"'
            + '<div class="note-head"><span class="delete">&times;</span></div>'
            + '<div class="note-ct" contenteditable="true"></div>'
            + '<div class="note-user"></div>'
            + '<div class="note-update"></div>'
            + '</div>'
    this.$note = $(tpl)
    this.$note.find('.note-ct').html(this.opts.context)
    this.$note.find('.note-user').html(this.ops.username)
    this.$note.find('.note-update').html(this.ops.updateTime)
    this.opts.$ct.append(this.$note)
    this.setLayout()
  },

  setStyle: function(){
    var color = this.colors[Math.floor(Math.random()*this.colors.length)]
    this.$note.find('.note-head').css('background-color', color[0])
    this.$note.css('background-color', color[1])
  },

  setLayout: function(){
    Event.fire('waterfall')
  },

  bindEvent: function(){
    var self = this,
        $note = this.$note,
        $noteHead = this.$note.find('.note-head'),
        $noteCt = this.$note.find('.note-ct'),
        $delete = this.$note.find('.delete')
    // 删除事件
    $delete.on('click', function(){
      self.delete()
    })

    // 修改事件
    $noteCt.on('focus', function(){
      if($noteCt.html() == 'input here'){
        $noteCt.html('')
      }
      $noteCt.data('before', $noteCt.html())
    }).on('blur paste', function(){
      if($noteCt.data('before') != $noteCt.html()){
        $noteCt.data('before', $noteCt.html())
        self.edit($noteCt.html())
        self.setLayout()
      }
    })

    // 移动事件
    $noteHead.on('mousedown', function(e){
      var evtX = e.pageX - $note.offset().left,
          evtY = e.pageY - $note.offset().top
      $note.addClass('draggable').data('evtPos', {x: evtX, y: evtY})
    }).on('mouseup', function(){
      $note.removeClass('draggable').removeData('pos')
    })

    $('body').on('mousemove', function(e){
      $('.draggable').length && $('.draggable').offset({
        top: e.pageY - $('.draggable').data('evtPos').y,
        left: e.pageX - $('.draggable').data('evtPos').x
      })
    })
  },

  edit: function(msg){
    var self = this
    $.post('/api/notes/edit', {
      id: this.id,
      note: msg
    }).done(function(res){
      if(res.status == 0){
        // Toast('update success')
      }else {
        // Toast(res.errorMsg)
      }
    })
  },
  delete: function(){
    var self = this
    $.post('/api/note/delete', {
      id: this.id
    }).done(function(res){
      if(res.status == 0){
        // Toast('delete success)
        self.$note.remove()
        Event.fire('waterfall')
      }else {
        // Toast(res.errorMsg)
      }
    })
  }


}