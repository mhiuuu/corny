function xl_board_right_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[358.5,-192.069777],[358.5,-111.7627752]]).appendArc([355.3037764,-107.8443644],{"radius":4,"clockwise":false,"large":false}).appendPoint([339.5352756,-104.6098001]).appendArc([338.5137856,-104.2506593],{"radius":4,"clockwise":true,"large":false}).appendPoint([319.8982384,-94.7042248]).appendArc([319.0664736,-94.3888394],{"radius":4,"clockwise":false,"large":false}).appendPoint([300.3642229,-89.5933905]).appendArc([299.6247529,-89.4761206],{"radius":4,"clockwise":false,"large":false}).appendPoint([267.6119934,-87.438945]).appendArc([266.404447,-87.5461812],{"radius":4,"clockwise":false,"large":false}).appendPoint([234.4697849,-95.3846892]).appendArc([233.5162701,-95.5],{"radius":4,"clockwise":true,"large":false}).appendPoint([209.9760997,-95.5]).appendArc([205.9761843,-99.5260144],{"radius":4,"clockwise":false,"large":false}).appendPoint([206.6805468,-207.826698]).appendArc([210.7521883,-211.8000405],{"radius":4,"clockwise":false,"large":false}).appendPoint([337.6442405,-209.5243147]).appendArc([340.0614909,-208.6562509],{"radius":4,"clockwise":false,"large":false}).appendPoint([356.9889763,-195.2010701]).appendArc([358.5,-192.069777],{"radius":4,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.5] });
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
            
            
        
            function main() {
                return right_xl_bottom_case_fn();
            }

        