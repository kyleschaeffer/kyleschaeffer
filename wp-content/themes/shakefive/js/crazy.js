function getCrazy(){
	jQuery('head').append('<style type="text/css">body * {-webkit-transition: all 0.5s ease;-moz-transition: all 0.5s ease;-o-transition: all 0.5s ease;transition: all 0.5s ease;}body *:hover {-webkit-transform: rotate(180deg);-moz-transform: rotate(180deg);-o-transform: rotate(180deg);transform: rotate(180deg);}</style>');
}
jQuery('#crazy-button').click(function(){
	getCrazy();
});