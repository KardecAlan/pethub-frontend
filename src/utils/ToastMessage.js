import { Notify } from 'quasar';

function showToast(message, type) {
  Notify.create({message, color: type});
}

function showPositiveToast(message) {
  showToast(message,'positive');
}

function showNegativeToast(message) {
 showToast(message,'negative');
}

export {
  showNegativeToast,
  showPositiveToast
}