// Let's Practice
// Q52. Write a code which can give grades to students according to their scores:
// • 80-100, A
// • 70-89, B
// • 60-69, C
// • 50-59, D
// • 0-49, F

let score = 75;
let grade;
if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 70 && score <= 89){
    grade = "B";
} else if (score >= 60 && score <= 69) {
    grade = "C";
} else if (score >= 50 && score <= 59) {
    grade = "D";
} else if (score >= 0 && score <= 49){
    grade = "F";
}
console. log("according to your scores, your grade was : ", grade);