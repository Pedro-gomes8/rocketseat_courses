export function schoolGrades(grade) {
    if (grade>=90){
        return 'A';
    }else if (grade > 79){
        return 'B';
    }else if (grade > 69){
        return 'C';
    }else if (grade > 59){
        return 'D';
    }else if (grade < 60){
        return 'F';
    }
}