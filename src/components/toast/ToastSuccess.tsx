import { toast } from "react-toastify";

export function ToastSuccess(message: string) {
    return toast.success(message || 'Successfully');
}