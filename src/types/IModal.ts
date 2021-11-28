export interface IModal {
  size?: 'm';
  isOpen: boolean;
  isCloseOnOverlay?: boolean;
  closeModal: () => void;
  children: (_props: { closeModal: () => void }) => React.ReactNode | string;
  className?: string;
}
