var template = 
'My skills:' + 
'<%for(var index in this.skills) {%>' + 
'<a href=""><%this.skills[index]%></a>' +
'<%}%>'

var data = {
  skills: ["js", "html", "css"]
}

var TemplateEngine = function(template, data){
  var codes = [];
  // var str = ''
  codes.push('var str = \'\';')
  var regex = /<%([^%>]+)%>/g,
      flagRegex = /(\s*(if|for|else|switch|case|break|{|}))(.*)?/g
  var line = ''
  var cursor = 0
  while(line = regex.exec(template)){
    codes.push('str += \'' + template.slice(cursor, line.index) + '\';')
    cursor = line.index + line[0].length
    // flagCode存放 带有 if|for|else|switch|case|break|{|}标志的代码
    var flagCode = ''
    if(flagCode = flagRegex.exec(line[1])){
      codes.push(flagCode[0])
    }else {
      codes.push('str +=' + line[1]+';')
    }
  }
  codes.push('return str;')
  console.log(codes.join(' '))
  let templateFunc = new Function(codes.join(''))
  var result = templateFunc.call(data)
  return result
}

TemplateEngine(template, data)