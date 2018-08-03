import swal from 'sweetalert'

class AlertService {
    static error(title, message, onClose = () => { }) {
        swal({
            title: title,
            text: message,
            icon: "error",
            button: "Ok...",
        }).then(() => {
            onClose()
        })
    }

    static success(title, message, okButtonText, onClose = () => { }) {
        swal({
            title: title,
            text: message,
            icon: "success",
            button: okButtonText,
        }).then(() => {
            onClose()
        })
    }
}

export default AlertService