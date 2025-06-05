function xl_board_left_extrude_15_outline_fn(){
    return new CSG.Path2D([[36.5,-192.069777],[36.5,-111.7627752]]).appendArc([39.6962236,-107.8443644],{"radius":4,"clockwise":true,"large":false}).appendPoint([55.4647244,-104.6098001]).appendArc([56.4862144,-104.2506593],{"radius":4,"clockwise":false,"large":false}).appendPoint([75.1017616,-94.7042248]).appendArc([75.9335264,-94.3888394],{"radius":4,"clockwise":true,"large":false}).appendPoint([94.6357771,-89.5933905]).appendArc([95.3752471,-89.4761206],{"radius":4,"clockwise":true,"large":false}).appendPoint([127.3880066,-87.438945]).appendArc([128.595553,-87.5461812],{"radius":4,"clockwise":true,"large":false}).appendPoint([160.5302151,-95.3846892]).appendArc([161.4837299,-95.5],{"radius":4,"clockwise":false,"large":false}).appendPoint([187.9537287,-95.5]).appendArc([191.9525977,-99.5951132],{"radius":4,"clockwise":true,"large":false}).appendPoint([189.3726165,-208.0660336]).appendArc([185.2973427,-211.9701906],{"radius":4,"clockwise":true,"large":false}).appendPoint([57.3531227,-209.525851]).appendArc([54.9405511,-208.6578739],{"radius":4,"clockwise":true,"large":false}).appendPoint([38.0110237,-195.2010701]).appendArc([36.5,-192.069777],{"radius":4,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 15] });
}


