// ******************************* funcion de alerta *******************************
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Esta es una alerta', 'success')
  })
}





// ******************************* funcion popover *******************************
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
const popover = new bootstrap.Popover('.example-popover', {
    container: 'body'
  })





// ******************************* funcion toast *******************************


const toastButton = document.querySelector('#toast-button');

        const toastContent = document.querySelector('.toast');

        if (toastButton) {
            toastButton.addEventListener('click', function (){

                
        const toast = new bootstrap.Toast(toastContent);

        toast.show();


            });
        }

// funcion offcanvas



