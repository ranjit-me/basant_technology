function isAnagram(str1, str2) {
  const normalize = (str) => str.replace(/\s+/g, "").toLowerCase();

  const s1 = normalize(str1);
  const s2 = normalize(str2);

  if (str1.length !== str2.length) return false;

  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));

function findVowels(str) {
  let count = 0;
  let start = 0;
  let index = 0;
  let end = str.length - 1;
  let string = str.toLowerCase();
  //   let vowel = ["a", "e", "i", "o", "u"];
  while (start < end) {
    if (str.charAt(index) == "a" || "e" || "i" || "o" || "u") {
      count++;
    }
  }
  console.log(count);
}
console.log(findVowels("I am in Bangalore"));
