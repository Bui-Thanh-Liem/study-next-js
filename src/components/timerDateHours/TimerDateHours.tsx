import { DatePicker, Switch, TimePicker } from "antd";
import type { DatePickerProps } from "antd";
import dayjs from "dayjs";
import { useState } from "react";

//
const formatHours = "HH:mm";
const formatDate = "DD-MM-YYYY";

//
interface IPropTimerDateHours {
    getDate: (date: string) => void;
    getTime: (hours: string) => void;
}

export const TimerDateHours = ({ getDate, getTime }: IPropTimerDateHours) => {
    const toDay = dayjs();
    const [disable, setDisable] = useState<boolean>(true);

    // 
    const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
        if (dateString) {
            getDate(disable ? "" : dateString as string);
        }
    };

    // 
    const onChangeHours = (
        time: dayjs.Dayjs,
        timeString: string | Array<string>
    ) => {
        if (timeString) {
            getTime(disable ? "" : timeString as string);
        }
    };

    // 
    const onChangeSwitch = (checked: boolean) => {
        setDisable(!checked);
    };

    return (
        <div className="flex items-center gap-8">
            <div>
                <Switch defaultChecked={false} onChange={onChangeSwitch} />
            </div>
            <div className="flex gap-8">
                <DatePicker
                    onChange={onChangeDate}
                    defaultValue={dayjs(toDay.format(formatDate), formatDate)}
                    format={formatDate}
                    disabled={disable}
                />
                <TimePicker
                    onChange={onChangeHours}
                    defaultValue={dayjs(toDay.format(formatHours), formatHours)}
                    format={formatHours}
                    disabled={disable}
                />
            </div>
        </div>
    );
};
