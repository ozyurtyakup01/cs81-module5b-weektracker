const myWeek = [
    {day: "Monday", activity: "walking", category: "physical",hoursSpent: 1,
        enjoyment:5, timeOfDay: "morning"},
    {day: "Tuesday", activity: "workout", category: "physical",hoursSpent: 2,
        enjoyment:6, timeOfDay: "morning"},
    {day: "Wednesday", activity: "walking", category: "physical",hoursSpent: 1,
        enjoyment:4, timeOfDay: "morning"},
    {day: "Thursday", activity: "reading", category: "relaxing",hoursSpent: 2,
        enjoyment:7, timeOfDay: "night"},
    {day: "Friday", activity: "friend gathering", category: "social",hoursSpent: 2,
        enjoyment:7, timeOfDay: "night"},
    {day: "Saturday", activity: "clubbing", category: "social",hoursSpent: 2,
        enjoyment:3, timeOfDay: "night"},
    {day: "Sunday", activity: "gaming", category: "relaxing",hoursSpent: 3,
        enjoyment:8, timeOfDay: "morning"},
    
];
/*

Which activity will have the highest enjoyment?
gaming
What category will dominate your week?
physical
What patterns might exist around time of day?
no afternoon due to work and course load
*/

function totalCategoryHours(log, inCategory) 
{
    // gather all given category in a new array
    const categoryTime = log.filter(entry => entry.category === inCategory);
    // calculate hours spent using reduce
    return categoryTime.reduce((sum, act) => sum + act.hoursSpent, 0);
}

function enjoyFilter(log)
{
    // store enjoyment >=5 to new array
    const aboveFive = log.filter(entry => entry.enjoyment >= 5);
    // output activity names instead of object
    return aboveFive.map(entry => entry.activity);
}

console.log("Hours spent on physical: " + totalCategoryHours(myWeek,"physical"));
console.log("Hours spent on social: " + totalCategoryHours(myWeek,"social"));

console.log("Enjoyment above 5: " + enjoyFilter(myWeek));