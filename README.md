# Unmount Hook React Ref Test

## Overview
This source code demonstrates why you need to have a React ref pointing to the latest reference of a function passed as a callback to an unmount-only Hook when a component consuming an unmount Hook rerenders.

This source code contains a what-if sccenario where you remove that ref, plus a test to prove whether or not the no-ref callback will succeed. The callback in this case originates from a prop passed down by a consumer higher in the component hierarchy tree.

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

4. Run test
	```bash
	yarn test
	```

5. Expect test scripts to fail after a complete run. It should look like this:
	```bash
	 FAIL  src/use-will-unmount.spec.ts
	● useWillUnmountWithoutRef › should call provided callback if is has been changed

		expect(jest.fn()).not.toHaveBeenCalled()

		Expected number of calls: 0
		Received number of calls: 1

		1: called with 0 arguments

		39 |     Hook.unmount();
		40 | 
		> 41 |     expect(spy).not.toHaveBeenCalled();
			|                     ^
		42 |     expect(spy2).not.toHaveBeenCalled();
		43 |     expect(spy3).toHaveBeenCalledTimes(1);
		44 |   });

		at Object.<anonymous> (src/use-will-unmount.spec.ts:41:21)

	PASS  src/App.test.tsx

	Test Suites: 1 failed, 1 passed, 2 total
	Tests:       1 failed, 2 passed, 3 total
	Snapshots:   0 total
	Time:        2.802s
	Ran all test suites.
	```

## Further instructions

See [the `create-react-app` docs template](docs/create-react-app/README.md).
