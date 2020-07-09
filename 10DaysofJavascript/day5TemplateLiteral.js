/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
const sides = (literals, expressions) => {
  const area = expressions[0];
  const perimeter = expressions[1];

  let s1 = (perimeter + Math.sqrt(perimeter * perimeter - 16 * area)) / 4;
  let s2 = (perimeter - Math.sqrt(perimeter * perimeter - 16 * area)) / 4;

  return s1 > s2 ? [s2, s1] : [s1, s2];
}

console.log(sides(null, [140, 48]));