import Swal from 'sweetalert2';
import '@sweetalert2/theme-dark/dark.css';

const baseOptions = {
  confirmButtonColor: '#3b82f6',
};

export function successAlert(title, text = '') {
  return Swal.fire({
    ...baseOptions,
    icon: 'success',
    title,
    text,
  });
}

export function errorAlert(title, text = '') {
  return Swal.fire({
    ...baseOptions,
    icon: 'error',
    title,
    text,
  });
}

export function confirmAlert(title, text = '') {
  return Swal.fire({
    ...baseOptions,
    icon: 'question',
    title,
    text,
    showCancelButton: true,
    confirmButtonText: 'Ya',
    cancelButtonText: 'Batal',
  });
}
