<!DOCTYPE html>
<script src="https://cdn.jsdelivr.net/gh/aframevr/aframe@1c2407b26c61958baa93967b5412487cd94b290b/dist/aframe-master.min.js"></script>
<!-- include aframe-ar.js -->
<script src="build/aframe-ar.js"></script>

<body style='margin : 0px; overflow: hidden; font-family: Monospace;'><div style='position: fixed; top: 10px; width:100%; text-align: center; z-index: 1;'>
	<a href="https://github.com/jeromeetienne/AR.js/" target="_blank">AR.js</a> - example for a-frame
	<br/>
	Contact me any time at <a href='https://twitter.com/jerome_etienne' target='_blank'>@jerome_etienne</a>
</div>
	<!-- <a-scene embedded arjs='sourceType: image; sourceUrl:../../data/images/armchair.jpg;'> -->
	<a-scene embedded arjs='sourceType: webcam;'>

        <a-marker preset="hiro">
            <a-sphere position="0 0.5 0" radius="0.5" color="#EF2D5E"></a-sphere>
            <a-plane position="0 0 0" rotation="-90 0 0" width="1" height="1" color="#7BC8A4"></a-plane>
        </a-marker>

		<a-entity camera></a-entity>
	</a-scene>
</body>
</html>
