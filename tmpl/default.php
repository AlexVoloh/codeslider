<?php
// Copyright http://codematrix.ru/ Alex Voloh
// License: GNU/GPL v.2 or later
// no direct access
defined('_JEXEC') or die;
?>
				<!----------- GALLERY ------------->
			<div class="codegallery" style="box-shadow: <?php print $boxshadowcolor; ?> 0 0 50px 0;" data-imgtool="<?php print $slidertooltip; ?>" data-animtime="<?php print $codedelay; ?>" data-autoscroll="<?php print $codeautoscroll; ?>" data-scrollspeed="<?php print $codescrollspeed; ?>" data-linktarget="<?php print $codelinktarget; ?>" data-cycle="<?php print $codecycle; ?>" data-tooltipallways="<?php print $tooltipshowallways;?>">
			<div class="codeprev previmage" style="opacity: <?php print $navopacity; ?>; background: <?php print $navcolor; ?>" onmouseover="this.style.opacity = <?php print $navopacityhover; ?>" onmouseout="this.style.opacity = <?php print $navopacity; ?>"></div>
			<div class="codenext nextimage" style="opacity: <?php print $navopacity; ?>; background: <?php print $navcolor; ?>" onmouseover="this.style.opacity = <?php print $navopacityhover; ?>" onmouseout="this.style.opacity = <?php print $navopacity; ?>"></div>
			<div class="imgtooltip" style="background: <?php print $imgdesccolor; ?>;color: <?php print $imgdescfontcolor;?>"><div style="text-align: <?php print $slidertooltipalignment; ?>; font-size: <?php print $tooltipfontsize;?>%"></div></div>
				<div class="codecarousel">
					<!------ GALLERY IMAGES ------>
			<?php if($codeimage1 == "1"): ?>
			<div class="codeimage">
				<img src="<?php echo $codeimage1media; ?>" alt="<?php echo $codetitle1; ?>" 
				<?php if($codelink1 != "#"):?> data-href="<?php echo $codelink1; ?>" <?php endif; ?> />
					</div>
					<?php endif; ?>
			
			<?php if($codeimage2 == "1"): ?>
			<div class="codeimage">
				<img src="<?php echo $codeimage2media; ?>" alt="<?php echo $codetitle2; ?>" 
				<?php if($codelink2 != "#"):?> data-href="<?php echo $codelink2; ?>" <?php endif; ?> />
					</div>
					<?php endif; ?>
			
			<?php if($codeimage3 == "1"): ?>
			<div class="codeimage">
				<img src="<?php echo $codeimage3media; ?>" alt="<?php echo $codetitle3; ?>" 
				<?php if($codelink3 != "#"):?> data-href="<?php echo $codelink3; ?>" <?php endif; ?> />
					</div>
					<?php endif; ?>
					
			<?php if($codeimage4 == "1"): ?>
			<div class="codeimage">
				<img src="<?php echo $codeimage4media; ?>" alt="<?php echo $codetitle4; ?>" 
				<?php if($codelink4 != "#"):?> data-href="<?php echo $codelink4; ?>" <?php endif; ?> />
					</div>
					<?php endif; ?>
					
			<?php if($codeimage5 == "1"): ?>
			<div class="codeimage">
				<img src="<?php echo $codeimage5media; ?>" alt="<?php echo $codetitle5; ?>" 
				<?php if($codelink5 != "#"):?> data-href="<?php echo $codelink5; ?>" <?php endif; ?> />
					</div>
					<?php endif; ?>
					
			<?php if($codeimage6 == "1"): ?>
			<div class="codeimage">
				<img src="<?php echo $codeimage6media; ?>" alt="<?php echo $codetitle6; ?>" 
				<?php if($codelink6 != "#"):?> data-href="<?php echo $codelink6; ?>" <?php endif; ?> />
					</div>
					<?php endif; ?>
					
			<?php if($codeimage7 == "1"): ?>
			<div class="codeimage">
				<img src="<?php echo $codeimage7media; ?>" alt="<?php echo $codetitle7; ?>" 
				<?php if($codelink7 != "#"):?> data-href="<?php echo $codelink7; ?>" <?php endif; ?> />
					</div>
					<?php endif; ?>
					
			<?php if($codeimage8 == "1" && $codeimage8media != "#"): ?>
			<div class="codeimage">
				<img src="<?php echo $codeimage8media; ?>" alt="<?php echo $codetitle8; ?>" 
				<?php if($codelink8 != "#"):?> data-href="<?php echo $codelink8; ?>" <?php endif; ?> />
					</div>
					<?php endif; ?>
					
			<?php if($codeimage9 == "1" && $codeimage9media != "#"): ?>
			<div class="codeimage">
				<img src="<?php echo $codeimage9media; ?>" alt="<?php echo $codetitle9; ?>" 
				<?php if($codelink9 != "#"):?> data-href="<?php echo $codelink9; ?>" <?php endif; ?> />
					</div>
					<?php endif; ?>
					
			<?php if($codeimage10 == "1" && $codeimage10media != "#"): ?>
			<div class="codeimage">
				<img src="<?php echo $codeimage10media; ?>" alt="<?php echo $codetitle10; ?>" 
				<?php if($codelink10 != "#"):?> data-href="<?php echo $codelink10; ?>" <?php endif; ?> />
					</div>
					<?php endif; ?>
					<!------ END GALLERY IMAGES ------>
					</div>
				</div>
				<!-- END GALLERY -->
