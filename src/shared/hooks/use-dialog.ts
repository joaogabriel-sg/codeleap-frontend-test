import { useCallback, useMemo, useState } from "react";

export type UseDialogPropsReturn = {
  change: (value: boolean) => void;
  close: () => void;
  show: () => void;
  visible: boolean;
};

type UseDialogProps = {
  defaultVisible?: boolean;
};

export function useDialog({
  defaultVisible = false,
}: UseDialogProps = {}): UseDialogPropsReturn {
  const [visible, setVisible] = useState(defaultVisible);

  const change = useCallback((value: boolean) => setVisible(value), []);

  const show = useCallback(() => setVisible(true), []);

  const close = useCallback(() => setVisible(false), []);

  const memoizedReturn = useMemo(() => {
    return { change, close, show, visible };
  }, [change, close, show, visible]);

  return memoizedReturn;
}
