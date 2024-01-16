export type ModalContextType = {
  isOpenedCurrent: Record<string, boolean>;
  setModal: (modalName: string, status: boolean) => void;
  setPayload: (payload: any) => void;
  payload: any;
};
