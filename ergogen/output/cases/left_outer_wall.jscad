function xl_board_left_extrude_15_outline_fn(){
    return new CSG.Path2D([[36.5,-192.069777],[36.5,-111.7627752]]).appendArc([39.6962236,-107.8443644],{"radius":4,"clockwise":true,"large":false}).appendPoint([55.4647244,-104.6098001]).appendArc([56.4862144,-104.2506593],{"radius":4,"clockwise":false,"large":false}).appendPoint([75.1017616,-94.7042248]).appendArc([75.9335264,-94.3888394],{"radius":4,"clockwise":true,"large":false}).appendPoint([94.6357771,-89.5933905]).appendArc([95.3752471,-89.4761206],{"radius":4,"clockwise":true,"large":false}).appendPoint([127.3880066,-87.438945]).appendArc([128.595553,-87.5461812],{"radius":4,"clockwise":true,"large":false}).appendPoint([160.5302151,-95.3846892]).appendArc([161.4837299,-95.5],{"radius":4,"clockwise":false,"large":false}).appendPoint([187.9537287,-95.5]).appendArc([191.9525977,-99.5951132],{"radius":4,"clockwise":true,"large":false}).appendPoint([189.3726165,-208.0660336]).appendArc([185.2973427,-211.9701906],{"radius":4,"clockwise":true,"large":false}).appendPoint([57.3531227,-209.525851]).appendArc([54.9405511,-208.6578739],{"radius":4,"clockwise":true,"large":false}).appendPoint([38.0110237,-195.2010701]).appendArc([36.5,-192.069777],{"radius":4,"clockwise":true,"large":false}).close().innerToCAG()
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
            
            
        
            function main() {
                return left_outer_wall_case_fn();
            }

        