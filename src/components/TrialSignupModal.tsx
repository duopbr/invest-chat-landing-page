
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import TrialSignupForm from "./trial/TrialSignupForm";

interface TrialSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TrialSignupModal = ({ isOpen, onClose }: TrialSignupModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-gray-800">
            Cadastre-se para o Teste Gratuito
          </DialogTitle>
        </DialogHeader>
        
        <TrialSignupForm onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default TrialSignupModal;
