'use client';
import { resetCart } from '@/store/nextSlices';
import { useDispatch } from 'react-redux';

export const ResetCart = () => {
  const dispatch = useDispatch();
  const handleResetCart = () => {
    const confirmReset = window.confirm(
      'Bist du dir sicher deine Warenkorb zu löschen?'
    );
    if (confirmReset) {
      dispatch(resetCart());
    }
  };
  return (
    <button
      onClick={handleResetCart}
      className='w-48 h-10 font-semibold bg-gray-200 rounded-lg duration-300 hover:bg-red-800 hover:text-white px-4 '
    >
      Warenkorb löschen
    </button>
  );
};
