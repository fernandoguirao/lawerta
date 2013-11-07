/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'board',
            type:'group',
            rect:['100%','0%','100%','100%','auto','auto'],
            transform:[],
            c:[
            {
               id:'boardInner',
               type:'group',
               rect:['40.4%','12%','96','294','auto','auto'],
               c:[
               {
                  id:'tabla',
                  type:'image',
                  rect:['6.8%','0%','80.5%','100%','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"tabla.png",'0px','0px']
               },
               {
                  id:'eje2',
                  type:'image',
                  rect:['9.5%','32px','75px','39px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"eje.png",'0px','0px']
               },
               {
                  id:'eje1',
                  type:'image',
                  rect:['9.5%','213px','75px','39px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"eje.png",'0px','0px']
               },
               {
                  id:'rueda4',
                  type:'image',
                  rect:['70%','220px','26px','32px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"rueda.png",'0px','0px']
               },
               {
                  id:'rueda3',
                  type:'image',
                  rect:['0%','220px','27px','32px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"rueda.png",'0px','0px']
               },
               {
                  id:'rueda2',
                  type:'image',
                  rect:['72.1%','27px','27px','32px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"rueda.png",'0px','0px']
               },
               {
                  id:'rueda1',
                  type:'image',
                  rect:['1%','27px','27px','32px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"rueda.png",'0px','0px']
               }]
            }]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_rueda3}": [
            ["style", "top", '220px'],
            ["transform", "rotateZ", '180deg'],
            ["style", "height", '31.835840093385px'],
            ["style", "opacity", '0'],
            ["style", "left", '-276.01%'],
            ["style", "width", '26.680210113525px']
         ],
         "${_rueda2}": [
            ["style", "top", '27px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '31.835840093385px'],
            ["style", "opacity", '0'],
            ["style", "left", '346%'],
            ["style", "width", '26.680210113525px']
         ],
         "${_rueda1}": [
            ["style", "top", '27px'],
            ["transform", "rotateZ", '180deg'],
            ["style", "height", '31.833333969116px'],
            ["style", "opacity", '0'],
            ["style", "left", '1.03%'],
            ["style", "width", '26.666666030884px']
         ],
         "${_boardInner}": [
            ["style", "top", '3.5%'],
            ["transform", "scaleY", '0.65'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.65'],
            ["style", "opacity", '1'],
            ["style", "left", '46%']
         ],
         "${_rueda4}": [
            ["style", "top", '220px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '31.833333969116px'],
            ["style", "opacity", '0'],
            ["style", "left", '70.03%'],
            ["style", "width", '26.016683578491px']
         ],
         "${_tabla}": [
            ["style", "top", '0%'],
            ["transform", "scaleY", '0.01'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '100%'],
            ["transform", "scaleX", '0.01'],
            ["style", "left", '9.01%'],
            ["style", "width", '80.71%']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.80)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '100%'],
            ["style", "width", '100%']
         ],
         "${_eje1}": [
            ["transform", "rotateZ", '180deg'],
            ["transform", "scaleX", '0.89628'],
            ["style", "opacity", '0'],
            ["style", "left", '-296%'],
            ["style", "width", '74.883331298828px'],
            ["style", "top", '213.05px'],
            ["transform", "scaleY", '1.01047'],
            ["style", "overflow", 'visible'],
            ["style", "height", '38.74716107124px']
         ],
         "${_board}": [
            ["style", "top", '0%'],
            ["style", "height", '100%'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0%'],
            ["style", "width", '100%']
         ],
         "${_eje2}": [
            ["style", "top", '34px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '39px'],
            ["style", "opacity", '0'],
            ["style", "left", '326%'],
            ["style", "width", '74.883331298828px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3078,
         autoPlay: true,
         timeline: [
            { id: "eid373", tween: [ "style", "${_boardInner}", "opacity", '0', { fromValue: '1'}], position: 2250, duration: 500, easing: "easeOutQuad" },
            { id: "eid332", tween: [ "style", "${_rueda1}", "left", '-255.62%', { fromValue: '1.03%'}], position: 0, duration: 534, easing: "easeOutQuad" },
            { id: "eid333", tween: [ "style", "${_rueda1}", "left", '1.03%', { fromValue: '-255.62%'}], position: 534, duration: 466, easing: "easeOutQuad" },
            { id: "eid323", tween: [ "style", "${_eje1}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid329", tween: [ "style", "${_eje1}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "easeOutQuad" },
            { id: "eid390", tween: [ "transform", "${_boardInner}", "scaleY", '0.65', { fromValue: '0.65'}], position: 0, duration: 0 },
            { id: "eid269", tween: [ "style", "${_board}", "left", '0%', { fromValue: '0%'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid342", tween: [ "style", "${_rueda4}", "left", '337.69%', { fromValue: '70.03%'}], position: 0, duration: 750, easing: "easeOutQuad" },
            { id: "eid343", tween: [ "style", "${_rueda4}", "left", '70.03%', { fromValue: '337.69%'}], position: 750, duration: 500, easing: "easeOutQuad" },
            { id: "eid364", tween: [ "transform", "${_boardInner}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid367", tween: [ "transform", "${_boardInner}", "rotateZ", '90deg', { fromValue: '0deg'}], position: 1750, duration: 500, easing: "easeOutQuad" },
            { id: "eid375", tween: [ "style", "${_rueda2}", "left", '346%', { fromValue: '346%'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid374", tween: [ "style", "${_rueda2}", "left", '72.12%', { fromValue: '346%'}], position: 1000, duration: 500, easing: "easeOutQuad" },
            { id: "eid300", tween: [ "transform", "${_tabla}", "scaleX", '1', { fromValue: '0.01'}], position: 0, duration: 500, easing: "easeOutQuad" },
            { id: "eid337", tween: [ "style", "${_rueda4}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid340", tween: [ "style", "${_rueda4}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 500, easing: "easeOutQuad" },
            { id: "eid382", tween: [ "style", "${_boardInner}", "top", '25.25%', { fromValue: '3.5%'}], position: 0, duration: 119 },
            { id: "eid360", tween: [ "style", "${_rueda3}", "left", '-276.01%', { fromValue: '-276.01%'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid357", tween: [ "style", "${_rueda3}", "left", '0%', { fromValue: '-276.01%'}], position: 1250, duration: 500, easing: "easeOutQuad" },
            { id: "eid351", tween: [ "style", "${_rueda3}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid355", tween: [ "style", "${_rueda3}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500, easing: "easeOutQuad" },
            { id: "eid334", tween: [ "style", "${_rueda1}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid336", tween: [ "style", "${_rueda1}", "opacity", '1', { fromValue: '0'}], position: 534, duration: 466, easing: "easeOutQuad" },
            { id: "eid303", tween: [ "transform", "${_tabla}", "scaleY", '1', { fromValue: '0.01'}], position: 0, duration: 500, easing: "easeOutQuad" },
            { id: "eid325", tween: [ "style", "${_eje2}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid327", tween: [ "style", "${_eje2}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "easeOutQuad" },
            { id: "eid344", tween: [ "style", "${_rueda2}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid347", tween: [ "style", "${_rueda2}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeOutQuad" },
            { id: "eid389", tween: [ "transform", "${_boardInner}", "scaleX", '0.65', { fromValue: '0.65'}], position: 0, duration: 0 },
            { id: "eid395", tween: [ "style", "${_boardInner}", "left", '46%', { fromValue: '46%'}], position: 0, duration: 0 },
            { id: "eid370", tween: [ "style", "${_boardInner}", "left", '120.34%', { fromValue: '46%'}], position: 2250, duration: 500, easing: "easeOutQuad" },
            { id: "eid296", tween: [ "style", "${_tabla}", "left", '9.01%', { fromValue: '9.01%'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid317", tween: [ "style", "${_eje1}", "left", '-296%', { fromValue: '-296%'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid319", tween: [ "style", "${_eje1}", "left", '11.62%', { fromValue: '-296%'}], position: 250, duration: 500, easing: "easeOutQuad" },
            { id: "eid320", tween: [ "style", "${_eje2}", "left", '326%', { fromValue: '326%'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid322", tween: [ "style", "${_eje2}", "left", '10.45%', { fromValue: '326%'}], position: 250, duration: 500, easing: "easeOutQuad" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "skate");
