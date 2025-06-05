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


function xl_board_right_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[358.5,-192.069777],[358.5,-111.7627752]]).appendArc([355.3037764,-107.8443644],{"radius":4,"clockwise":false,"large":false}).appendPoint([339.5352756,-104.6098001]).appendArc([338.5137856,-104.2506593],{"radius":4,"clockwise":true,"large":false}).appendPoint([319.8982384,-94.7042248]).appendArc([319.0664736,-94.3888394],{"radius":4,"clockwise":false,"large":false}).appendPoint([300.3642229,-89.5933905]).appendArc([299.6247529,-89.4761206],{"radius":4,"clockwise":false,"large":false}).appendPoint([267.6119934,-87.438945]).appendArc([266.404447,-87.5461812],{"radius":4,"clockwise":false,"large":false}).appendPoint([234.4697849,-95.3846892]).appendArc([233.5162701,-95.5],{"radius":4,"clockwise":true,"large":false}).appendPoint([209.9760997,-95.5]).appendArc([205.9761843,-99.5260144],{"radius":4,"clockwise":false,"large":false}).appendPoint([206.6805468,-207.826698]).appendArc([210.7521883,-211.8000405],{"radius":4,"clockwise":false,"large":false}).appendPoint([337.6442405,-209.5243147]).appendArc([340.0614909,-208.6562509],{"radius":4,"clockwise":false,"large":false}).appendPoint([356.9889763,-195.2010701]).appendArc([358.5,-192.069777],{"radius":4,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.5] });
}


function xl_board_right_extrude_8_4_outline_fn(){
    return new CSG.Path2D([[358.5,-192.069777],[358.5,-111.7627752]]).appendArc([355.3037764,-107.8443644],{"radius":4,"clockwise":false,"large":false}).appendPoint([339.5352756,-104.6098001]).appendArc([338.5137856,-104.2506593],{"radius":4,"clockwise":true,"large":false}).appendPoint([319.8982384,-94.7042248]).appendArc([319.0664736,-94.3888394],{"radius":4,"clockwise":false,"large":false}).appendPoint([300.3642229,-89.5933905]).appendArc([299.6247529,-89.4761206],{"radius":4,"clockwise":false,"large":false}).appendPoint([267.6119934,-87.438945]).appendArc([266.404447,-87.5461812],{"radius":4,"clockwise":false,"large":false}).appendPoint([234.4697849,-95.3846892]).appendArc([233.5162701,-95.5],{"radius":4,"clockwise":true,"large":false}).appendPoint([209.9760997,-95.5]).appendArc([205.9761843,-99.5260144],{"radius":4,"clockwise":false,"large":false}).appendPoint([206.6805468,-207.826698]).appendArc([210.7521883,-211.8000405],{"radius":4,"clockwise":false,"large":false}).appendPoint([337.6442405,-209.5243147]).appendArc([340.0614909,-208.6562509],{"radius":4,"clockwise":false,"large":false}).appendPoint([356.9889763,-195.2010701]).appendArc([358.5,-192.069777],{"radius":4,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 8.4] });
}


