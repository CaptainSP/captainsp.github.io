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
  var elmnt;
  var cont;
  var $$ch;
  $$ch = "";
  var inn1 = InuseJS.backHTML.replace(/\(lt\)/gi, "<").replace(/\(gt\)/gi, ">").replace(/\r?\n|\r/g, "").replace(/\?{(.*?)}\?/gi, function(match, contents, offset, input_string) {return "/*if(!InuseJS.$$VARS['a"+contents.split(" ")[0].replace(/\((.*?)\)/, function(match, contents, offset, input_string) {return contents})+"']){InuseJS.$$VARS.a"+contents.split(" ")[0].replace(/\((.*?)\)/, function(match, contents, offset, input_string) {return contents})+"=[];}InuseJS.Nulling(InuseJS.$$VARS['a"+contents.split(" ")[0].replace(/\((.*?)\)/, function(match, contents, offset, input_string) {return contents})+"'].push("+contents.replace(/\((.*)\)/, '').replace(" ", '')+"));InuseJS.Echo();*/";}).replace(/{\-(.*?)\-}/gi, function(match, contents, offset, input_string) {
    return eval(contents) || '';
  }).replace(/(\(fake-tag-s\))/gi, "{<span style=`display:none;`></span>-").replace(/\((fake-tag-e\))/gi, "-<span style=`display:none;`></span>}");
  var inn2 = inn1.replace(/\?\((.*?)\)\?/g, function(match, contents, offset, input_string) {
    $$ch = '';
    cont = contents;
    var ranID = InuseJS.getRanID(contents,10,"#aA");
    if (!InuseJS.IDS[contents]) {
      InuseJS.IDS[contents]=ranID;
    }
    elmnt = InuseJS.InArt(contents);
    if (InuseJS.$$VARS["a"+contents]) {
      InuseJS.$$VARS["a"+contents].forEach( function(itm, index) {
        if (itm.toString().slice(-4)==="true") {
         $$ch=itm.toString().substring(0,itm.toString().lastIndexOf("true"));
       } else {
        $$ch+=itm.toString().substring(0,itm.toString().lastIndexOf("false"));
      }
    });
      return "<span id="+InuseJS.IDS[contents]+">"+$$ch+"</span>";
    } else {
      return "";
    }
  });
  if (elmnt) {
    elmnt[0].setAttribute(elmnt[1], $$ch);
  } else {
    if (!document.getElementById(InuseJS.IDS[cont])) {
      InuseJS.els.innerHTML = inn2;
    } else {
      document.getElementById(InuseJS.IDS[cont]).innerHTML=$$ch;
    }
  }
}

static getRanID(idnum,len, semb) {
  var mask = '';
  if (semb.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
  if (semb.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (semb.indexOf('0') > -1) mask += '0123456789';
  if (semb.indexOf('#') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
  var finish = '';

  for (var i = len; i > 0; --i) 
  {
    finish += mask[Math.floor(Math.random() * mask.length)];
  }

  if (!document.getElementById(finish+idnum)) {
    return finish+idnum;
  } else {
    return InuseJS.getRanID(idnum,len,semb);
  }
}

static inTimeout(st) {
  if (st.split("?inTimeout:")[1]) {
    return "+'"+st.split("?inTimeout:")[1].replace(/ /gi,"")+"'";
  }
  return '+"false"';
}

static InArt(num) {

  var inn1 = InuseJS.backHTML.replace(/\(lt\)/gi, "<").replace(/\(gt\)/gi, ">").replace(/\r?\n|\r/g, "").replace(/\?{(.*?)}\?/gi, function(match, contents, offset, input_string) {return "/*if(!InuseJS.$$VARS['a"+contents.split(" ")[0].replace(/\((.*?)\)/, function(match, contents, offset, input_string) {return contents})+"']){InuseJS.$$VARS.a"+contents.split(" ")[0].replace(/\((.*?)\)/, function(match, contents, offset, input_string) {return contents})+"=[];}InuseJS.Nulling(InuseJS.$$VARS['a"+contents.split(" ")[0].replace(/\((.*?)\)/, function(match, contents, offset, input_string) {return contents})+"'].push("+contents.replace(/\((.*)\)/, '').replace(" ", '')+"));InuseJS.Echo();*/";}).replace(/{\-(.*?)\-}/gi, function(match, contents, offset, input_string) {
    return eval(contents) || '';
  }).replace(/(\(fake-tag-s\))/gi, "{<span style=`display:none;`></span>-").replace(/\((fake-tag-e\))/gi, "-<span style=`display:none;`></span>}");

  var all = document.getElementsByTagName('*');

  for (var i = 0; i < all.length; i++) {
    var artsar = all[i].attributes;
    for (var i2 = 0; i2 < artsar.length; i2++) {
      if (this.oldArts[num] && all[i].hasAttribute(this.oldArts[num])) {
       return [all[i],this.oldArts[num]];
     } else if (all[i].getAttribute(artsar[i2].name).indexOf("?("+num+")?")>=0) {
      this.oldArts[num] = artsar[i2].name;
      return [all[i],artsar[i2].name];
    }
  }
}

return null;

}

static Setup() {
  this.oldArts = {};
  this.afterElmnt = document;
  this.IDS = [];
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
