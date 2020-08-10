import { renderHook } from '@testing-library/react-hooks';
import { useWillUnmountWithRef, useWillUnmountWithoutRef, useWillUnmountWithoutRefAndDeps } from './use-will-unmount';

describe('useWillUnmountWithRef', () => {
  it('should not call provided callback on re-renders', () => {
    const spy = jest.fn();
    const hook = renderHook(() => useWillUnmountWithRef(spy));

    hook.rerender();
    hook.rerender();
    hook.rerender();
    hook.rerender();

    expect(spy).not.toHaveBeenCalled();
  });

  it('should call provided callback if is has been changed', () => {
    const spy = jest.fn();
    const spy2 = jest.fn();
    const spy3 = jest.fn();
    const hook = renderHook(props => useWillUnmountWithRef(props.callback), {
      initialProps: {
        callback: spy,
      }
    });

    hook.rerender({ callback: spy2 });
    hook.rerender({ callback: spy3 });
    hook.unmount();

    expect(spy).not.toHaveBeenCalled();
    expect(spy2).not.toHaveBeenCalled();
    expect(spy3).toHaveBeenCalledTimes(1);
  });
});

// THIS WILL FAIL DURING RERENDER AND WE EXPECT THAT TO HAPPEN.
describe('useWillUnmountWithoutRef', () => {
  it('should not call provided callback on re-renders', () => {
    const spy = jest.fn();
    const hook = renderHook(() => useWillUnmountWithoutRef(spy));

    hook.rerender();
    hook.rerender();
    hook.rerender();
    hook.rerender();

    expect(spy).not.toHaveBeenCalled();
  });

  it('should call provided callback if is has been changed', () => {
    const spy = jest.fn();
    const spy2 = jest.fn();
    const spy3 = jest.fn();
    const hook = renderHook(props => useWillUnmountWithoutRef(props.callback), {
      initialProps: {
        callback: spy,
      }
    });

    hook.rerender({ callback: spy2 });
    hook.rerender({ callback: spy3 });
    hook.unmount();

    expect(spy).not.toHaveBeenCalled();
    expect(spy2).not.toHaveBeenCalled();
    expect(spy3).toHaveBeenCalledTimes(1);
  });
});

describe('useWillUnmountWithoutRefWithoutDeps', () => {
  it('should not call provided callback on re-renders', () => {
    const spy = jest.fn();
    const hook = renderHook(() => useWillUnmountWithoutRefAndDeps(spy));

    hook.rerender();
    hook.rerender();
    hook.rerender();
    hook.rerender();

    expect(spy).not.toHaveBeenCalled();
  });

  it('should call provided callback if is has been changed', () => {
    const spy = jest.fn();
    const spy2 = jest.fn();
    const spy3 = jest.fn();
    const hook = renderHook(props => useWillUnmountWithoutRefAndDeps(props.callback), {
      initialProps: {
        callback: spy,
      }
    });

    hook.rerender({ callback: spy2 });
    hook.rerender({ callback: spy3 });
    hook.unmount();

    expect(spy).not.toHaveBeenCalled();
    expect(spy2).not.toHaveBeenCalled();
    expect(spy3).toHaveBeenCalledTimes(1);
  });
})
