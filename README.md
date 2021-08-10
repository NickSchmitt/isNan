# isNan

Check if an object is another object's nan.

# Example

```
const { isNan } = require('is-me-nan')

const grandma = {
	name: 'grandma'
}

const kid = {
	name: 'stevie',
	nan: grandma
}

console.log(isNan(kid, grandma)) 
// true

if(isNan(kid, grandma)){
	console.log(`${kid.name}: "${grandma.name}'s me nan"`)
}
// steve: "grandma's me nan"

console.log(isNan(grandma, kid))
// false
```

# Visual Example

![](https://i.imgur.com/BO9GfrW.png)