function board_right_extrude_8_4_outline_fn(){
    return new CSG.Path2D([[356.5,-190.069777],[356.5,-113.7627752]]).appendArc([353.3037764,-109.8443644],{"radius":4,"clockwise":false,"large":false}).appendPoint([337.5352756,-106.6098001]).appendArc([336.5137856,-106.2506593],{"radius":4,"clockwise":true,"large":false}).appendPoint([317.8982384,-96.7042248]).appendArc([317.0664736,-96.3888394],{"radius":4,"clockwise":false,"large":false}).appendPoint([298.4318198,-91.610723]).appendArc([297.5543982,-91.4870632],{"radius":4,"clockwise":false,"large":false}).appendPoint([267.4984183,-90.6144702]).appendArc([266.5132831,-90.7083338],{"radius":4,"clockwise":false,"large":false}).appendPoint([236.4292748,-97.4044517]).appendArc([235.5602196,-97.5],{"radius":4,"clockwise":true,"large":false}).appendPoint([213.541571,-97.5]).appendArc([209.5415799,-101.491562],{"radius":4,"clockwise":false,"large":false}).appendPoint([209.3225686,-205.3140737]).appendArc([213.3815113,-209.3220773],{"radius":4,"clockwise":false,"large":false}).appendPoint([335.6370444,-207.5200893]).appendArc([338.0670692,-206.6518168],{"radius":4,"clockwise":false,"large":false}).appendPoint([354.9889763,-193.2010701]).appendArc([356.5,-190.069777],{"radius":4,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 8.4] });
}




                function right_standoffs_case_fn() {
                    

                // creating part 0 of case right_standoffs
                let right_standoffs__part_0 = standoff_extrude_8_4_outline_fn();

                // make sure that rotations are relative
                let right_standoffs__part_0_bounds = right_standoffs__part_0.getBounds();
                let right_standoffs__part_0_x = right_standoffs__part_0_bounds[0].x + (right_standoffs__part_0_bounds[1].x - right_standoffs__part_0_bounds[0].x) / 2
                let right_standoffs__part_0_y = right_standoffs__part_0_bounds[0].y + (right_standoffs__part_0_bounds[1].y - right_standoffs__part_0_bounds[0].y) / 2
                right_standoffs__part_0 = translate([-right_standoffs__part_0_x, -right_standoffs__part_0_y, 0], right_standoffs__part_0);
                right_standoffs__part_0 = rotate([0,0,0], right_standoffs__part_0);
                right_standoffs__part_0 = translate([right_standoffs__part_0_x, right_standoffs__part_0_y, 0], right_standoffs__part_0);

                right_standoffs__part_0 = translate([0,0,0], right_standoffs__part_0);
                let result = right_standoffs__part_0;
                
            
                    return result;
                }
            
            

                function right_holes_case_fn() {
                    

                // creating part 0 of case right_holes
                let right_holes__part_0 = mounting_extrude_8_4_outline_fn();

                // make sure that rotations are relative
                let right_holes__part_0_bounds = right_holes__part_0.getBounds();
                let right_holes__part_0_x = right_holes__part_0_bounds[0].x + (right_holes__part_0_bounds[1].x - right_holes__part_0_bounds[0].x) / 2
                let right_holes__part_0_y = right_holes__part_0_bounds[0].y + (right_holes__part_0_bounds[1].y - right_holes__part_0_bounds[0].y) / 2
                right_holes__part_0 = translate([-right_holes__part_0_x, -right_holes__part_0_y, 0], right_holes__part_0);
                right_holes__part_0 = rotate([0,0,0], right_holes__part_0);
                right_holes__part_0 = translate([right_holes__part_0_x, right_holes__part_0_y, 0], right_holes__part_0);

                right_holes__part_0 = translate([0,0,0], right_holes__part_0);
                let result = right_holes__part_0;
                
            
                    return result;
                }
            
            

                function right_xl_bottom_case_fn() {
                    

                // creating part 0 of case right_xl_bottom
                let right_xl_bottom__part_0 = xl_board_right_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let right_xl_bottom__part_0_bounds = right_xl_bottom__part_0.getBounds();
                let right_xl_bottom__part_0_x = right_xl_bottom__part_0_bounds[0].x + (right_xl_bottom__part_0_bounds[1].x - right_xl_bottom__part_0_bounds[0].x) / 2
                let right_xl_bottom__part_0_y = right_xl_bottom__part_0_bounds[0].y + (right_xl_bottom__part_0_bounds[1].y - right_xl_bottom__part_0_bounds[0].y) / 2
                right_xl_bottom__part_0 = translate([-right_xl_bottom__part_0_x, -right_xl_bottom__part_0_y, 0], right_xl_bottom__part_0);
                right_xl_bottom__part_0 = rotate([0,0,0], right_xl_bottom__part_0);
                right_xl_bottom__part_0 = translate([right_xl_bottom__part_0_x, right_xl_bottom__part_0_y, 0], right_xl_bottom__part_0);

                right_xl_bottom__part_0 = translate([0,0,0], right_xl_bottom__part_0);
                let result = right_xl_bottom__part_0;
                
            
                    return result;
                }
            
            

                function right_wall_case_fn() {
                    

                // creating part 0 of case right_wall
                let right_wall__part_0 = right_outer_wall_case_fn();

                // make sure that rotations are relative
                let right_wall__part_0_bounds = right_wall__part_0.getBounds();
                let right_wall__part_0_x = right_wall__part_0_bounds[0].x + (right_wall__part_0_bounds[1].x - right_wall__part_0_bounds[0].x) / 2
                let right_wall__part_0_y = right_wall__part_0_bounds[0].y + (right_wall__part_0_bounds[1].y - right_wall__part_0_bounds[0].y) / 2
                right_wall__part_0 = translate([-right_wall__part_0_x, -right_wall__part_0_y, 0], right_wall__part_0);
                right_wall__part_0 = rotate([0,0,0], right_wall__part_0);
                right_wall__part_0 = translate([right_wall__part_0_x, right_wall__part_0_y, 0], right_wall__part_0);

                right_wall__part_0 = translate([0,0,0], right_wall__part_0);
                let result = right_wall__part_0;
                
            

                // creating part 1 of case right_wall
                let right_wall__part_1 = right_inner_wall_case_fn();

                // make sure that rotations are relative
                let right_wall__part_1_bounds = right_wall__part_1.getBounds();
                let right_wall__part_1_x = right_wall__part_1_bounds[0].x + (right_wall__part_1_bounds[1].x - right_wall__part_1_bounds[0].x) / 2
                let right_wall__part_1_y = right_wall__part_1_bounds[0].y + (right_wall__part_1_bounds[1].y - right_wall__part_1_bounds[0].y) / 2
                right_wall__part_1 = translate([-right_wall__part_1_x, -right_wall__part_1_y, 0], right_wall__part_1);
                right_wall__part_1 = rotate([0,0,0], right_wall__part_1);
                right_wall__part_1 = translate([right_wall__part_1_x, right_wall__part_1_y, 0], right_wall__part_1);

                right_wall__part_1 = translate([0,0,0], right_wall__part_1);
                result = result.subtract(right_wall__part_1);
                
            
                    return result;
                }
            
            

                function right_outer_wall_case_fn() {
                    

                // creating part 0 of case right_outer_wall
                let right_outer_wall__part_0 = xl_board_right_extrude_8_4_outline_fn();

                // make sure that rotations are relative
                let right_outer_wall__part_0_bounds = right_outer_wall__part_0.getBounds();
                let right_outer_wall__part_0_x = right_outer_wall__part_0_bounds[0].x + (right_outer_wall__part_0_bounds[1].x - right_outer_wall__part_0_bounds[0].x) / 2
                let right_outer_wall__part_0_y = right_outer_wall__part_0_bounds[0].y + (right_outer_wall__part_0_bounds[1].y - right_outer_wall__part_0_bounds[0].y) / 2
                right_outer_wall__part_0 = translate([-right_outer_wall__part_0_x, -right_outer_wall__part_0_y, 0], right_outer_wall__part_0);
                right_outer_wall__part_0 = rotate([0,0,0], right_outer_wall__part_0);
                right_outer_wall__part_0 = translate([right_outer_wall__part_0_x, right_outer_wall__part_0_y, 0], right_outer_wall__part_0);

                right_outer_wall__part_0 = translate([0,0,0], right_outer_wall__part_0);
                let result = right_outer_wall__part_0;
                
            
                    return result;
                }
            
            

                function right_inner_wall_case_fn() {
                    

                // creating part 0 of case right_inner_wall
                let right_inner_wall__part_0 = board_right_extrude_8_4_outline_fn();

                // make sure that rotations are relative
                let right_inner_wall__part_0_bounds = right_inner_wall__part_0.getBounds();
                let right_inner_wall__part_0_x = right_inner_wall__part_0_bounds[0].x + (right_inner_wall__part_0_bounds[1].x - right_inner_wall__part_0_bounds[0].x) / 2
                let right_inner_wall__part_0_y = right_inner_wall__part_0_bounds[0].y + (right_inner_wall__part_0_bounds[1].y - right_inner_wall__part_0_bounds[0].y) / 2
                right_inner_wall__part_0 = translate([-right_inner_wall__part_0_x, -right_inner_wall__part_0_y, 0], right_inner_wall__part_0);
                right_inner_wall__part_0 = rotate([0,0,0], right_inner_wall__part_0);
                right_inner_wall__part_0 = translate([right_inner_wall__part_0_x, right_inner_wall__part_0_y, 0], right_inner_wall__part_0);

                right_inner_wall__part_0 = translate([0,0,0], right_inner_wall__part_0);
                let result = right_inner_wall__part_0;
                
            
                    return result;
                }
            
            

                function right_case_case_fn() {
                    

                // creating part 0 of case right_case
                let right_case__part_0 = right_standoffs_case_fn();

                // make sure that rotations are relative
                let right_case__part_0_bounds = right_case__part_0.getBounds();
                let right_case__part_0_x = right_case__part_0_bounds[0].x + (right_case__part_0_bounds[1].x - right_case__part_0_bounds[0].x) / 2
                let right_case__part_0_y = right_case__part_0_bounds[0].y + (right_case__part_0_bounds[1].y - right_case__part_0_bounds[0].y) / 2
                right_case__part_0 = translate([-right_case__part_0_x, -right_case__part_0_y, 0], right_case__part_0);
                right_case__part_0 = rotate([0,0,0], right_case__part_0);
                right_case__part_0 = translate([right_case__part_0_x, right_case__part_0_y, 0], right_case__part_0);

                right_case__part_0 = translate([0,0,0], right_case__part_0);
                let result = right_case__part_0;
                
            

                // creating part 1 of case right_case
                let right_case__part_1 = right_holes_case_fn();

                // make sure that rotations are relative
                let right_case__part_1_bounds = right_case__part_1.getBounds();
                let right_case__part_1_x = right_case__part_1_bounds[0].x + (right_case__part_1_bounds[1].x - right_case__part_1_bounds[0].x) / 2
                let right_case__part_1_y = right_case__part_1_bounds[0].y + (right_case__part_1_bounds[1].y - right_case__part_1_bounds[0].y) / 2
                right_case__part_1 = translate([-right_case__part_1_x, -right_case__part_1_y, 0], right_case__part_1);
                right_case__part_1 = rotate([0,0,0], right_case__part_1);
                right_case__part_1 = translate([right_case__part_1_x, right_case__part_1_y, 0], right_case__part_1);

                right_case__part_1 = translate([0,0,0], right_case__part_1);
                result = result.subtract(right_case__part_1);
                
            

                // creating part 2 of case right_case
                let right_case__part_2 = right_xl_bottom_case_fn();

                // make sure that rotations are relative
                let right_case__part_2_bounds = right_case__part_2.getBounds();
                let right_case__part_2_x = right_case__part_2_bounds[0].x + (right_case__part_2_bounds[1].x - right_case__part_2_bounds[0].x) / 2
                let right_case__part_2_y = right_case__part_2_bounds[0].y + (right_case__part_2_bounds[1].y - right_case__part_2_bounds[0].y) / 2
                right_case__part_2 = translate([-right_case__part_2_x, -right_case__part_2_y, 0], right_case__part_2);
                right_case__part_2 = rotate([0,0,0], right_case__part_2);
                right_case__part_2 = translate([right_case__part_2_x, right_case__part_2_y, 0], right_case__part_2);

                right_case__part_2 = translate([0,0,0], right_case__part_2);
                result = result.union(right_case__part_2);
                
            

                // creating part 3 of case right_case
                let right_case__part_3 = right_wall_case_fn();

                // make sure that rotations are relative
                let right_case__part_3_bounds = right_case__part_3.getBounds();
                let right_case__part_3_x = right_case__part_3_bounds[0].x + (right_case__part_3_bounds[1].x - right_case__part_3_bounds[0].x) / 2
                let right_case__part_3_y = right_case__part_3_bounds[0].y + (right_case__part_3_bounds[1].y - right_case__part_3_bounds[0].y) / 2
                right_case__part_3 = translate([-right_case__part_3_x, -right_case__part_3_y, 0], right_case__part_3);
                right_case__part_3 = rotate([0,0,0], right_case__part_3);
                right_case__part_3 = translate([right_case__part_3_x, right_case__part_3_y, 0], right_case__part_3);

                right_case__part_3 = translate([0,0,0], right_case__part_3);
                result = result.union(right_case__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return right_case_case_fn();
            }

        