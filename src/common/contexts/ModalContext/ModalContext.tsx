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

  const setModal = (modalName: string) => {
    setIsOpenedCurrent((prev) => ({
      ...prev,
      [modalName]: !prev[modalName],
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
