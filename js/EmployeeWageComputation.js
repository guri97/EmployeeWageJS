///////////////////////////////UC-3///////////////////////////////
//Refactor the Code to write a function to get work hours
const IS_FULL_TIME=1;
const IS_PART_TIME=2;
EMP_RATE_PER_HR=20;
empCheck=Math.floor(Math.random()*10)%3;
function getWorkHours()
{
    switch(empCheck)
    {
    case IS_FULL_TIME:
        console.log("UC1-Employee is Present in Full Time")
        empHrs=8;
        return empHrs;
    case IS_PART_TIME:
        console.log("UC1-Employee is Present in Part Time")
        empHrs=4;
        return empHrs;
    default:
        console.log("UC1-Employee is Absent");
            empHrs=0;
            return 0;
    }
}
empWage=EMP_RATE_PER_HR*getWorkHours();
console.log("UC2-Employee Wage:"+empWage);