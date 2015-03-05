<?php
// Copyright http://codematrix.ru/ Alex Voloh
// License: GNU/GPL v.2 or later
// Non-commercial
defined('_JEXEC') or die;
$document =& JFactory::getDocument();
$modway = JURI::base(true).'/modules/mod_codeslider/';
$document->addStyleSheet($modway.'tmpl/css/slider.css');
$jqueryinclude = $params->get('jqueryinclude');
if($jqueryinclude == 1){
$document->addScript ('http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js');
}
$document->addScript ($modway.'tmpl/js/codeslider.js');
$slidernav = $params->get('slidernav');
$navopacity = $params->get('navopacity');
$navopacityhover = $params->get('navopacityhover');
$navcolor = $params->get('navcolor');
$codelinktarget = $params->get('codelinktarget');
$imgdesccolor = $params->get('imgdesccolor');
$imgdescfontcolor = $params->get('imgdescfontcolor');
$boxshadowcolor = $params->get('boxshadowcolor');
$boxshadowcolor = $params->get('boxshadowcolor');
$codecycle = $params->get('codecicle');
$slideview = ".previmage, .nextimage {display: none;}";
if($slidernav == "0") {
	$document->addStyleDeclaration($slideview);
	}
$slidertooltip = $params->get('slidertooltip');
$slidertooltipalignment = $params->get('slidertooltipalignment');
$tooltipshowallways = $params->get("tooltipshowallways");
$tooltipfontsize = $params->get("tooltipfontsize");
$codedelay = $params->get('codedelay');
$codeautoscroll = $params->get('codeautoscroll');
$codescrollspeed = $params->get('codescrollspeed');
// GALLERY IMAGES
// IMAGE 1
$codeimage1 = $params->get('codeimage1');
$codeimage1media = $params->get('codeimage1media');
$codetitle1 = $params->get('codetitle1');
$codelink1 = $params->get('codelink1');
// IMAGE 2
$codeimage2 = $params->get('codeimage2');
$codeimage2media = $params->get('codeimage2media');
$codetitle2 = $params->get('codetitle2');
$codelink2 = $params->get('codelink2');
// IMAGE 3
$codeimage3 = $params->get('codeimage3');
$codeimage3media = $params->get('codeimage3media');
$codetitle3 = $params->get('codetitle3');
$codelink3 = $params->get('codelink3');
// IMAGE 4
$codeimage4 = $params->get('codeimage4');
$codeimage4media = $params->get('codeimage4media');
$codetitle4 = $params->get('codetitle4');
$codelink4 = $params->get('codelink4');
// IMAGE 5
$codeimage5 = $params->get('codeimage5');
$codeimage5media = $params->get('codeimage5media');
$codetitle5 = $params->get('codetitle5');
$codelink5 = $params->get('codelink5');

// IMAGE 6
$codeimage6 = $params->get('codeimage6');
$codeimage6media = $params->get('codeimage6media');
$codetitle6 = $params->get('codetitle6');
$codelink6 = $params->get('codelink6');

// IMAGE 7
$codeimage7 = $params->get('codeimage7');
$codeimage7media = $params->get('codeimage7media');
$codetitle7 = $params->get('codetitle7');
$codelink7 = $params->get('codelink7');

// IMAGE 8
$codeimage8 = $params->get('codeimage8');
$codeimage8media = $params->get('codeimage8media');
$codetitle8 = $params->get('codetitle8');
$codelink8 = $params->get('codelink8');

// IMAGE 9
$codeimage9 = $params->get('codeimage9');
$codeimage9media = $params->get('codeimage9media');
$codetitle9 = $params->get('codetitle9');
$codelink9 = $params->get('codelink9');

// IMAGE 10
$codeimage10 = $params->get('codeimage10');
$codeimage10media = $params->get('codeimage10media');
$codetitle10 = $params->get('codetitle10');
$codelink10 = $params->get('codelink10');

$moduleclass_sfx = htmlspecialchars($params->get('moduleclass_sfx'));



require JModuleHelper::getLayoutPath('mod_codeslider', $params->get('layout', 'default'));
