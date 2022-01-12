# HTTP Semantics
- PUT => create/replace a resource
  
  https://httpwg.org/specs/rfc7231.html#PUT

- PATCH => update a resource 
	if the incoming resource is only defined partially, only the provided parts will be updated

	https://datatracker.ietf.org/doc/html/rfc5789

``` javascript
	existingResource = {
		a: "content a",
		b: "content b",
		c: "content c",
	}

	incomingResource = {
		a: "content a updated",
		c: "content c updated",
	}

	// PUT with incomingResource
	// replace the existingResource with incoming resource
	putResource = {
		a: "content a updated",
		c: "content c updated",
	}

	// PATCH with incomingResource
	existingResource = {
		a: "content a updated",
		b: "content b",
		c: "content c updated",
	}

```