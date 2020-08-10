# Unmount Hook Test

## Overview
This source code demonstrates:

1. why you need to have a React ref pointing to the latest reference of a function passed as a callback to an unmount-only Hook when a component consuming an unmount Hook rerenders.
2. why you also need a deps array to prevent the hook from repeatedly invoking the callback when the component consuming an unmount Hook rerenders.

This source code contains a what-if sccenario when

- you keep that ref and you keep the deps array
- you remove that ref and you keep the deps array
- you remove that ref and you remove the deps array

...plus a test to prove whether or the Hook's callback parameter is invoked in way we expected it to behave, i.e. during unmount only.

The callback used in this source code originates from a prop passed down by a consumer higher in the component hierarchy tree. See [ClassExample](./src/ClassExample.tsx) and [FunctionExample](src/FunctionExample.tsx).

> **ℹ NOTE**
>
> The Hook in this source code already exists as an implementation in an existing library: [`react-use`](https://www.npmjs.com/package/react-use).

## Sources

- https://github.com/streamich/react-use/blob/master/src/useUnmount.ts
- https://github.com/streamich/react-use/blob/master/tests/useUnmount.test.ts

## Setup

1. Clone this repo to your local.
	```bash
	git clone https://github.com/csantarin/use-will-unmount.git
	```

2. Browse to the local copy.
	```bash
	cd use-will-unmount
	```

3. Install all dependencies.
	```bash
	yarn
	```

4. Run the app itself for a live demo. Click the increment button several times.
	```bash
	yarn start
	```

	Expect two incorrect behaviors:
	1. `callbackWithoutRef()` logs the incorrect state value called whenever the **FunctionExample** hide button has been clicked.
	2. `callbackWithoutRefAndDeps()` is incorrectly called whenever the increment button of either example has been clicked.

5. Run the tests.
	```bash
	yarn test
	```

	Expect the tests to complete with some failures after a complete run:
	```bash
	[ FAIL ] src/use-will-unmount.spec.ts
	● useWillUnmountWithoutRef › should call provided callback if is has been changed

		expect(jest.fn()).not.toHaveBeenCalled()

		Expected number of calls: 0
		Received number of calls: 1

		1: called with 0 arguments

		63 |     hook.unmount();
		64 | 
		> 65 |     expect(spy).not.toHaveBeenCalled();
			|                     ^
		66 |     expect(spy2).not.toHaveBeenCalled();
		67 |     expect(spy3).toHaveBeenCalledTimes(1);
		68 |   });

		at Object.<anonymous> (src/use-will-unmount.spec.ts:65:21)

	● useWillUnmountWithoutRefWithoutDeps › should not call provided callback on re-renders

		expect(jest.fn()).not.toHaveBeenCalled()

		Expected number of calls: 0
		Received number of calls: 4

		1: called with 0 arguments
		2: called with 0 arguments
		3: called with 0 arguments

		79 |     hook.rerender();
		80 | 
		> 81 |     expect(spy).not.toHaveBeenCalled();
			|                     ^
		82 |   });
		83 | 
		84 |   it('should call provided callback if is has been changed', () => {

		at Object.<anonymous> (src/use-will-unmount.spec.ts:81:21)

	● useWillUnmountWithoutRefWithoutDeps › should call provided callback if is has been changed

		expect(jest.fn()).not.toHaveBeenCalled()

		Expected number of calls: 0
		Received number of calls: 1

		1: called with 0 arguments

		96 |     hook.unmount();
		97 | 
		>  98 |     expect(spy).not.toHaveBeenCalled();
			|                     ^
		99 |     expect(spy2).not.toHaveBeenCalled();
		100 |     expect(spy3).toHaveBeenCalledTimes(1);
		101 |   });

		at Object.<anonymous> (src/use-will-unmount.spec.ts:98:21)
	
	[ PASS ] src/App.test.tsx
	● Console

		console.log src/ClassExample.tsx:19
		<ClassExample /> callbackWithRef => value: 0
		console.log src/ClassExample.tsx:19
		<ClassExample /> callbackWithoutRef => value: 0
		console.log src/FunctionExample.tsx:10
		<FunctionExample /> callbackWithRef => value: 0
		console.log src/FunctionExample.tsx:10
		<FunctionExample /> callbackWithoutRef => value: 0


	Test Suites: 1 failed, 1 passed, 2 total
	Tests:       3 failed, 4 passed, 7 total
	Snapshots:   0 total
	Time:        1.563s, estimated 2s
	Ran all test suites.
	```

## Further instructions

See [the `create-react-app` docs template](docs/create-react-app/README.md).
