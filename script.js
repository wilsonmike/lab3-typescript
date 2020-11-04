"use strict";
let submissions = [
    {
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed: true
    },
    {
        name: "Joe",
        score: 77,
        date: "2018-05-24",
        passed: true
    },
    {
        name: "Jack",
        score: 59,
        date: "2020-01-24",
        passed: false
    },
    {
        name: "Jill",
        score: 88,
        date: "2020-01-24",
        passed: true
    },
];
const newSubmission = (array, newName, newScore, newDate) => {
    let newObject = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60
    };
    array.push(newObject);
};
newSubmission(submissions, "Hulk", 22, "2020-11-08");
console.log(submissions);
const deleteSubmissionByIndex = (array, index) => {
    array.splice(index, 1);
};
deleteSubmissionByIndex(submissions, 4);
console.log(submissions);
const deleteSubmissionByName = (array, name) => {
    let index = array.findIndex((item) => {
        return item.name === name;
    });
    array.splice(index, 1);
};
deleteSubmissionByName(submissions, "Jack");
console.log(submissions);
const editSubmission = (array, index, score) => {
    array[index].score = score;
    array[index].passed = score >= 60;
};
editSubmission(submissions, 0, 100);
console.log(submissions);
const findSubmissionByName = (array, name) => {
    return array.find((item) => {
        return item.name === name;
    });
};
console.log(findSubmissionByName(submissions, "Jane"));
console.log("breakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
const findLowestScore = (array) => {
    let currentLowest = array[0];
    array.forEach((item) => {
        if (currentLowest.score > item.score) {
            currentLowest = item;
        }
    });
    return currentLowest;
};
console.log(findLowestScore(submissions));
console.log("breakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
const findAverageScore = (array) => {
    let sum = 0;
    for (let item of submissions) {
        sum += item.score;
    }
    return sum / submissions.length;
};
console.log(findAverageScore(submissions));
console.log("breakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
const filterPassing = (array) => {
    return array.filter((item) => {
        return item.passed === true;
    });
};
console.log(filterPassing(submissions));
