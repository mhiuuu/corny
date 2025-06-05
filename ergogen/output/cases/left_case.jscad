function standoff_extrude_8_4_outline_fn(){
    return CAG.circle({"center":[273.9,-97.5],"radius":2.5})
.union(
    CAG.circle({"center":[214.9109884,-201.3886848],"radius":2.5})
).union(
    CAG.circle({"center":[318.6,-106.5],"radius":2.5})
).union(
    CAG.circle({"center":[342.7,-196.6],"radius":2.5})
).union(
    CAG.circle({"center":[121.1,-97.5],"radius":2.5})
).union(
    CAG.circle({"center":[180.0890116,-201.3886848],"radius":2.5})
).union(
    CAG.circle({"center":[76.4,-106.5],"radius":2.5})
).union(
    CAG.circle({"center":[52.3,-196.6],"radius":2.5})
).extrude({ offset: [0, 0, 8.4] });
}


function mounting_extrude_8_4_outline_fn(){
    return CAG.circle({"center":[273.9,-97.5],"radius":1.5})
.union(
    CAG.circle({"center":[214.9109884,-201.3886848],"radius":1.5})
).union(
    CAG.circle({"center":[318.6,-106.5],"radius":1.5})
).union(
    CAG.circle({"center":[342.7,-196.6],"radius":1.5})
).union(
    CAG.circle({"center":[121.1,-97.5],"radius":1.5})
).union(
    CAG.circle({"center":[180.0890116,-201.3886848],"radius":1.5})
).union(
    CAG.circle({"center":[76.4,-106.5],"radius":1.5})
).union(
    CAG.circle({"center":[52.3,-196.6],"radius":1.5})
).extrude({ offset: [0, 0, 8.4] });
}


function xl_board_left_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[36.5,-192.069777],[36.5,-111.7627752]]).appendArc([39.6962236,-107.8443644],{"radius":4,"clockwise":true,"large":false}).appendPoint([55.4647244,-104.6098001]).appendArc([56.4862144,-104.2506593],{"radius":4,"clockwise":false,"large":false}).appendPoint([75.1017616,-94.7042248]).appendArc([75.9335264,-94.3888394],{"radius":4,"clockwise":true,"large":false}).appendPoint([94.6357771,-89.5933905]).appendArc([95.3752471,-89.4761206],{"radius":4,"clockwise":true,"large":false}).appendPoint([127.3880066,-87.438945]).appendArc([128.595553,-87.5461812],{"radius":4,"clockwise":true,"large":false}).appendPoint([160.5302151,-95.3846892]).appendArc([161.4837299,-95.5],{"radius":4,"clockwise":false,"large":false}).appendPoint([185.0239003,-95.5]).appendArc([189.0238157,-99.5260144],{"radius":4,"clockwise":true,"large":false}).appendPoint([188.3194532,-207.826698]).appendArc([184.2478117,-211.8000405],{"radius":4,"clockwise":true,"large":false}).appendPoint([57.3557595,-209.5243147]).appendArc([54.9385091,-208.6562509],{"radius":4,"clockwise":true,"large":false}).appendPoint([38.0110237,-195.2010701]).appendArc([36.5,-192.069777],{"radius":4,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.5] });
}


function xl_board_left_extrude_8_4_outline_fn(){
    return new CSG.Path2D([[36.5,-192.069777],[36.5,-111.7627752]]).appendArc([39.6962236,-107.8443644],{"radius":4,"clockwise":true,"large":false}).appendPoint([55.4647244,-104.6098001]).appendArc([56.4862144,-104.2506593],{"radius":4,"clockwise":false,"large":false}).appendPoint([75.1017616,-94.7042248]).appendArc([75.9335264,-94.3888394],{"radius":4,"clockwise":true,"large":false}).appendPoint([94.6357771,-89.5933905]).appendArc([95.3752471,-89.4761206],{"radius":4,"clockwise":true,"large":false}).appendPoint([127.3880066,-87.438945]).appendArc([128.595553,-87.5461812],{"radius":4,"clockwise":true,"large":false}).appendPoint([160.5302151,-95.3846892]).appendArc([161.4837299,-95.5],{"radius":4,"clockwise":false,"large":false}).appendPoint([185.0239003,-95.5]).appendArc([189.0238157,-99.5260144],{"radius":4,"clockwise":true,"large":false}).appendPoint([188.3194532,-207.826698]).appendArc([184.2478117,-211.8000405],{"radius":4,"clockwise":true,"large":false}).appendPoint([57.3557595,-209.5243147]).appendArc([54.9385091,-208.6562509],{"radius":4,"clockwise":true,"large":false}).appendPoint([38.0110237,-195.2010701]).appendArc([36.5,-192.069777],{"radius":4,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 8.4] });
}


