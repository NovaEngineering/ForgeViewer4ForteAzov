let viewer = null;
function setupViewer(){
      var options = {getAccessToken: getForgeToken,};
      var documentId ="urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6Zm9ydGUyM2phbi9mb3J0ZTIzamFuLnJ2dA";
       
        Autodesk.Viewing.Initializer(options, function onInitialized() {
            var htmlDiv = document.getElementById("forgeViewer");
            viewer = new Autodesk.Viewing.GuiViewer3D(htmlDiv, {extensions: ['MarkUp3DExtension']});
            viewer.start(null, null, null, null, {
          webglInitParams: {
            useWebGL2: false
          }
        });    

            Autodesk.Viewing.Document.load(documentId,
          onDocumentLoadSuccess,
          onDocumentLoadFailure
            );
        });
      
      function onDocumentLoadSuccess(doc) {
        
        var viewable = doc.getRoot().getDefaultGeometry();
        if (viewable) {
          viewer
            .loadDocumentNode(doc, viewable)
            .then(function (result) {
              console.log("Viewable Loaded!");
            })
            .catch(function (err) {
              console.log("Viewable failed to load.");
              console.log(err);
            });
        }
      }

        function onDocumentLoadFailure(viewerErrorCode) {
        console.error(' onDocumentLoadFailureerror');
        }
        // Декларирование функции для авторизации по токену
        function getForgeToken(callback) {
        jQuery.ajax({
            url: "/token",
            success: function (res) {callback(res.access_token, res.expires_in)},
        });
      }
    }