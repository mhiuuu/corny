function xl_board_left_extrude_2_outline_fn(){
    return new CSG.Path2D([[36.5,-192.069777],[36.5,-111.7627752]]).appendArc([39.6962236,-107.8443644],{"radius":4,"clockwise":true,"large":false}).appendPoint([55.4647244,-104.6098001]).appendArc([56.4862144,-104.2506593],{"radius":4,"clockwise":false,"large":false}).appendPoint([75.1017616,-94.7042248]).appendArc([75.9335264,-94.3888394],{"radius":4,"clockwise":true,"large":false}).appendPoint([94.6357771,-89.5933905]).appendArc([95.3752471,-89.4761206],{"radius":4,"clockwise":true,"large":false}).appendPoint([127.3880066,-87.438945]).appendArc([128.595553,-87.5461812],{"radius":4,"clockwise":true,"large":false}).appendPoint([160.5302151,-95.3846892]).appendArc([161.4837299,-95.5],{"radius":4,"clockwise":false,"large":false}).appendPoint([187.9537287,-95.5]).appendArc([191.9525977,-99.5951132],{"radius":4,"clockwise":true,"large":false}).appendPoint([189.3726165,-208.0660336]).appendArc([185.2973427,-211.9701906],{"radius":4,"clockwise":true,"large":false}).appendPoint([57.3531227,-209.525851]).appendArc([54.9405511,-208.6578739],{"radius":4,"clockwise":true,"large":false}).appendPoint([38.0110237,-195.2010701]).appendArc([36.5,-192.069777],{"radius":4,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}




                function xl_left_bottom_case_fn() {
                    

                // creating part 0 of case xl_left_bottom
                let xl_left_bottom__part_0 = xl_board_left_extrude_2_outline_fn();

                // make sure that rotations are relative
                let xl_left_bottom__part_0_bounds = xl_left_bottom__part_0.getBounds();
                let xl_left_bottom__part_0_x = xl_left_bottom__part_0_bounds[0].x + (xl_left_bottom__part_0_bounds[1].x - xl_left_bottom__part_0_bounds[0].x) / 2
                let xl_left_bottom__part_0_y = xl_left_bottom__part_0_bounds[0].y + (xl_left_bottom__part_0_bounds[1].y - xl_left_bottom__part_0_bounds[0].y) / 2
                xl_left_bottom__part_0 = translate([-xl_left_bottom__part_0_x, -xl_left_bottom__part_0_y, 0], xl_left_bottom__part_0);
                xl_left_bottom__part_0 = rotate([0,0,0], xl_left_bottom__part_0);
                xl_left_bottom__part_0 = translate([xl_left_bottom__part_0_x, xl_left_bottom__part_0_y, 0], xl_left_bottom__part_0);

                xl_left_bottom__part_0 = translate([0,0,0], xl_left_bottom__part_0);
                let result = xl_left_bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return xl_left_bottom_case_fn();
            }

        