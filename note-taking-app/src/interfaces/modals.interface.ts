export interface ModalsState {
  modals: {
    search_modal: boolean;
    tags_modal: boolean;
  };
  handleModal: (id: keyof ModalsState["modals"]) => void;
}
