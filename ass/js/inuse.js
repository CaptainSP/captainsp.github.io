class InuseJS {

  static Load() {
    this.$$VARS = {};
    this.els = document.documentElement || document.body;
    var inner = this.els.outerHTML;
    this.els.innerHTML = inner.replace(/\(lt\)/gi, "<").replace(/\(gt\)/gi, ">").replace(/\r?\n|\r/g, "").replace(/\?{(.*?)}\?/gi, function(match, contents, offset, input_string) {return "if(!InuseJS.$$VARS['a"+contents.split(" ")[0].replace(/\((.*?)\)/, function(match, contents, offset, input_string) {return contents})+"']){InuseJS.$$VARS.a"+contents.split(" ")[0].replace(/\((.*?)\)/, function(match, contents, offset, input_string) {return contents})+"=[];}InuseJS.Nulling(InuseJS.$$VARS['a"+contents.split(" ")[0].replace(/\((.*?)\)/, function(match, contents, offset, input_string) {return contents})+"'].push("+contents.replace(/\((.*)\)/, '').replace(" ", '')+"));";}).replace(/{\-(.*?)\-}/gi, function(match, contents, offset, input_string) {
      return eval(contents);
    }).replace(/\?\((.*)\)\?/gi, function(match, contents, offset, input_string) {
      var $$ch = '';
      if (InuseJS.$$VARS["a"+contents]) {
        InuseJS.$$VARS["a"+contents].forEach( function(itm, index) {
          $$ch+=itm;
        });
      }
      return $$ch;
    }).replace(/(\(fake-tag-s\))/gi, "{<span style=`display:none;`></span>-").replace(/\((fake-tag-e\))/gi, "-<span style=`display:none;`></span>}");
  }

  static Nulling(arg) {
    return '';
  }

}

InuseJS.Load();

window.addEventListener("load", function() {
  InuseJS.Load();
});