function board_left_extrude_15_outline_fn(){
    return new CSG.Path2D([[38.5,-190.069777],[38.5,-113.7627752]]).appendArc([41.6962236,-109.8443644],{"radius":4,"clockwise":true,"large":false}).appendPoint([57.4647244,-106.6098001]).appendArc([58.4862144,-106.2506593],{"radius":4,"clockwise":false,"large":false}).appendPoint([77.1017616,-96.7042248]).appendArc([77.9335264,-96.3888394],{"radius":4,"clockwise":true,"large":false}).appendPoint([96.5681802,-91.610723]).appendArc([97.4456018,-91.4870632],{"radius":4,"clockwise":true,"large":false}).appendPoint([127.5015817,-90.6144702]).appendArc([128.4867169,-90.7083338],{"radius":4,"clockwise":true,"large":false}).appendPoint([158.5707252,-97.4044517]).appendArc([159.4397804,-97.5],{"radius":4,"clockwise":false,"large":false}).appendPoint([181.458429,-97.5]).appendArc([185.4584201,-101.491562],{"radius":4,"clockwise":true,"large":false}).appendPoint([185.6774314,-205.3140737]).appendArc([181.6184887,-209.3220773],{"radius":4,"clockwise":true,"large":false}).appendPoint([59.3629556,-207.5200893]).appendArc([56.9329308,-206.6518168],{"radius":4,"clockwise":true,"large":false}).appendPoint([40.0110237,-193.2010701]).appendArc([38.5,-190.069777],{"radius":4,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 15] });
}




                function left_outer_wall_case_fn() {
                    

                // creating part 0 of case left_outer_wall
                let left_outer_wall__part_0 = xl_board_left_extrude_15_outline_fn();

                // make sure that rotations are relative
                let left_outer_wall__part_0_bounds = left_outer_wall__part_0.getBounds();
                let left_outer_wall__part_0_x = left_outer_wall__part_0_bounds[0].x + (left_outer_wall__part_0_bounds[1].x - left_outer_wall__part_0_bounds[0].x) / 2
                let left_outer_wall__part_0_y = left_outer_wall__part_0_bounds[0].y + (left_outer_wall__part_0_bounds[1].y - left_outer_wall__part_0_bounds[0].y) / 2
                left_outer_wall__part_0 = translate([-left_outer_wall__part_0_x, -left_outer_wall__part_0_y, 0], left_outer_wall__part_0);
                left_outer_wall__part_0 = rotate([0,0,0], left_outer_wall__part_0);
                left_outer_wall__part_0 = translate([left_outer_wall__part_0_x, left_outer_wall__part_0_y, 0], left_outer_wall__part_0);

                left_outer_wall__part_0 = translate([0,0,0], left_outer_wall__part_0);
                let result = left_outer_wall__part_0;
                
            
                    return result;
                }
            
            

                function left_inner_wall_case_fn() {
                    

                // creating part 0 of case left_inner_wall
                let left_inner_wall__part_0 = board_left_extrude_15_outline_fn();

                // make sure that rotations are relative
                let left_inner_wall__part_0_bounds = left_inner_wall__part_0.getBounds();
                let left_inner_wall__part_0_x = left_inner_wall__part_0_bounds[0].x + (left_inner_wall__part_0_bounds[1].x - left_inner_wall__part_0_bounds[0].x) / 2
                let left_inner_wall__part_0_y = left_inner_wall__part_0_bounds[0].y + (left_inner_wall__part_0_bounds[1].y - left_inner_wall__part_0_bounds[0].y) / 2
                left_inner_wall__part_0 = translate([-left_inner_wall__part_0_x, -left_inner_wall__part_0_y, 0], left_inner_wall__part_0);
                left_inner_wall__part_0 = rotate([0,0,0], left_inner_wall__part_0);
                left_inner_wall__part_0 = translate([left_inner_wall__part_0_x, left_inner_wall__part_0_y, 0], left_inner_wall__part_0);

                left_inner_wall__part_0 = translate([0,0,0], left_inner_wall__part_0);
                let result = left_inner_wall__part_0;
                
            
                    return result;
                }
            
            

                function left_wall_case_fn() {
                    

                // creating part 0 of case left_wall
                let left_wall__part_0 = left_outer_wall_case_fn();

                // make sure that rotations are relative
                let left_wall__part_0_bounds = left_wall__part_0.getBounds();
                let left_wall__part_0_x = left_wall__part_0_bounds[0].x + (left_wall__part_0_bounds[1].x - left_wall__part_0_bounds[0].x) / 2
                let left_wall__part_0_y = left_wall__part_0_bounds[0].y + (left_wall__part_0_bounds[1].y - left_wall__part_0_bounds[0].y) / 2
                left_wall__part_0 = translate([-left_wall__part_0_x, -left_wall__part_0_y, 0], left_wall__part_0);
                left_wall__part_0 = rotate([0,0,0], left_wall__part_0);
                left_wall__part_0 = translate([left_wall__part_0_x, left_wall__part_0_y, 0], left_wall__part_0);

                left_wall__part_0 = translate([0,0,0], left_wall__part_0);
                let result = left_wall__part_0;
                
            

                // creating part 1 of case left_wall
                let left_wall__part_1 = left_inner_wall_case_fn();

                // make sure that rotations are relative
                let left_wall__part_1_bounds = left_wall__part_1.getBounds();
                let left_wall__part_1_x = left_wall__part_1_bounds[0].x + (left_wall__part_1_bounds[1].x - left_wall__part_1_bounds[0].x) / 2
                let left_wall__part_1_y = left_wall__part_1_bounds[0].y + (left_wall__part_1_bounds[1].y - left_wall__part_1_bounds[0].y) / 2
                left_wall__part_1 = translate([-left_wall__part_1_x, -left_wall__part_1_y, 0], left_wall__part_1);
                left_wall__part_1 = rotate([0,0,0], left_wall__part_1);
                left_wall__part_1 = translate([left_wall__part_1_x, left_wall__part_1_y, 0], left_wall__part_1);

                left_wall__part_1 = translate([0,0,0], left_wall__part_1);
                result = result.subtract(left_wall__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return left_wall_case_fn();
            }

        