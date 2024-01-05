export type ModalContextType = {
  isOpenedCurrent: Record<string, boolean>;
  setModal: (modalName: string) => void;
  setPayload: (payload: any) => void;
  payload: any;
};
