import {
  type FC,
  type PropsWithChildren,
  createContext,
  useState,
} from "react";

import { ModalContextType } from "./types";

const ModalContext = createContext<ModalContextType>({
  isOpenedCurrent: {},
  setModal: () => {},
  setPayload: () => {},
  payload: null,
});

const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [payload, setPayload] = useState(null);
  const [isOpenedCurrent, setIsOpenedCurrent] = useState<
    Record<string, boolean>
  >({});

  const setModal = (modalName: string, status: boolean) => {
    setIsOpenedCurrent((prev) => ({
      ...prev,
      [modalName]: status,
    }));
  };

  return (
    <ModalContext.Provider
      value={{ payload, setPayload, setModal, isOpenedCurrent }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
