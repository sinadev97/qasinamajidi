import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { UIActions } from "../store/UI";

export const useNewQuestionState = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(
    (store: RootState) => store.UI.newQuestionModal.isOpen
  );

  const openModal = () => dispatch(UIActions.openModal());
  const closeModal = () => dispatch(UIActions.closeModal());

  return {
    isOpen,
    openModal,
    closeModal,
  };
};
