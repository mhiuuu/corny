function xl_board_right_extrude_8_4_outline_fn(){
    return new CSG.Path2D([[358.5,-192.069777],[358.5,-111.7627752]]).appendArc([355.3037764,-107.8443644],{"radius":4,"clockwise":false,"large":false}).appendPoint([339.5352756,-104.6098001]).appendArc([338.5137856,-104.2506593],{"radius":4,"clockwise":true,"large":false}).appendPoint([319.8982384,-94.7042248]).appendArc([319.0664736,-94.3888394],{"radius":4,"clockwise":false,"large":false}).appendPoint([300.3642229,-89.5933905]).appendArc([299.6247529,-89.4761206],{"radius":4,"clockwise":false,"large":false}).appendPoint([267.6119934,-87.438945]).appendArc([266.404447,-87.5461812],{"radius":4,"clockwise":false,"large":false}).appendPoint([234.4697849,-95.3846892]).appendArc([233.5162701,-95.5],{"radius":4,"clockwise":true,"large":false}).appendPoint([209.9760997,-95.5]).appendArc([205.9761843,-99.5260144],{"radius":4,"clockwise":false,"large":false}).appendPoint([206.6805468,-207.826698]).appendArc([210.7521883,-211.8000405],{"radius":4,"clockwise":false,"large":false}).appendPoint([337.6442405,-209.5243147]).appendArc([340.0614909,-208.6562509],{"radius":4,"clockwise":false,"large":false}).appendPoint([356.9889763,-195.2010701]).appendArc([358.5,-192.069777],{"radius":4,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 8.4] });
}


function board_right_extrude_8_4_outline_fn(){
    return new CSG.Path2D([[356.5,-190.069777],[356.5,-113.7627752]]).appendArc([353.3037764,-109.8443644],{"radius":4,"clockwise":false,"large":false}).appendPoint([337.5352756,-106.6098001]).appendArc([336.5137856,-106.2506593],{"radius":4,"clockwise":true,"large":false}).appendPoint([317.8982384,-96.7042248]).appendArc([317.0664736,-96.3888394],{"radius":4,"clockwise":false,"large":false}).appendPoint([298.4318198,-91.610723]).appendArc([297.5543982,-91.4870632],{"radius":4,"clockwise":false,"large":false}).appendPoint([267.4984183,-90.6144702]).appendArc([266.5132831,-90.7083338],{"radius":4,"clockwise":false,"large":false}).appendPoint([236.4292748,-97.4044517]).appendArc([235.5602196,-97.5],{"radius":4,"clockwise":true,"large":false}).appendPoint([213.541571,-97.5]).appendArc([209.5415799,-101.491562],{"radius":4,"clockwise":false,"large":false}).appendPoint([209.3225686,-205.3140737]).appendArc([213.3815113,-209.3220773],{"radius":4,"clockwise":false,"large":false}).appendPoint([335.6370444,-207.5200893]).appendArc([338.0670692,-206.6518168],{"radius":4,"clockwise":false,"large":false}).appendPoint([354.9889763,-193.2010701]).appendArc([356.5,-190.069777],{"radius":4,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 8.4] });
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
            
            
        
            function main() {
                return right_wall_case_fn();
            }

        