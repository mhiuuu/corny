function xl_board_left_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[36.5,-192.069777],[36.5,-111.7627752]]).appendArc([39.6962236,-107.8443644],{"radius":4,"clockwise":true,"large":false}).appendPoint([55.4647244,-104.6098001]).appendArc([56.4862144,-104.2506593],{"radius":4,"clockwise":false,"large":false}).appendPoint([75.1017616,-94.7042248]).appendArc([75.9335264,-94.3888394],{"radius":4,"clockwise":true,"large":false}).appendPoint([94.6357771,-89.5933905]).appendArc([95.3752471,-89.4761206],{"radius":4,"clockwise":true,"large":false}).appendPoint([127.3880066,-87.438945]).appendArc([128.595553,-87.5461812],{"radius":4,"clockwise":true,"large":false}).appendPoint([160.5302151,-95.3846892]).appendArc([161.4837299,-95.5],{"radius":4,"clockwise":false,"large":false}).appendPoint([185.0239003,-95.5]).appendArc([189.0238157,-99.5260144],{"radius":4,"clockwise":true,"large":false}).appendPoint([188.3194532,-207.826698]).appendArc([184.2478117,-211.8000405],{"radius":4,"clockwise":true,"large":false}).appendPoint([57.3557595,-209.5243147]).appendArc([54.9385091,-208.6562509],{"radius":4,"clockwise":true,"large":false}).appendPoint([38.0110237,-195.2010701]).appendArc([36.5,-192.069777],{"radius":4,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.5] });
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
            
            
        
            function main() {
                return xl_bottom_case_fn();
            }

        