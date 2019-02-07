"use strict";

(function() {
  var root = this
  var previous_Code128Generator = root.Code128Generator
  if( typeof exports !== 'undefined' ) {
    if( typeof module !== 'undefined' && module.exports ) {
      exports = module.exports = Code128Generator
    }
    exports.Code128Generator = Code128Generator
  }
  else {
    root.Code128Generator = Code128Generator
  }
  Code128Generator.noConflict = function() {
    root.Code128Generator = previous_Code128Generator
    return Code128Generator
  }
}).call(this);

function Code128Generator(){
  var codes=[
  {"code":0, "A":" ", "B":" ","C":"00","ascii":[32,212,252], "bars":"11011001100", "weights":"212222"},
  {"code":1, "A":"!", "B":"!", "C":"01", "ascii":[33], "bars":"11001101100" ,"weights":"222122"},
  {"code":2, "A":"\"", "B":"\"", "C":"02",	"ascii":[34], "bars":"11001100110" ,"weights":"222221"},
  {"code":3, "A":"#", "B":"#", "C":"03","ascii":[35], "bars":"10010011000" ,"weights":"121223"},
  {"code":4, "A":"$", "B":"$", "C":"04","ascii":[36], "bars":"10010001100" ,"weights":"121322"},
  {"code":5, "A":"%", "B":"%", "C":"05","ascii":[37], "bars":"10001001100" ,"weights":"131222"},
  {"code":6, "A":"&", "B":"&", "C":"06","ascii":[38], "bars":"10011001000" ,"weights":"122213"},
  {"code":7, "A":"'", "B":"'", "C":"07","ascii":[39], "bars":"10011000100" ,"weights":"122312"},
  {"code":8, "A":"(", "B":"(", "C":"08","ascii":[40], "bars":"10001100100" ,"weights":"132212"},
  {"code":9, "A":")", "B":")", "C":"09","ascii":[41], "bars":"11001001000" ,"weights":"221213"},
  {"code":10, "A":"*", "B":"*", "C":"10", "ascii":[42], "bars":"11001000100" ,"weights":"221312"},
  {"code":11, "A":"+", "B":"+", "C":"11", "ascii":[43], "bars":"11000100100" ,"weights":"231212"},
  {"code":12, "A":",", "B":",", "C":"12", "ascii":[44], "bars":"10110011100" ,"weights":"112232"},
  {"code":13, "A":"-", "B":"-", "C":"13", "ascii":[45], "bars":"10011011100" ,"weights":"122132"},
  {"code":14, "A":".", "B":".", "C":"14", "ascii":[46], "bars":"10011001110" ,"weights":"122231"},
  {"code":15, "A":"/", "B":"/", "C":"15", "ascii":[47], "bars":"10111001100" ,"weights":"113222"},
  {"code":16, "A":"0", "B":"0", "C":"16", "ascii":[48], "bars":"10011101100" ,"weights":"123122"},
  {"code":17, "A":"1", "B":"1", "C":"17", "ascii":[49], "bars":"10011100110" ,"weights":"123221"},
  {"code":18, "A":"2", "B":"2", "C":"18", "ascii":[50], "bars":"11001110010" ,"weights":"223211"},
  {"code":19, "A":"3", "B":"3", "C":"19", "ascii":[51], "bars":"11001011100" ,"weights":"221132"},
  {"code":20, "A":"4", "B":"4", "C":"20", "ascii":[52], "bars":"11001001110" ,"weights":"221231"},
  {"code":21, "A":"5", "B":"5", "C":"21", "ascii":[53], "bars":"11011100100" ,"weights":"213212"},
  {"code":22, "A":"6", "B":"6", "C":"22", "ascii":[54], "bars":"11001110100" ,"weights":"223112"},
  {"code":23, "A":"7", "B":"7", "C":"23", "ascii":[55], "bars":"11101101110" ,"weights":"312131"},
  {"code":24, "A":"8", "B":"8", "C":"24", "ascii":[56], "bars":"11101001100" ,"weights":"311222"},
  {"code":25, "A":"9", "B":"9", "C":"25", "ascii":[57], "bars":"11100101100" ,"weights":"321122"},
  {"code":26, "A":":", "B":":", "C":"26", "ascii":[58], "bars":"11100100110" ,"weights":"321221"},
  {"code":27, "A":";", "B":";", "C":"27", "ascii":[59], "bars":"11101100100" ,"weights":"312212"},
  {"code":28, "A":"<", "B":"<", "C":"28", "ascii":[60], "bars":"11100110100" ,"weights":"322112"},
  {"code":29, "A":"=", "B":"=", "C":"29", "ascii":[61], "bars":"11100110010" ,"weights":"322211"},
  {"code":30, "A":">", "B":">", "C":"30", "ascii":[62], "bars":"11011011000" ,"weights":"212123"},
  {"code":31, "A":"?", "B":"?", "C":"31", "ascii":[63], "bars":"11011000110" ,"weights":"212321"},
  {"code":32, "A":"@", "B":"@", "C":"32", "ascii":[64], "bars":"11000110110" ,"weights":"232121"},
  {"code":33, "A":"A", "B":"A", "C":"33", "ascii":[65], "bars":"10100011000" ,"weights":"111323"},
  {"code":34, "A":"B", "B":"B", "C":"34", "ascii":[66], "bars":"10001011000" ,"weights":"131123"},
  {"code":35, "A":"C", "B":"C", "C":"35", "ascii":[67], "bars":"10001000110" ,"weights":"131321"},
  {"code":36, "A":"D", "B":"D", "C":"36", "ascii":[68], "bars":"10110001000" ,"weights":"112313"},
  {"code":37, "A":"E", "B":"E", "C":"37", "ascii":[69], "bars":"10001101000" ,"weights":"132113"},
  {"code":38, "A":"F", "B":"F", "C":"38", "ascii":[70], "bars":"10001100010" ,"weights":"132311"},
  {"code":39, "A":"G", "B":"G", "C":"39", "ascii":[71], "bars":"11010001000" ,"weights":"211313"},
  {"code":40, "A":"H", "B":"H", "C":"40", "ascii":[72], "bars":"11000101000" ,"weights":"231113"},
  {"code":41, "A":"I", "B":"I", "C":"41", "ascii":[73], "bars":"11000100010" ,"weights":"231311"},
  {"code":42, "A":"J", "B":"J", "C":"42", "ascii":[74], "bars":"10110111000" ,"weights":"112133"},
  {"code":43, "A":"K", "B":"K", "C":"43", "ascii":[75], "bars":"10110001110" ,"weights":"112331"},
  {"code":44, "A":"L", "B":"L", "C":"44", "ascii":[76], "bars":"10001101110" ,"weights":"132131"},
  {"code":45, "A":"M", "B":"M", "C":"45", "ascii":[77], "bars":"10111011000" ,"weights":"113123"},
  {"code":46, "A":"N", "B":"N", "C":"46", "ascii":[78], "bars":"10111000110" ,"weights":"113321"},
  {"code":47, "A":"O", "B":"O", "C":"47", "ascii":[79], "bars":"10001110110" ,"weights":"133121"},
  {"code":48, "A":"P", "B":"P", "C":"48", "ascii":[80], "bars":"11101110110" ,"weights":"313121"},
  {"code":49, "A":"Q", "B":"Q", "C":"49", "ascii":[81], "bars":"11010001110" ,"weights":"211331"},
  {"code":50, "A":"R", "B":"R", "C":"50", "ascii":[82], "bars":"11000101110" ,"weights":"231131"},
  {"code":51, "A":"S", "B":"S", "C":"51", "ascii":[83], "bars":"11011101000" ,"weights":"213113"},
  {"code":52, "A":"T", "B":"T", "C":"52", "ascii":[84], "bars":"11011100010" ,"weights":"213311"},
  {"code":53, "A":"U", "B":"U", "C":"53", "ascii":[85], "bars":"11011101110" ,"weights":"213131"},
  {"code":54, "A":"V", "B":"V", "C":"54", "ascii":[86], "bars":"11101011000" ,"weights":"311123"},
  {"code":55, "A":"W", "B":"W", "C":"55", "ascii":[87], "bars":"11101000110" ,"weights":"311321"},
  {"code":56, "A":"X", "B":"X", "C":"56", "ascii":[88], "bars":"11100010110" ,"weights":"331121"},
  {"code":57, "A":"Y", "B":"Y", "C":"57", "ascii":[89], "bars":"11101101000" ,"weights":"312113"},
  {"code":58, "A":"Z", "B":"Z", "C":"58", "ascii":[90], "bars":"11101100010" ,"weights":"312311"},
  {"code":59, "A":"[", "B":"[", "C":"59", "ascii":[91], "bars":"11100011010" ,"weights":"332111"},
  {"code":60, "A":"\\", "B":"\\", "C":"60", "ascii":[92], "bars":"11101111010" ,"weights":"314111"},
  {"code":61, "A":"]", "B":"]", "C":"61", "ascii":[93], "bars":"11001000010" ,"weights":"221411"},
  {"code":62, "A":"^", "B":"^", "C":"62", "ascii":[94], "bars":"11110001010" ,"weights":"431111"},
  {"code":63, "A":"_", "B":"_", "C":"63", "ascii":[95], "bars":"10100110000" ,"weights":"111224"},
  {"code":64, "A":"", "B":"`", "C":"64", "ascii":[96], "bars":"10100001100" ,"weights":"111422"},
  {"code":65, "A":"SOH", "B":"a", "C":"65", "ascii":[97], "bars":"10010110000" ,"weights":"121124"},
  {"code":66, "A":"STX", "B":"b", "C":"66", "ascii":[98], "bars":"10010000110" ,"weights":"121421"},
  {"code":67, "A":"ETX", "B":"c", "C":"67", "ascii":[99], "bars":"10000101100" ,"weights":"141122"},
  {"code":68, "A":"EOT", "B":"d", "C":"68", "ascii":[100], "bars":"10000100110" ,"weights":"141221"},
  {"code":69, "A":"ENQ", "B":"e", "C":"69", "ascii":[101], "bars":"10110010000" ,"weights":"112214"},
  {"code":70, "A":"ACK", "B":"f", "C":"70", "ascii":[102], "bars":"10110000100" ,"weights":"112412"},
  {"code":71, "A":"BEL", "B":"g", "C":"71", "ascii":[103], "bars":"10011010000" ,"weights":"122114"},
  {"code":72, "A":"BS", "B":"h", "C":"72", "ascii":[104], "bars":"10011000010" ,"weights":"122411"},
  {"code":73, "A":"HT", "B":"i", "C":"73", "ascii":[105], "bars":"10000110100" ,"weights":"142112"},
  {"code":74, "A":"LF", "B":"j", "C":"74", "ascii":[106], "bars":"10000110010" ,"weights":"142211"},
  {"code":75, "A":"VT", "B":"k", "C":"75", "ascii":[107], "bars":"11000010010" ,"weights":"241211"},
  {"code":76, "A":"FF", "B":"l", "C":"76", "ascii":[108], "bars":"11001010000" ,"weights":"221114"},
  {"code":77, "A":"CR", "B":"m", "C":"77", "ascii":[109], "bars":"11110111010" ,"weights":"413111"},
  {"code":78, "A":"SO", "B":"n", "C":"78", "ascii":[110], "bars":"11000010100" ,"weights":"241112"},
  {"code":79, "A":"SI", "B":"o", "C":"79", "ascii":[111], "bars":"10001111010" ,"weights":"134111"},
  {"code":80, "A":"DLE", "B":"p", "C":"80", "ascii":[112], "bars":"10100111100" ,"weights":"111242"},
  {"code":81, "A":"DC1", "B":"q", "C":"81", "ascii":[113], "bars":"10010111100" ,"weights":"121142"},
  {"code":82, "A":"DC2", "B":"r", "C":"82", "ascii":[114], "bars":"10010011110" ,"weights":"121241"},
  {"code":83, "A":"DC3", "B":"s", "C":"83", "ascii":[115], "bars":"10111100100" ,"weights":"114212"},
  {"code":84, "A":"DC4", "B":"t", "C":"84", "ascii":[116], "bars":"10011110100" ,"weights":"124112"},
  {"code":85, "A":"NAK", "B":"u", "C":"85", "ascii":[117], "bars":"10011110010" ,"weights":"124211"},
  {"code":86, "A":"SYN", "B":"v", "C":"86", "ascii":[118], "bars":"11110100100" ,"weights":"411212"},
  {"code":87, "A":"ETB", "B":"w", "C":"87", "ascii":[119], "bars":"11110010100" ,"weights":"421112"},
  {"code":88, "A":"CAN", "B":"x", "C":"88", "ascii":[120], "bars":"11110010010" ,"weights":"421211"},
  {"code":89, "A":"EM", "B":"y", "C":"89", "ascii":[121], "bars":"11011011110" ,"weights":"212141"},
  {"code":90, "A":"SUB", "B":"z", "C":"90", "ascii":[122], "bars":"11011110110" ,"weights":"214121"},
  {"code":91, "A":"ESC", "B":"{", "C":"91", "ascii":[123], "bars":"11110110110" ,"weights":"412121"},
  {"code":92, "A":"FS", "B":"|", "C":"92", "ascii":[124], "bars":"10101111000" ,"weights":"111143"},
  {"code":93, "A":"GS", "B":"}", "C":"93", "ascii":[125], "bars":"10100011110" ,"weights":"111341"},
  {"code":94, "A":"RS", "B":"~", "C":"94", "ascii":[126], "bars":"10001011110" ,"weights":"131141"},
  {"code":95, "A":"US", "B":"DEL", "C":"95","ascii":[195,240,200], "bars":"10111101000" ,"weights":"114113"},
  {"code":96, "A":"FNC 3", "B":"FNC 3", "C":"96", "ascii":[196,241,201], "bars":"10111100010" ,"weights":"114311"},
  {"code":97, "A":"FNC 2", "B":"FNC 2", "C":"97", "ascii":[197,242,202], "bars":"11110101000" ,"weights":"411113"},
  {"code":98, "A":"B:", "B":"A", "C": "98", "ascii":[198,243,203], "bars":"11110100010" ,"weights":"411311"},
  {"code":99, "A":"C:", "B":"C:", "C": "99", "ascii":[199,244,204], "bars":"10111011110" ,"weights":"113141"},
  {"code":100, "A":"B:", "B":"FNC 4", "C": "B:", "ascii":[200,245,205], "bars":"10111101110" ,"weights":"114131",role:"ctrl"},
  {"code":101, "A":"FNC 4", "B":"A", "C": "A", "ascii":[201,246,206], "bars":"11101011110" ,"weights":"311141",role:"ctrl"},
  {"code":102, "A":"FNC 1", "B":"FNC 1", "C": "FNC 1", "ascii":[202,247,207], "bars":"11110101110" ,"weights":"411131",role:"ctrl"},
  {"code":103, "A":"A:","B":"A","C":"A", "ascii":[203,248,208], "bars":"11010000100" ,"weights":"211412",role:"ctrl"},
  {"code":104, "A":"B:","B":"B","C":"B", "ascii":[204,249,209], "bars":"11010010000" ,"weights":"211214",role:"ctrl"},
  {"code":105, "A":"C:","B":"C","C":"C", "ascii":[205,250,210], "bars":"11010011100" ,"weights":"211232",role:"ctrl"},
  {"code":106, "A":"Stop (7 bars/spaces)","B":"Stop","C":"Stop", "ascii":[206,251,211], "bars":"1100011101011" ,"weights":"2331112",role:"ctrl"}
  ]
  var options={}
  this.getCodeFromASCII = function (ascii){
    var code
    codes.forEach(function(item){
      if(ascii===item.ascii[options.mapping]){
        code=item.code
      }
      else if(item.ascii[options.mapping]===undefined && ascii===item.ascii[0]){
        code=item.code
      }
    })
    return code
  }.bind(this)
  this.getAllFromASCII = function (ascii){
    var code
    codes.some(function(item){
      item.ascii.some(function(a){
        if(a===ascii) code=item
      })
    })
    return code
  }.bind(this)
  this.getBarsFromASCII = function (ascii){
    var code
    codes.some(function(item){
      item.ascii.some(function(a){
        if(a===ascii) code=item.bars
      })
    })
    return code
  }.bind(this)
  this.getWeightsFromASCII = function (ascii){
    var code
    codes.some(function(item){
      item.ascii.some(function(a){
        if(a===ascii) code=item.weights
      })
    })
    return code
  }.bind(this)
  this.getASCIIFromCodeC = function(code){
    var ascii
    codes.some(function(item){
        if(item.C===code) ascii=item.ascii[options.mapping]||item.ascii[0]
    })
    return ascii
  }.bind(this)
  this.getASCIIFromCode = function(code){
    var ascii
    codes.some(function(item){
        if(item.code===code) ascii=item.ascii[options.mapping]||item.ascii[0]
    })
    return ascii
  }.bind(this)
  this.getChecksum = function(s){
    var cs = this.getCodeFromASCII(s.codePointAt(0))
    for(var i=1; i< s.length;i++){
      cs += this.getCodeFromASCII(s.codePointAt(i)) * i
    }
    return cs%103
  }.bind(this)
  this.encode = function(s,opt){
    options=Object.assign({output:"ascii",mapping:0},opt)
    var stopCode = String.fromCharCode(this.getASCIIFromCode(106))
    var tmp = this.optimize(s,0,4)
    tmp += String.fromCharCode(this.getASCIIFromCode(this.getChecksum(tmp)))
    tmp += stopCode
    switch(options.output){
      case "ascii":
        return tmp
      break
      case "bars":
        var cs=""
        for(var i=0; i< tmp.length;i++){
          cs += this.getBarsFromASCII(tmp.codePointAt(i))
        }
        return cs
      break
      case "weights":
        var cs=""
        for(var i=0; i< tmp.length;i++){
          cs += this.getWeightsFromASCII(tmp.codePointAt(i))
        }
        return cs
      break
      case "codes":
        var cs=[]
        for(var i=0; i< tmp.length;i++){
          cs.push( this.getCodeFromASCII(tmp.codePointAt(i)))
        }
        return cs
      break
      case "array":
        var cs=[]
        for(var i=0; i< tmp.length;i++){
          cs.push( tmp.codePointAt(i))
        }
        return cs
      break
      case "all":
        var cs=[]
        var current ="B"
        for(var i=0; i< tmp.length;i++){
          var item = JSON.parse(JSON.stringify(this.getAllFromASCII(tmp.codePointAt(i))))
          item.symbol=item[current]
          if(item.ascii[0]==this.getASCIIFromCode(99) && current=="B") {
            current="C"
            item.role="ctrl"
          }
          if(item.ascii[0]==this.getASCIIFromCode(105)) current="C"
          if(item.ascii[0]==this.getASCIIFromCode(100)) current="B"
          if(item.ascii[0]==this.getASCIIFromCode(104)) current="B"
          if(i==tmp.length-2) item.symbol=item.B
          cs.push( item)
        }
        return cs
      break
    }

  }.bind(this)

  this.optimize =function(s,start,min){
    var counter =0
    var res = []
    var ns = ""
    for(var i=start; i< s.length;i++){
      var c = s[i]
      res.push(c)
      if(!isNaN(parseInt(c))){
        counter++
        if(counter>=2 && counter%2 == 0){
          res.pop()
          res.pop()
          res.push(s[i-1]+""+c)
        }
      }else{
        ns = this.optimize(s,i+1,6)
        break;
      }
    }
    min = (i==s.length)? 4:min
    var current="B" //code B
    var sc=""
    var startCodeA = String.fromCharCode(this.getASCIIFromCode(103))
    var startCodeB = String.fromCharCode(this.getASCIIFromCode(104))
    var startCodeC = String.fromCharCode(this.getASCIIFromCode(105))
    var switchCodeToC = String.fromCharCode(this.getASCIIFromCode(99))
    var switchCodeToB = String.fromCharCode(this.getASCIIFromCode(100))
    var switchCodeToA = String.fromCharCode(this.getASCIIFromCode(101))
    if(start==0){
      current="B" //Start code B
      sc=startCodeB // startcode B
    }
    if(counter>=min){
      if(start==0){
        current="C" //Start code C
        sc=startCodeC // startcode C
      }else{
        current="C"
        sc=switchCodeToC // switch to C
      }
      for(var i = 0;i<res.length;i++){
        if(res[i].length==2){
          res[i] = String.fromCharCode(this.getASCIIFromCodeC(res[i]))
        }else{
          if(current=="C"){
            res[i] = switchCodeToB+res[i] //switch to Code B
            current="B"
          }
        }
      }
    }
    return sc + res.join("") + ns
  }.bind(this)

}
