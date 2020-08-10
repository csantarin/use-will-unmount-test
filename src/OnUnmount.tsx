import { useWillUnmountWithRef, useWillUnmountWithoutRef, useWillUnmountWithoutRefAndDeps } from './use-will-unmount';

interface OnUnmountProps {
  callbackWithRef?: () => void;
  callbackWithoutRef?: () => void;
  callbackWithoutRefAndDeps?: () => void;
}

export const OnUnmount = (props: OnUnmountProps) => {
  const {
    callbackWithRef = () => {},
    callbackWithoutRef = () => {},
    callbackWithoutRefAndDeps = () => {},
  } = props;

  useWillUnmountWithRef(callbackWithRef);
  useWillUnmountWithoutRef(callbackWithoutRef);
  useWillUnmountWithoutRefAndDeps(callbackWithoutRefAndDeps);

  return null;
};
