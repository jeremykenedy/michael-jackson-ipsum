import Swal from 'sweetalert2/dist/sweetalert2';

export default function useDarkMode() {
  const toggleDarkMode = (msg = false) => {
    if (localStorage.getItem('data-theme') == 'dark') {
      disableDarkMode(msg);
    } else {
      enableDarkMode(msg);
    }
  };

  const enableDarkMode = (msg = false) => {
    document.documentElement.className = 'dark';
    localStorage.setItem('data-theme', 'dark');
    if (msg) {
      Swal.fire({
        toast: true,
        icon: 'success',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        title: 'Dark Mode Enabled',
        position: 'bottom-end',
      });
    }
  };

  const disableDarkMode = (msg = false) => {
    document.documentElement.className = 'light';
    localStorage.setItem('data-theme', 'light');
    if (msg) {
      Swal.fire({
        toast: true,
        icon: 'success',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        title: 'Dark Mode Disabled',
        position: 'bottom-end',
      });
    }
  };

  return {
    toggleDarkMode,
    enableDarkMode,
    disableDarkMode,
  };
}
