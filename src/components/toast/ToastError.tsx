'use client';
import { toast } from "react-toastify";

export default function ToastError(message: string) {
    return toast.error(message || 'Error in processing');
}