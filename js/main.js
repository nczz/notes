//Avoid boring
function addSideBar(){
    $.get('/feed.xml?t='+Date.now(), function(data) {
		var $xml = $(data),itemArr = [],str = '';
		$xml.find("item").each(function() {
			var $this = $(this),
				item = {
					title: $this.find("title").text(),
					link: $this.find("link").text(),
					pubDate: $this.find("pubDate").text(),
			};
			itemArr.push(item);
		});
		var reduceArr = _.chain(itemArr).groupBy(function(item){ return (new Date(item.pubDate).getUTCFullYear()); }).value();
		var str = '<div><ul>';
		$.each(Object.keys(reduceArr).reverse(),function(value,index){
			str+='<li><a href="#">'+index+'</a><ul>';
			value = reduceArr[index];
			for (var i=0; i<value.length; ++i) {
				str+='<li><a href="'+value[i].link+'">'+value[i].title+'</a></li>';
			}
			str+='</ul></li>';
		});
		str+='</ul></div>';
		$('#sidebar').sidr({
			source: str
		});
    });

	$(window).scroll(function() {
	   if($(window).scrollTop() + $(window).height() > $(document).height() - 300) {
			var pathArray = window.location.pathname.split( '/' );
			if (pathArray[1]==='articles')
			$.sidr('open');
	   } else {
			$.sidr('close');
	   }
	});
}

//Avoid Github cache
function addURLTimeStamp(){
	$('a').click(function(){ 
		$(this).attr("href",$(this).attr("href")+'?t='+Date.now());
	});
}

function main(){
	addSideBar();
	addURLTimeStamp();
}

$(document).ready(main);

