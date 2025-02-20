import { ModalsState } from "./modals.interface";

export interface ModalProps {
  id: keyof ModalsState["modals"];
}
