class ElementJS {

	static Load() {
		this.$$VARS = {};
		this.els = document.documentElement || document.body;
		var inner = this.els.innerHTML;
		this.els.innerHTML = inner.replace(/\(lt\)/gi, "<").replace(/\(gt\)/gi, ">").replace(/\r?\n|\r/g, "").replace(/\?{(.*?)}\?/gi, function(match, contents, offset, input_string) {return "if(!ElementJS.$$VARS['a"+contents.split(" ")[0].replace(/\((.*?)\)/, function(match, contents, offset, input_string) {return contents})+"']){ElementJS.$$VARS.a"+contents.split(" ")[0].replace(/\((.*?)\)/, function(match, contents, offset, input_string) {return contents})+"=[];}ElementJS.Nulling(ElementJS.$$VARS['a"+contents.split(" ")[0].replace(/\((.*?)\)/, function(match, contents, offset, input_string) {return contents})+"'].push("+contents.replace(/\((.*)\)/, '').replace(" ", '')+"));";}).replace(/{\-(.*?)\-}/gi, function(match, contents, offset, input_string) {
			return eval(contents);
		}).replace(/\?\((.*)\)\?/gi, function(match, contents, offset, input_string) {
			var $$ch = '';
			if (ElementJS.$$VARS["a"+contents]) {
				ElementJS.$$VARS["a"+contents].forEach( function(itm, index) {
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

ElementJS.Load();

window.addEventListener("load", function() {
	ElementJS.Load();
});