import { useCallback, useState } from "react";

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

  return { change, close, show, visible };
}
