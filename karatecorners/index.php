<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="https://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>Karate Corners / Kyle Schaeffer</title>
		<meta name="description" content="Technological demo showcasing simple rounded CSS corners to be used in XHTML design." />
		<meta name="keywords" content="advanced css techniques, xhtml css rounded corners, no javascript corners, easy html rounded corners, css design tutorials,corners,css,design,xhtml" />
		<style type="text/css">
			/* general styles */
			body { margin: 20px; background: #151515; color: #ffffff; font-size: 100%; font-family: Georgia, "Times New Roman", Times, serif; }
			a { color: #98d11d; }
			h1, h2, h3, h4, h5, h6 { margin: 0; padding: 0; font-weight: normal; }
			p { margin: 0 0 1em 0; text-align: justify; line-height: 140%; }
			.layout { width: 50%; margin: auto; }
			.left { width: 48%; float: left; padding: 0 1% 0 0; }
			.right { width: 48%; float: right; padding: 0 0 0 1%; }
			.bottom { height: 0; clear: both; }
			.footer { text-align: right; font-size: 80%; color: #3f3f3f; }
			.footer a { color: #3f3f3f; }
			
			/* box styles */
			.box { position: relative; width: 100%; margin: 0 0 20px 0; }
			.orange { background: #ff6c01 url('gradient-orange.png') top repeat-x; }
			.green { background: #98d11d url('gradient-green.png') top repeat-x; }
			.blue { background: #24b2e7 url('gradient-blue.png') top repeat-x; }
			.red { background: #d94017 url('gradient-red.png') top repeat-x; }
			.silver { background: #3f3f3f url('gradient-silver.png') top repeat-x; }
			.inner { padding: 20px; }
			
			/* corners */
			.corner { position: absolute; width: 10px; height: 10px; background: url('corners.png') no-repeat; font-size: 0%; }
			.TL { top: 0; left: 0; background-position: 0 0; }
			.TR { top: 0; right: 0; background-position: -10px 0; }
			.BL { bottom: 0; left: 0; background-position: 0 -10px; }
			.BR { bottom: 0; right: 0; background-position: -10px -10px; }
		</style>
	</head>
	<body>
		<div class="layout">
		
			<!-- BEGIN ORANGE BOX MARKUP -->
			<div class="box orange">
			    <div class="corner TL"></div>
			    <div class="corner TR"></div>
			    <div class="corner BL"></div>
			    <div class="corner BR"></div>
			    <div class="inner">
			    	<h1>One Corner Image</h1>
			        <p>Every box on this page uses a single shared image for all rounded corners. Because we are using a &quot;reverse-transparent&quot; PNG corner image, the background color and style for your boxes can change at any time.</p>
			    </div>
			</div>
			<!-- END ORANGE BOX MARKUP -->
			
			<!-- BEGIN GREEN BOX MARKUP -->
			<div class="box green">
			    <div class="corner TL"></div>
			    <div class="corner TR"></div>
			    <div class="corner BL"></div>
			    <div class="corner BR"></div>
			    <div class="inner">
			    	<h1>Scalability</h1>
			        <p>Resize your browser window to see the scalability of Karate Corners in action! Stop worrying about the width of your content; dynamic width designs are much more accessible and can be easily displayed on a variety of mobile devices.</p>
			    </div>
			</div>
			<!-- END GREEN BOX MARKUP -->
			
			<div class="columns">
				<div class="left">
					<!-- BEGIN BLUE BOX MARKUP -->
					<div class="box blue">
					    <div class="corner TL"></div>
					    <div class="corner TR"></div>
					    <div class="corner BL"></div>
					    <div class="corner BR"></div>
					    <div class="inner">
					    	<h1>Markup</h1>
					        <p>Karate Corners use a minimal amount of HTML and CSS. The code is both simplified as well as logical in it's hierarchy, so you'll easily be able to customize the code in order to fit your partiuclar design.</p>
					    </div>
					</div>
					<!-- END BLUE BOX MARKUP -->
				</div>
				<div class="right">
					<!-- BEGIN ARTISTIC RED BOX MARKUP -->
					<div class="box red">
					    <div class="corner TL"></div>
					    <div class="corner BR"></div>
					    <div class="inner">
					    	<h1>Omit Corners</h1>
					        <p>Artistic appeal is at your fingertips. Notice how this box is missing a bottom-left-hand and top-right-hand rounded corner. Simply omit the DIV tag for a particular corner to achieve this artistic design.</p>
					    </div>
					</div>
					<!-- END ARTISTIC RED BOX MARKUP -->
				</div>
				<div class="bottom"></div>
			</div>
			
			<!-- BEGIN SILVER BOX MARKUP -->
			<div class="box silver">
			    <div class="corner TL"></div>
			    <div class="corner TR"></div>
			    <div class="corner BL"></div>
			    <div class="corner BR"></div>
			    <div class="inner">
			    	<h1>Performance</h1>
			    	<p>Everything used in this demo (code <em>and</em> images) adds up to less than 6 KB of data. Without the optional background gradient images, you are looking at less than 2 KB of data.</p>
			    	<h1>Get the Code</h1>
			        <p>What are you waiting for? You can right-click anywhere on this page and select &quot;View Source&quot; to see the code. Also, check out <a href="https://www.kyleschaeffer.com/?p=31">this blog post</a> for a more in-depth look at Karate Corners.</p>
			    </div>
			</div>
			<!-- END SILVER BOX MARKUP -->
			
			<div class="footer">
				&copy; <a href="https://www.kyleschaeffer.com">Kyle Schaeffer</a>.
			</div>
		
		</div>
	</body>
</html>