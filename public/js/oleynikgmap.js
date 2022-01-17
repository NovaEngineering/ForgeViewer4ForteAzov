viewer = new Autodesk.Viewing.Private.GuiViewer3D(/*div*/'forgeViewer', { extensions: ["GeoThreeExtension"] });
map.position.set(14900,-27300,-45);

class
 MapPlaneNode extends MapNode {
	    constructor(parentNode = null, mapView = null, location = MapNode.ROOT, level = 7, x = 20, y = 49)
}
UnitsUtils.EARTH_RADIUS = 6378137;

// move the camera into position:
var coords = Geo.UnitsUtils.datumsToSpherical(LAT, LONG);
cam.target.set(coords.x, 0, -coords.y);
cam.position.set(0, 1000, 0);