const chat = {
    viens: function() {
        let svgElement = document.createElement("svg");
        let svgCode = '<svg width="63.485985mm" height="72.65731mm" viewBox="0 0 63.485985 72.65731" version="1.1" id="svg1" inkscape:version="1.3.2 (091e20e, 2023-11-25, custom)" sodipodi:docname="cat_raw.svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"> <sodipodi:namedview id="namedview1" pagecolor="#ffffff" bordercolor="#000000" borderopacity="0.25" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1" inkscape:document-units="mm" showguides="false" inkscape:zoom="2" inkscape:cx="59" inkscape:cy="116.75" inkscape:window-width="1920" inkscape:window-height="1017" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="layer1" showgrid="false"> <inkscape:grid id="grid10" units="mm" originx="-73.257006" originy="-72.406024" spacingx="0.99999998" spacingy="1" empcolor="#0099e5" empopacity="0.30196078" color="#0099e5" opacity="0.14901961" empspacing="5" dotted="false" gridanglex="30" gridanglez="30" visible="false" /> </sodipodi:namedview> <defs id="defs1" /> <g inkscape:label="Tête" inkscape:groupmode="layer" id="layer1" transform="translate(-73.257008,-72.406028)" style="display:inline"> <path id="path1" style="fill:#000000;stroke-width:1.69859;stroke-linecap:round" d="M 85.892412 72.406028 L 75.565911 102.55303 L 75.646009 102.53752 A 31.742992 30.929964 0 0 0 73.257008 114.1332 A 31.742992 30.929964 0 0 0 104.99977 145.06309 A 31.742992 30.929964 0 0 0 136.74306 114.1332 A 31.742992 30.929964 0 0 0 135.37673 105.20868 L 135.39482 105.21488 L 124.31022 72.406028 L 114.50565 84.660577 A 31.742992 30.929964 0 0 0 104.99977 83.203302 A 31.742992 30.929964 0 0 0 95.956914 84.492629 L 85.892412 72.406028 z " /> </g> <g inkscape:groupmode="layer" id="layer2" inkscape:label="Visage" transform="translate(-73.257008,-72.406028)"> <path id="rect8" style="fill:#800080;stroke:none;stroke-width:0.589014;stroke-linecap:butt;stroke-dasharray:none;stroke-opacity:1" d="m 101.06034,121.601 c -0.43914,0.3387 -0.48968,1.14237 0,1.43698 0.21649,0.13025 0.52771,-0.1532 0.79892,-0.15462 1.44365,7.1e-4 1.22083,2.57033 2.65358,3.17248 0.004,0.002 0.01,0.002 0.0139,0 1.3274,-0.54395 1.19396,-2.87807 2.52388,-2.88218 0.3138,3.7e-4 0.66148,0.35785 0.91726,0.21078 0.61796,-0.35531 0.54502,-1.36308 0,-1.78344 -1.62812,-1.25572 -5.27942,-1.25572 -6.90754,0 z" sodipodi:nodetypes="sacaacass" /> <circle style="fill:#ffffff;stroke:none;stroke-width:0.533;stroke-linecap:butt;stroke-dasharray:none;stroke-opacity:1" id="path4" cx="91.835808" cy="114.13338" r="9.2247257" /> <ellipse style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.653076;stroke-linecap:round;stroke-miterlimit:4.2;stroke-dasharray:none;stroke-opacity:1" id="path10" cx="91.835808" cy="114.13338" rx="2.0954318" ry="6.2862949" /> <circle style="fill:#ffffff;stroke:none;stroke-width:0.533;stroke-linecap:butt;stroke-dasharray:none;stroke-opacity:1" id="path4-5" cx="117.19279" cy="114.13338" r="9.2247257" /> <ellipse style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.653076;stroke-linecap:round;stroke-miterlimit:4.2;stroke-dasharray:none;stroke-opacity:1" id="path10-6" cx="117.19279" cy="114.13338" rx="2.0954318" ry="6.2862949" /> </g> </svg> ';
        svgElement.innerHTML = svgCode;
        svgElement.setAttribute("id", "cat");
        document.body.appendChild(svgElement);
    },

    couleur: function(nomDeLaCouleur) {
        if (typeof nomDeLaCouleur != 'string') {
            alert('Il faut indiquer le nom de la couleur de la façon suivant\n\nchat.couleur("' + nomDeLaCouleur + '")');
        }
        else {

            let catElement = document.getElementById('cat');

            if (catElement == null) {
                alert("il faut d'abord le faire apparaître de la façon suivante\n\nchat.viens()");
            }
            else {

                // catElement.childNodes[0] corresponds au tag <svg>
                // catElement.childNodes[0].childNodes[5] corresponds au calque "tête"
                let catHead = catElement.childNodes[0].childNodes[5].querySelector("#path1");

                switch (nomDeLaCouleur.toLowerCase()) {
                    case 'rouge':
                        catHead.style.fill = "#550000";
                        break;
                    case 'bleu':
                        catHead.style.fill = "#000055";
                        break;
                    case 'rose':
                        catHead.style.fill = "#800049";
                        break;
                    case 'orange':
                        catHead.style.fill = "#804100";
                        break;
                    default:
                        catHead.style.fill = "#000000";
                        break;
                }
            }
        }
    }
};