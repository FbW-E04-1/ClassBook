// Decomposing an Object

// define an object
let objA = {
	propA: 1,
	propB: 2
}

function logObject(object){
	console.log(object);
}
logObject(objA);

function logDecomposedObject(object) {
	const {propA, propB} = object;
	console.log("decomposed in body: ", propA, propB);
}
logDecomposedObject(objA);

function logDecomposedParameter({propA, propB}) {
	console.log("decomposed parameter: ", propA, propB);
}
logDecomposedParameter(objA);

function logRecomposedObject({propA, propB}) {
	const newObject = {
		testA: propA,
		testB: propB
	}

	console.log("recomposed object: ", newObject);
}
logRecomposedObject(objA);

function logRecomposedObjectWithSameAttributes({propA, propB}) {
	const newObject = {
		propA: propA,
		propB: propB
	}

	console.log("object with same-named attributes: ", newObject);
}

logRecomposedObjectWithSameAttributes(objA);

function logRecomposedObjectWithSameAttributesShortSyntax({propA, propB}) {
	const newObject = {
		propA,
		propB
	}

	console.log("object with same-named attributes (short syntax): ", newObject);
}

logRecomposedObjectWithSameAttributesShortSyntax(objA);

