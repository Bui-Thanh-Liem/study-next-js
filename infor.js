import { Divider } from "antd";
import { useFormStatus, useFormState } from "react-dom";

function actionFunc(prevState, formDate) {
    console.log("formDate:::", formDate);
}

export default function Information() {
    //
    const initialState = {
        message: null,
    };

    //
    const [state, formAction] = useFormState(actionFunc, initialState);

    //
    const { pending } = useFormStatus();

    return (
        <div>
            <form action={formAction}>
                {state.message}
                <button disabled={pending}>
                    {pending ? "Submitting" : "Submit"}
                </button>
            </form>
        </div>
    );
}
