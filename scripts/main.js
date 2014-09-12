$(document).ready(function(){

	function setup(){

		var size = '200';
		$('body').css({
			marginTop: size + 'px',
			position: "absolute"
		});
		$('#editor-html').css({
			marginTop: '0px',
			zIndex: '9999',
			display: 'block',
			position: 'fixed',
			width: '100%',
			top: '0',
			minHeight: '200px',
			background: '#fff'
		});
	 $('#editor-html').css('left','0');

	 $('iframe').css({
			display: 'block',
			position: 'absolute',
			width: '100%',
			height: '100%',
			top: size + 'px',
			left: '0',
			minHeight: '200px',
			background: '#fff'
		});

	}

	function updateHtml(){

		function update(){
			var content = $('#editor-html code').text();
			var target = $('iframe#target');
			target.attr('src','data:text/html,'+ content);
			$('.open-page').attr('href', 'data:text/html,'+ content);
		}


		$('#editor-html').keypress(function(){
			update();
		})
		$('#editor-html').keyup(function(){
			update();
		});

				function refreshCPane(){
			var contentPane = $('#editor-html code').html();
			$('#editor-html').empty().append('<code class="prism-markup">'+ contentPane +'</code>')

		}

 


	}


	function updateHighlight(){

		Prism.highlightAll();
	}
	
	$('#editor-html').bind('keypress', function(e) {
		if(e.keyCode==13){
		 updateHighlight();
		}
	});

	function deploy(){

		setup();
		updateHtml();
	}

	deploy();

});