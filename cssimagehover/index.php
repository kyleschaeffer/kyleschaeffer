<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="https://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="description" content="Technological demo showcasing a simple CSS hover image control." />
		<meta name="keywords" content="css image hover, css, image, hover, advanced css techniques, best practices" />
		<title>CSS Image Hover by Kyle Schaeffer</title>
		<style type="text/css">
			body { margin: 20px; background: #363636; color: #ffffff; font-size: 100%; font-family: Georgia, "Times New Roman", Times, serif; }
			a { color: #98d11d; }
			h1, h2, h3, h4, h5, h6 { margin: 0; padding: 0; font-weight: normal; color: #a0c678; }
			p { margin: 0 0 1em 0; text-align: justify; line-height: 140%; }
			.layout { width: 50%; min-width: 550px; margin: auto; }
			.left { float: left; width: 20%; padding: 60px 0 0 5%; }
			.center { float: left; width: 35%; }
			.right { float: left; width: 34%; padding: 20px 0 0 5%; }
			.bottom { clear: both; }
			.footer { text-align: right; font-size: 80%; color: #848484; }
			.footer a { color: #848484; }
			
			/* css image hover */
			.noScripts { width: 100px; height: 76px; background: url('NoScripts.png') no-repeat; background-position: 0 -76px; cursor: pointer; }
			.noScripts:hover { background-position: 0 0; }
			.noLoading { width: 200px; height: 200px; background: url('NoLoading.png') no-repeat; background-position: 0 -200px; cursor: pointer; }
			.noLoading:hover { background-position: 0 0; }
			.noProblem { width: 200px; height: 169px; background: url('NoProblem.png') no-repeat; background-position: 0 -169px; cursor: pointer; }
			.noProblem:hover { background-position: 0 0; }
		</style>
	</head>
	<body>
		<div class="layout">
			<h1>CSS Image Hover</h1>
			<p>Move your mouse over an image to see the hover effect! These image hovers are entirely CSS - there are no scripts involved! A single image is used for both static and hover states.  This means faster download times, better performance on slower computers, and less files to maintain in your website.</p>
			<div class="left">
				<div class="noScripts">&nbsp;</div>
			</div>
			<div class="center">
				<div class="noLoading">&nbsp;</div>
			</div>
			<div class="right">
				<div class="noProblem">&nbsp;</div>
			</div>
			<div class="bottom">
				<p>What are you waiting for? <strong>View source</strong> to see the code, or read <a href="https://www.kyleschaeffer.com/?p=142">this blog post</a> for more in-depth information.</p>
			</div>
			<p class="footer">
				&copy; <a href="https://www.kyleschaeffer.com">Kyle Schaeffer</a>.
			</p>
		</div>
	</body>
</html>