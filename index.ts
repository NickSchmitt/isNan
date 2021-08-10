type hasNan = {
	nan: object
}

const isNan = (obj1: hasNan, obj2: {name: string}) => obj2 === obj1.nan

export {
	isNan
}