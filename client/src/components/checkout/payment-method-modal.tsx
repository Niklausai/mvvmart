import React from 'react';
import Modal from '@/components/ui/modal';
import { PaymentMethod } from '@/cardmart/types';

interface PaymentMethodModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (method: PaymentMethod) => void;
}

const PaymentMethodModal: React.FC<PaymentMethodModalProps> = ({
  isOpen,
  onClose,
  onSelect,
}) => {
  const paymentMethods: { id: PaymentMethod; label: string }[] = [
    { id: 'momopay', label: 'MoMoPay (Mobile Money All Networks)' },
    { id: 'bitcoins', label: 'Bitcoins' },
    { id: 'bank', label: 'Bank Transfer' },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Select Payment Option">
      <div className="py-2">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              onSelect(method.id);
              onClose();
            }}
          >
            {method.label}
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default PaymentMethodModal;
