"use client";
import { Select } from "antd";
import { useEffect, useState } from "react";

const dayInWeed = [
    "Chủ nhật",
    "Thứ hai",
    "Thứ ba",
    "Thứ tư",
    "Thứ năm",
    "Thứ sáu",
    "Thứ bảy",
];

const optionData = [
    {
        label: "Không lên lịch đăng",
        value: "NO",
        valueBelongType: [],
        info: "",
    },
    {
        label: "Mỗi giờ",
        value: "HOURS",
        valueBelongType: Array.from({ length: 60 }, (_, i) => i + 1),
        info: "tại phút",
    },
    {
        label: "Mỗi ngày",
        value: "DAY",
        valueBelongType: Array.from({ length: 24 }, (_, i) => i + 1),
        info: "tại giờ",
    },
    {
        label: "Mỗi tuần",
        value: "WEEK",
        valueBelongType: Array.from({ length: 7 }, (_, i) => i),
        info: "tại ngày",
    },
];

interface IPropTimer {
    getType: (type: string) => void;
    getValue: (value: number) => void;
}
export const Timer = ({ getType, getValue }: IPropTimer) => {
    const [valueType, setValueType] = useState<string>("NO");
    const [value, setValue] = useState<number>(0);

    //
    useEffect(() => {
        getType(valueType);
        getValue(value);
    }, [value, valueType]);

    //
    function renderValueBelongType(type: string) {
        const typeSelect = optionData.find((t) => t.value === type);
        return typeSelect?.valueBelongType.map((val) => {
            if (type === "WEEK") {
                return { label: dayInWeed[val], value: val };
            }
            return { label: val, value: val };
        });
    }

    //
    function renderInfo(type: string) {
        const typeSelect = optionData.find((t) => t.value === type);
        return typeSelect?.info;
    }

    return (
        <div className="w-full">
            <label className="block">Bộ hẹn giờ</label>
            <div className="flex items-center justify-between">
                <Select
                    className="flex-1"
                    options={optionData}
                    value={valueType}
                    onChange={(val) => setValueType(val)}
                />
                <p>{renderInfo(valueType)}</p>
                <Select
                    className="flex-1 min-w-48"
                    options={renderValueBelongType(valueType)}
                    value={value}
                    onChange={(val) => setValue(val)}
                />
            </div>
        </div>
    );
};
