---
title: 'JavaScript: When to use undefined vs. null?'
description: 'Learn when to use undefined and null in JavaScript'
pubDate: 'Mar 15 2024'
heroImage: '/blog-placeholder-4.jpg'
---

JavaScript's `undefined` and `null` values are very similar and knowing when each should be used can be confusing.

In coding, there are often many ways to achieve the same result. Both null and undefined could be used interchangeably and work properly as long as usages are consistent. The different usages depend on personal preference and team/project patterns. However, this article describes a commonly shared opinion on the semantics of when to use each. 

## Similarities:
- `undefined` and `null` both indicate "nothing" which is "the lack of something".
- `undefined` and `null` are both falsy and nullish values.
```javascript
Boolean(true); // true
Boolean('false'); // true
Boolean(false); // false
Boolean(undefined); // false
Boolean(null); // false

true ?? 'isNullish'; // true
'false' ?? 'isNullish'; // 'false'
false ?? 'isNullish'; // false
undefined ?? 'isNullish'; // 'isNullish'
null ?? 'isNullish'; // 'isNullish'
```

## Differences:
- `undefined` and `null` are two distinct values. They are not equal. 
- `undefined` is treated as not having any value, but `null` is the value of nothing. Below is an example of what this means and why it matters.
```javascript
function myFunc(arg = 'hello') {
	return arg;
}

myFunc(); // returns 'hello'
myFunc(undefined); // returns 'hello'
myFunc(null); // returns null
myFunc('world'); // returns 'world'
```

## When to use undefined?

`undefined` should be used when a variable has not yet been declared, but will be or can be later on in the code. The only time a variable should be set to `undefined` is on initialization or when resetting the variable back to `undefined`.

### Example of when to use undefined:

This example is a random number generator that does not repeat the same number twice. In this example, both variables are set as undefined because they don't have values yet but will once the function gets called.

```javascript
let randomNumber; // is the same as defining as undefined like below
let lastNumber = undefined;

function random(max) {
    randomNumber = Math.floor(Math.random() * max) + 1;
    while (randomNumber === lastNumber) {
    	randomNumber = Math.floor(Math.random() * max) + 1;
    }
    lastNumber = randomNumber;
}

random(5);
```

## When to use null? 

Use `null` when you want to explicitly represent not having a value, such as in cases where a value is expected but not available.

### Example of when to use null:

This example uses an object generated from data in a database. There are two different use cases of `null` in this example. The DB did not return a value for the most recent review of this product. `null` is also used to represent not being able to calculate an average. 

```javascript
const product = {
	price: 19.99,
	review_count: 0,
	review_ratings: [],
	most_recent_review: null
}

function getAverage(ratings) {
	if (ratings.length === 0) {
		return null; // cannot get average of nothing
	}
	let sum = ratings.reduce((acc, num) => acc + num, 0);
	return sum / ratings.length;
}

getAverage(product.review_ratings); // returns null
```