function board_left_extrude_8_4_outline_fn(){
    return new CSG.Path2D([[38.5,-190.069777],[38.5,-113.7627752]]).appendArc([41.6962236,-109.8443644],{"radius":4,"clockwise":true,"large":false}).appendPoint([57.4647244,-106.6098001]).appendArc([58.4862144,-106.2506593],{"radius":4,"clockwise":false,"large":false}).appendPoint([77.1017616,-96.7042248]).appendArc([77.9335264,-96.3888394],{"radius":4,"clockwise":true,"large":false}).appendPoint([96.5681802,-91.610723]).appendArc([97.4456018,-91.4870632],{"radius":4,"clockwise":true,"large":false}).appendPoint([127.5015817,-90.6144702]).appendArc([128.4867169,-90.7083338],{"radius":4,"clockwise":true,"large":false}).appendPoint([158.5707252,-97.4044517]).appendArc([159.4397804,-97.5],{"radius":4,"clockwise":false,"large":false}).appendPoint([181.458429,-97.5]).appendArc([185.4584201,-101.491562],{"radius":4,"clockwise":true,"large":false}).appendPoint([185.6774314,-205.3140737]).appendArc([181.6184887,-209.3220773],{"radius":4,"clockwise":true,"large":false}).appendPoint([59.3629556,-207.5200893]).appendArc([56.9329308,-206.6518168],{"radius":4,"clockwise":true,"large":false}).appendPoint([40.0110237,-193.2010701]).appendArc([38.5,-190.069777],{"radius":4,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 8.4] });
}




                function _standoffs_case_fn() {
                    

                // creating part 0 of case _standoffs
                let _standoffs__part_0 = standoff_extrude_8_4_outline_fn();

                // make sure that rotations are relative
                let _standoffs__part_0_bounds = _standoffs__part_0.getBounds();
                let _standoffs__part_0_x = _standoffs__part_0_bounds[0].x + (_standoffs__part_0_bounds[1].x - _standoffs__part_0_bounds[0].x) / 2
                let _standoffs__part_0_y = _standoffs__part_0_bounds[0].y + (_standoffs__part_0_bounds[1].y - _standoffs__part_0_bounds[0].y) / 2
                _standoffs__part_0 = translate([-_standoffs__part_0_x, -_standoffs__part_0_y, 0], _standoffs__part_0);
                _standoffs__part_0 = rotate([0,0,0], _standoffs__part_0);
                _standoffs__part_0 = translate([_standoffs__part_0_x, _standoffs__part_0_y, 0], _standoffs__part_0);

                _standoffs__part_0 = translate([0,0,0], _standoffs__part_0);
                let result = _standoffs__part_0;
                
            
                    return result;
                }
            
            

                function _holes_case_fn() {
                    

                // creating part 0 of case _holes
                let _holes__part_0 = mounting_extrude_8_4_outline_fn();

                // make sure that rotations are relative
                let _holes__part_0_bounds = _holes__part_0.getBounds();
                let _holes__part_0_x = _holes__part_0_bounds[0].x + (_holes__part_0_bounds[1].x - _holes__part_0_bounds[0].x) / 2
                let _holes__part_0_y = _holes__part_0_bounds[0].y + (_holes__part_0_bounds[1].y - _holes__part_0_bounds[0].y) / 2
                _holes__part_0 = translate([-_holes__part_0_x, -_holes__part_0_y, 0], _holes__part_0);
                _holes__part_0 = rotate([0,0,0], _holes__part_0);
                _holes__part_0 = translate([_holes__part_0_x, _holes__part_0_y, 0], _holes__part_0);

                _holes__part_0 = translate([0,0,0], _holes__part_0);
                let result = _holes__part_0;
                
            
                    return result;
                }
            
            

                function xl_bottom_case_fn() {
                    

                // creating part 0 of case xl_bottom
                let xl_bottom__part_0 = xl_board_left_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let xl_bottom__part_0_bounds = xl_bottom__part_0.getBounds();
                let xl_bottom__part_0_x = xl_bottom__part_0_bounds[0].x + (xl_bottom__part_0_bounds[1].x - xl_bottom__part_0_bounds[0].x) / 2
                let xl_bottom__part_0_y = xl_bottom__part_0_bounds[0].y + (xl_bottom__part_0_bounds[1].y - xl_bottom__part_0_bounds[0].y) / 2
                xl_bottom__part_0 = translate([-xl_bottom__part_0_x, -xl_bottom__part_0_y, 0], xl_bottom__part_0);
                xl_bottom__part_0 = rotate([0,0,0], xl_bottom__part_0);
                xl_bottom__part_0 = translate([xl_bottom__part_0_x, xl_bottom__part_0_y, 0], xl_bottom__part_0);

                xl_bottom__part_0 = translate([0,0,0], xl_bottom__part_0);
                let result = xl_bottom__part_0;
                
            
                    return result;
                }
            
            

                function _wall_case_fn() {
                    

                // creating part 0 of case _wall
                let _wall__part_0 = _outer_wall_case_fn();

                // make sure that rotations are relative
                let _wall__part_0_bounds = _wall__part_0.getBounds();
                let _wall__part_0_x = _wall__part_0_bounds[0].x + (_wall__part_0_bounds[1].x - _wall__part_0_bounds[0].x) / 2
                let _wall__part_0_y = _wall__part_0_bounds[0].y + (_wall__part_0_bounds[1].y - _wall__part_0_bounds[0].y) / 2
                _wall__part_0 = translate([-_wall__part_0_x, -_wall__part_0_y, 0], _wall__part_0);
                _wall__part_0 = rotate([0,0,0], _wall__part_0);
                _wall__part_0 = translate([_wall__part_0_x, _wall__part_0_y, 0], _wall__part_0);

                _wall__part_0 = translate([0,0,0], _wall__part_0);
                let result = _wall__part_0;
                
            

                // creating part 1 of case _wall
                let _wall__part_1 = _inner_wall_case_fn();

                // make sure that rotations are relative
                let _wall__part_1_bounds = _wall__part_1.getBounds();
                let _wall__part_1_x = _wall__part_1_bounds[0].x + (_wall__part_1_bounds[1].x - _wall__part_1_bounds[0].x) / 2
                let _wall__part_1_y = _wall__part_1_bounds[0].y + (_wall__part_1_bounds[1].y - _wall__part_1_bounds[0].y) / 2
                _wall__part_1 = translate([-_wall__part_1_x, -_wall__part_1_y, 0], _wall__part_1);
                _wall__part_1 = rotate([0,0,0], _wall__part_1);
                _wall__part_1 = translate([_wall__part_1_x, _wall__part_1_y, 0], _wall__part_1);

                _wall__part_1 = translate([0,0,0], _wall__part_1);
                result = result.subtract(_wall__part_1);
                
            
                    return result;
                }
            
            

                function _outer_wall_case_fn() {
                    

                // creating part 0 of case _outer_wall
                let _outer_wall__part_0 = xl_board_left_extrude_8_4_outline_fn();

                // make sure that rotations are relative
                let _outer_wall__part_0_bounds = _outer_wall__part_0.getBounds();
                let _outer_wall__part_0_x = _outer_wall__part_0_bounds[0].x + (_outer_wall__part_0_bounds[1].x - _outer_wall__part_0_bounds[0].x) / 2
                let _outer_wall__part_0_y = _outer_wall__part_0_bounds[0].y + (_outer_wall__part_0_bounds[1].y - _outer_wall__part_0_bounds[0].y) / 2
                _outer_wall__part_0 = translate([-_outer_wall__part_0_x, -_outer_wall__part_0_y, 0], _outer_wall__part_0);
                _outer_wall__part_0 = rotate([0,0,0], _outer_wall__part_0);
                _outer_wall__part_0 = translate([_outer_wall__part_0_x, _outer_wall__part_0_y, 0], _outer_wall__part_0);

                _outer_wall__part_0 = translate([0,0,0], _outer_wall__part_0);
                let result = _outer_wall__part_0;
                
            
                    return result;
                }
            
            

                function _inner_wall_case_fn() {
                    

                // creating part 0 of case _inner_wall
                let _inner_wall__part_0 = board_left_extrude_8_4_outline_fn();

                // make sure that rotations are relative
                let _inner_wall__part_0_bounds = _inner_wall__part_0.getBounds();
                let _inner_wall__part_0_x = _inner_wall__part_0_bounds[0].x + (_inner_wall__part_0_bounds[1].x - _inner_wall__part_0_bounds[0].x) / 2
                let _inner_wall__part_0_y = _inner_wall__part_0_bounds[0].y + (_inner_wall__part_0_bounds[1].y - _inner_wall__part_0_bounds[0].y) / 2
                _inner_wall__part_0 = translate([-_inner_wall__part_0_x, -_inner_wall__part_0_y, 0], _inner_wall__part_0);
                _inner_wall__part_0 = rotate([0,0,0], _inner_wall__part_0);
                _inner_wall__part_0 = translate([_inner_wall__part_0_x, _inner_wall__part_0_y, 0], _inner_wall__part_0);

                _inner_wall__part_0 = translate([0,0,0], _inner_wall__part_0);
                let result = _inner_wall__part_0;
                
            
                    return result;
                }
            
            

                function left_case_case_fn() {
                    

                // creating part 0 of case left_case
                let left_case__part_0 = _standoffs_case_fn();

                // make sure that rotations are relative
                let left_case__part_0_bounds = left_case__part_0.getBounds();
                let left_case__part_0_x = left_case__part_0_bounds[0].x + (left_case__part_0_bounds[1].x - left_case__part_0_bounds[0].x) / 2
                let left_case__part_0_y = left_case__part_0_bounds[0].y + (left_case__part_0_bounds[1].y - left_case__part_0_bounds[0].y) / 2
                left_case__part_0 = translate([-left_case__part_0_x, -left_case__part_0_y, 0], left_case__part_0);
                left_case__part_0 = rotate([0,0,0], left_case__part_0);
                left_case__part_0 = translate([left_case__part_0_x, left_case__part_0_y, 0], left_case__part_0);

                left_case__part_0 = translate([0,0,0], left_case__part_0);
                let result = left_case__part_0;
                
            

                // creating part 1 of case left_case
                let left_case__part_1 = _holes_case_fn();

                // make sure that rotations are relative
                let left_case__part_1_bounds = left_case__part_1.getBounds();
                let left_case__part_1_x = left_case__part_1_bounds[0].x + (left_case__part_1_bounds[1].x - left_case__part_1_bounds[0].x) / 2
                let left_case__part_1_y = left_case__part_1_bounds[0].y + (left_case__part_1_bounds[1].y - left_case__part_1_bounds[0].y) / 2
                left_case__part_1 = translate([-left_case__part_1_x, -left_case__part_1_y, 0], left_case__part_1);
                left_case__part_1 = rotate([0,0,0], left_case__part_1);
                left_case__part_1 = translate([left_case__part_1_x, left_case__part_1_y, 0], left_case__part_1);

                left_case__part_1 = translate([0,0,0], left_case__part_1);
                result = result.subtract(left_case__part_1);
                
            

                // creating part 2 of case left_case
                let left_case__part_2 = xl_bottom_case_fn();

                // make sure that rotations are relative
                let left_case__part_2_bounds = left_case__part_2.getBounds();
                let left_case__part_2_x = left_case__part_2_bounds[0].x + (left_case__part_2_bounds[1].x - left_case__part_2_bounds[0].x) / 2
                let left_case__part_2_y = left_case__part_2_bounds[0].y + (left_case__part_2_bounds[1].y - left_case__part_2_bounds[0].y) / 2
                left_case__part_2 = translate([-left_case__part_2_x, -left_case__part_2_y, 0], left_case__part_2);
                left_case__part_2 = rotate([0,0,0], left_case__part_2);
                left_case__part_2 = translate([left_case__part_2_x, left_case__part_2_y, 0], left_case__part_2);

                left_case__part_2 = translate([0,0,0], left_case__part_2);
                result = result.union(left_case__part_2);
                
            

                // creating part 3 of case left_case
                let left_case__part_3 = _wall_case_fn();

                // make sure that rotations are relative
                let left_case__part_3_bounds = left_case__part_3.getBounds();
                let left_case__part_3_x = left_case__part_3_bounds[0].x + (left_case__part_3_bounds[1].x - left_case__part_3_bounds[0].x) / 2
                let left_case__part_3_y = left_case__part_3_bounds[0].y + (left_case__part_3_bounds[1].y - left_case__part_3_bounds[0].y) / 2
                left_case__part_3 = translate([-left_case__part_3_x, -left_case__part_3_y, 0], left_case__part_3);
                left_case__part_3 = rotate([0,0,0], left_case__part_3);
                left_case__part_3 = translate([left_case__part_3_x, left_case__part_3_y, 0], left_case__part_3);

                left_case__part_3 = translate([0,0,0], left_case__part_3);
                result = result.union(left_case__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return left_case_case_fn();
            }

        