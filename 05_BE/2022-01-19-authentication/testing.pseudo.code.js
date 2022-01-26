
function toBeTested(param) {
	// ...
	value = param+1;

	return value;
}

// usually tests reside in different files

function TestToBeTested() {
	input = 2;
	expected = 3;

	received = toBeTested(input);

	if (received == expected) {
		return true; // success
	}

	return false; // failure
}

function TestToBeTested2() {
	input = -1;
	expected = 0;

	received = toBeTested(input);

	if (received == expected) {
		return true; // success
	}

	return false; // failure
}

function TestToBeTestedMultipleInputs() {
	inputs = [-1, 2, 100000];
	expectedValues = [0, 3, 100001];

	for (i=0; i < inputs.length; i++) {
		input = inputs[i];
		expected = expectedValues[i];
		
		received = toBeTested(input);
		
		if (received != expected) {
			return false; // failure
		}
	}

	return true; // success
}
