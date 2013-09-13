#target photoshop;
var w = new Window ("dialog");
w.orientation = "row";
var a = File ("/C/Users/Remy/Desktop/CS6 Script/icons23X23px/color.png")
var  b= File ("/C/Users/Remy/Desktop/CS6 Script/icons23X23px/crop.png")
var c = File ("/C/Users/Remy/Desktop/CS6 Script/icons23X23px/email.png")
var d = File ("/C/Users/Remy/Desktop/CS6 Script/icons23X23px/export.png")
var e = File ("/C/Users/Remy/Desktop/CS6 Script/icons23X23px/tag.png")
var  f= File ("/C/Users/Remy/Desktop/CS6 Script/icons23X23px/magic.png")
var g = File ("/C/Users/Remy/Desktop/CS6 Script/icons23X23px/define.png")
var h = File ("/C/Users/Remy/Desktop/CS6 Script/icons23X23px/select.png")
w.add ("iconbutton", undefined, a );
w.add ("iconbutton", undefined, b, {style: "toolbutton"});
w.add ("iconbutton", undefined, c, {style: "toolbutton"});
w.add ("iconbutton", undefined, d, {style: "toolbutton"});
w.add ("iconbutton", undefined, e, {style: "toolbutton"});
w.add ("iconbutton", undefined, f, {style: "toolbutton"});
var t1 = w.add ("iconbutton", undefined, g, {style: "toolbutton", toggle: true});
var t2 = w.add ("iconbutton", undefined, h, {style: "toolbutton", toggle: true}); t2.value = true;

var checkbox_group = w.add ("panel");
    checkbox_group.alignChildren = "left";
    checkbox_group.graphics.font = "Open Sans Semibold:16";
        checkbox_group.add("checkbox", undefined, "\u00A0Cadrage 634 X 330 px");
        checkbox_group.add("checkbox", undefined, "\u00A0Cadrage 350 X 250 px");
        checkbox_group.add("checkbox", undefined, "\u00A0Cadrage 700 X 560 px");
        checkbox_group.add("checkbox", undefined, "\u00A0Cadrage 77 X 58 px");
        w.add ("button", undefined, "OK" );

//set dialog defaults
function selected_checkbox(checkbox)
    {
        for(var l =0;l < checkbox.children.length;l++)
        if(checkbox.children[l].value == true)
          return checkbox.children[l].text;
            }
        if (w.show () == 1)
        alert("vous avez choisi de cadrer à " + selected_checkbox (checkbox));
           // return l;
           // }
            //if (w.show () == 1)
              //  alert("vous avez choisi de cadrer à " ["cadrage 634 X 330 px","cadrage 350 X 250 px","cadrage 700 X 560 px","cadrage 77 X 58 px"]+ [selected_cbutton (cbuttons)]);
w.show ();
