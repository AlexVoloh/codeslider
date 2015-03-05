<?php
// Copyright http://codematrix.ru/ Alex Voloh
// License: GNU/GPL v.2 or later
// No direct access to this file
defined('_JEXEC') or die('Restricted access');
class mod_codesliderInstallerScript
{

        function install($parent) 
        {
				jimport('joomla.filesystem.folder');
				$dir = dirname(__FILE__);
				JFolder::copy($dir.'/tmpl/images', JPATH_ROOT.'/images/codeslider');
        }

        function uninstall($parent) 
        {
                JFolder::delete(JPATH_ROOT.'/images/codeslider');
        }

        function update($parent) 
        {
                echo '<p style="text-align:center; color: green; font-size: 14pt;">CodeSlider has been update!</p>';
        }
}

?>
