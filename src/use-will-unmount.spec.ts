import { renderHook } from '@testing-library/react-hooks';
import { useWillUnmountWithRef, useWillUnmountWithoutRef } from './use-will-unmount';

describe('useWillUnmountWithRef', () => {
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

describe('useWillUnmountWithoutRef', () => {
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
