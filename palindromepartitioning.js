//Objective is to find all substring combinations of a string such that
//all partitions in the combination are a palindrome

let s = "aab"


//O(n!) solution where n is the length of the string
//We use backtracking to find every combination, and only backtrack
//on those that are a valid palindrome

let temp = []
let index = 0
let result = []

function backtrack(temp, index) {
    if (index == s.length) {
        result.push([...temp])    
    }
    
    for (let i = index; i < s.length; i++) {
        if (isPalindrome(index, i)) {
            temp.push(s.slice(index, i + 1))
            backtrack(temp, i + 1)
            temp.pop()    
        }
    }
}
backtrack(temp, index)

function isPalindrome(left, right) {
    while (left < right) {
        if (s[left++] != s[right--]) {
            return false
        }
    }
    
    return true
}

return result