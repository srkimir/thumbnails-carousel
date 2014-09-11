thumbnails-carousel
===================
Simple jquery plugin which add support for using thumbnails for bootsrap carousel.

Dependencies: jQuery & bootstrap.js, include thumbnails.carousel.js after.

![alt tag](http://s27.postimg.org/f9hvevmpv/thumb_carousel1.png)

While user slide left or right, appropriately thumbnail gets selected and change its opacity to be different among others thumbnails. User can also click on thumbnails to show the appropriate image on carousel.

<h2>Options</h2>
  <b>center</b>: boolean, default: true<br>
  <b>backgroundControl</b>: boolean, default: false<br>

With 'center' option set to <b>true</b> thumbnails will be centered under the carousel parent(image above).<br>
With 'backgroundControl' option set to <b>false</b> plugin will turn off any controls background gradients.<br>

Example with <b>center: false</b> and <b>backgroundControl: true</b>.<br>
![alt tag](http://s21.postimg.org/iky5x9khj/thumb_carousel2.png)

<h2>How to use it</h2>
Add jQuery, bootstrap.js, thumbnails.carousel.js and thumbnails.carousel.css<br>
```html
<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
  <!-- All other bootstrap carousel code as usual -->
  ...
  
  <!-- Add your thumbnails --> 
	<ul class="thumbnails-carousel clearfix">
	  <li><img src="images/1_tn.jpg" alt="1_tn.jpg"></li>
	  <li><img src="images/2_tn.jpg" alt="1_tn.jpg"></li>
	  <li><img src="images/3_tn.jpg" alt="1_tn.jpg"></li>
	  <li><img src="images/4_tn.jpg" alt="1_tn.jpg"></li>
	  ...
	</ul>
</div>
```
Run plugin:
```javascript
$('.thumbnails-carousel').thumbnailsCarousel();
```
Or pass options:
```javascript
$('.thumbnails-carousel').thumbnailsCarousel({
	center: false,
	backgroundControl: true
});
```
Or visit: http://codepen.io/srkimir/pen/mGbrf
