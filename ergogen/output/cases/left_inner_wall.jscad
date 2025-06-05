function board_left_extrude_15_outline_fn(){
    return new CSG.Path2D([[38.5,-190.069777],[38.5,-113.7627752]]).appendArc([41.6962236,-109.8443644],{"radius":4,"clockwise":true,"large":false}).appendPoint([57.4647244,-106.6098001]).appendArc([58.4862144,-106.2506593],{"radius":4,"clockwise":false,"large":false}).appendPoint([77.1017616,-96.7042248]).appendArc([77.9335264,-96.3888394],{"radius":4,"clockwise":true,"large":false}).appendPoint([96.5681802,-91.610723]).appendArc([97.4456018,-91.4870632],{"radius":4,"clockwise":true,"large":false}).appendPoint([127.5015817,-90.6144702]).appendArc([128.4867169,-90.7083338],{"radius":4,"clockwise":true,"large":false}).appendPoint([158.5707252,-97.4044517]).appendArc([159.4397804,-97.5],{"radius":4,"clockwise":false,"large":false}).appendPoint([181.458429,-97.5]).appendArc([185.4584201,-101.491562],{"radius":4,"clockwise":true,"large":false}).appendPoint([185.6774314,-205.3140737]).appendArc([181.6184887,-209.3220773],{"radius":4,"clockwise":true,"large":false}).appendPoint([59.3629556,-207.5200893]).appendArc([56.9329308,-206.6518168],{"radius":4,"clockwise":true,"large":false}).appendPoint([40.0110237,-193.2010701]).appendArc([38.5,-190.069777],{"radius":4,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 15] });
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
            
            
        
            function main() {
                return left_inner_wall_case_fn();
            }

        