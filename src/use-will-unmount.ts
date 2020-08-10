import { useRef, useEffect } from 'react';

/**
 * React lifecycle hook that invokes a function when the component will unmount.
 * Equivalent to the `componentWillUnmount()` method in a React.Component class.
 *
 * ----
 * **NOTE**: Uses React refs.
 *
 * @param {() => void} fn The function to invoke.
 * @see https://github.com/streamich/react-use/blob/master/src/useUnmount.ts
 */
export const useWillUnmountWithRef = (fn: () => void) => {
	const fnRef = useRef(fn);

	// Update `fnRef` every render cycle so that if `fn` changes,
	// the newest `fn` callback reference will be invoked.
	fnRef.current = fn;

	useEffect(() => {
		return () => {
			return fnRef.current();
		};
	}, []);
};

/**
 * React lifecycle hook that invokes a function when the component will unmount.
 * Equivalent to the `componentWillUnmount()` method in a React.Component class.
 * 
 * ----
 * **NOTE**: Doesn't use React refs.
 *
 * @param {() => void} fn The function to invoke.
 * @see https://github.com/streamich/react-use/blob/master/src/useUnmount.ts
 */
export const useWillUnmountWithoutRef = (fn: () => void) => {
	useEffect(() => {
		return () => {
			return fn();
		};
	}, []);
};
