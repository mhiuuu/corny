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
            
            
        
            function main() {
                return right_holes_case_fn();
            }

        