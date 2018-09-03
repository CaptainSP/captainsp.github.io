/*=> Easy Element Select */

var SP = {

	ID : function(id) {
		return document.getElementById(id);
	},

	Q : function(q) {
		return document.querySelector(q);
	},

	C : function(c) {
		return document.getElementsByClassName(c);
	},

	T : function(t) {
		return document.getElementsByTagName(t);
	} 
}

/*=> Get From # */

function $_GET(){
	try {
		var urls = window.location.href;
		var myurls = urls.split("#");
		var mylasturls = myurls[1];
		var mynexturls = mylasturls.split("/");
		var url = mynexturls;
		return url;
	} catch(e) {
		return false;
	}
}

var $_GET = $_GET();

/*=> Index Posts */

var Index = {

	List : function(posts) {
		var Write_Plot =  SP.ID('POSTS');
		var $RAW_POSTS = JSON.parse(posts);
		for (var i = 0; i < $RAW_POSTS.length; i++) {
			var $POSTS = $RAW_POSTS[i],
			$ID = $POSTS['id'],
			$HEADER = decodeURI($POSTS['baslik']),
			$DATE = $POSTS['zaman'],
			$DESC = $POSTS['kisa'];
			Write_Plot.innerHTML = Write_Plot.innerHTML+'<div class="post-preview">'+
			'<a href="post.html#/'+$ID+'">'+
			'<h2 class="post-title">'+
			$HEADER +
			'</h2>'+
			'<h3 class="post-subtitle">'+
			$DESC +
			'</h3>'+
			'</a>'+
			'<p class="post-meta">Posted '+
			'on '+$DATE+'</p>'+
			'</div>'+
			'<hr>';
		}
	}

}

if (SP.ID('POSTS')) {
	var Xpost = new XMLHttpRequest();
	Xpost.onreadystatechange = function() {
		if (this.readyState == 4 && this.status==200 ) {
			var $Posts = this.responseText;
			Index.List($Posts);
		}
	};
	Xpost.open("GET", "http://smt.animecix.com/blog/posts.php", true);
	Xpost.send();
}