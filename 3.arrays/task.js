function compareArrays(arr1, arr2) {
    let result;
    if (arr1.length === arr2.length){
        result = arr1.every((el, ind) => el === arr2[ind] && ind === arr2.indexOf(el));
    }else {
        result = false;
    }
    return result;
}

function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(user => user.gender === gender)
    .reduce((acc,user, _, arr) => acc + user.age / arr.length, 0);
    return result;
}