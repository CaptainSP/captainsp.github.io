class InuseJS {

  static Load() {
    this.els = document.documentElement || document.body;
    var inner = this.els.innerHTML;
    if (InuseJS.isFirst==true) {
      InuseJS.SetBack(inner);
    }
    if (this.els.innerHTML!=InuseJS.backHTML || InuseJS.isFirst==true) {
     InuseJS.isFirst = false;
     this.els.innerHTML = InuseJS.backHTML.replace(/\(lt\)/gi, "<").replace(/\(gt\)/gi, ">").replace(/\r?\n|\r/g, "").replace(/\?{(.*?)}\?/gi, function(match, contents, offset, input_string) {return "if(!InuseJS.$$VARS['a"+contents.split(" ")[0].replace(/\((.*?)\)/, function(match, contents, offset, input_string) {return contents})+"']){InuseJS.$$VARS.a"+contents.split(" ")[0].replace(/\((.*?)\)/, function(match, contents, offset, input_string) {return contents})+"=[];}InuseJS.Nulling(InuseJS.$$VARS['a"+contents.split(" ")[0].replace(/\((.*?)\)/, function(match, contents, offset, input_string) {return contents})+"'].push("+contents.replace(/\((.*)\)/, '').replace(" ", '').split("?inTimeout:")[0]+""+InuseJS.inTimeout(contents)+"));InuseJS.Echo();";}).replace(/{\-(.*?)\-}/gi, function(match, contents, offset, input_string) {
      return eval(contents)!="undefined" && eval(contents) || '';
    }).replace(/(\(fake-tag-s\))/gi, "{<span style=`display:none;`></span>-").replace(/\((fake-tag-e\))/gi, "-<span style=`display:none;`></span>}");
   }
   InuseJS.isFirst = false;
   InuseJS.Echo();
 }

 static Echo() {
  var inn1 = InuseJS.backHTML.replace(/\(lt\)/gi, "<").replace(/\(gt\)/gi, ">").replace(/\r?\n|\r/g, "").replace(/\?{(.*?)}\?/gi, function(match, contents, offset, input_string) {return "/*if(!InuseJS.$$VARS['a"+contents.split(" ")[0].replace(/\((.*?)\)/, function(match, contents, offset, input_string) {return contents})+"']){InuseJS.$$VARS.a"+contents.split(" ")[0].replace(/\((.*?)\)/, function(match, contents, offset, input_string) {return contents})+"=[];}InuseJS.Nulling(InuseJS.$$VARS['a"+contents.split(" ")[0].replace(/\((.*?)\)/, function(match, contents, offset, input_string) {return contents})+"'].push("+contents.replace(/\((.*)\)/, '').replace(" ", '')+"));InuseJS.Echo();*/";}).replace(/{\-(.*?)\-}/gi, function(match, contents, offset, input_string) {
    return eval(contents) || '';
  }).replace(/(\(fake-tag-s\))/gi, "{<span style=`display:none;`></span>-").replace(/\((fake-tag-e\))/gi, "-<span style=`display:none;`></span>}");
  var inn2 = inn1.replace(/\?\((.*?)\)\?/g, function(match, contents, offset, input_string) {
    var $$ch = '';
    if (InuseJS.$$VARS["a"+contents]) {
      InuseJS.$$VARS["a"+contents].forEach( function(itm, index) {
        if (itm.toString().slice(-4)==="true") {
         $$ch=itm.toString().substring(0,itm.toString().lastIndexOf("true"));
       } else {
        $$ch+=itm.toString().substring(0,itm.toString().lastIndexOf("false"));
      }
      console.log(itm);
    });
      return $$ch;
    } else {
      return "";
    }
  });
  InuseJS.els.innerHTML = inn2;
}

static inTimeout(st) {
  if (st.split("?inTimeout:")[1]) {
    return "+'"+st.split("?inTimeout:")[1].replace(/ /gi,"")+"'";
  }
  return '+"false"';
}


static Setup() {
  this.$$ECHO = {};
  this.$$VARS = {};
  this.isFirst = true;
  InuseJS.Load();
}

static Nulling(arg) {
  return '';
}

static SetBack(a) {
  this.backHTML = a;
}

}

InuseJS.Setup();
