import React, { useState } from "react";
import axios from "axios";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

export default function ReportModal({ isShow, setIsShow, houseId }) {
    const [reportContent, setReportContent] = useState({
        reason: [],
        content: "",
    });
    const [reportFail, setReportFail] = useState(null);

    const handleReport = (e) => {
        e.preventDefault();
        const requestParam = {
            propertyId: parseInt(houseId),
            reason: reportContent.reason.join(),
            content: reportContent.content,
        };
        console.log("requestParam", requestParam);
        axios
            .post("/api/reports", requestParam)
            .then((response) => {
                setIsShow(false);
                setReportFail(null);
                setReportContent({
                    reason: [],
                    content: "",
                });
                alert("Báo cáo thành công!");
            })
            .catch((err) => {
                setReportFail("Báo cáo thất bại! Vui lòng thử lại sau!");
                console.log(err.response.data);
            });
    };

    return (
        <div
            className={`fixed inset-0 z-50 overflow-y-auto ${
                isShow ? "block" : "hidden"
            }`}
        >
            <div className="flex items-end justify-center min-h-screen pt-8 px-8 pb-32 text-center sm:block sm:p-0">
                <div
                    className="fixed inset-0 transition-opacity"
                    aria-hidden="true"
                >
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                >
                    &#8203;
                </span>

                <div
                    className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                >
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                                <ExclamationTriangleIcon
                                    className="h-6 w-6 text-amber-400"
                                    aria-hidden="true"
                                    width="20"
                                    height="20"
                                />
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-4 text-left">
                                <h3
                                    className="text-lg leading-6 font-medium text-gray-900"
                                    id="modal-headline"
                                >
                                    Báo cáo tin đăng có thông tin không đúng
                                </h3>
                                {reportFail && (
                                    <p className="my-2 p-4 bg-red-200 text-red-700">
                                        {reportFail}
                                    </p>
                                )}
                                <div className="mt-2">
                                    <div className="flex items-center my-4">
                                        <input
                                            id="location"
                                            type="checkbox"
                                            value=""
                                            className="w-4 h-4 text-amber-600  rounded border-gray-300 focus:ring-amber-500  focus:ring-2"
                                            checked={reportContent.reason.includes(
                                                "location"
                                            )}
                                            onClick={(e) => {
                                                if (e.target.checked) {
                                                    setReportContent({
                                                        ...reportContent,
                                                        reason: [
                                                            ...reportContent.reason,
                                                            "location",
                                                        ],
                                                    });
                                                } else {
                                                    setReportContent({
                                                        ...reportContent,
                                                        reason: reportContent.reason.filter(
                                                            (item) =>
                                                                item !==
                                                                "location"
                                                        ),
                                                    });
                                                }
                                            }}
                                        />
                                        <label
                                            htmlFor="location"
                                            className="ml-2 text-sm text-neutral-900 "
                                        >
                                            Địa chỉ/Vị trí của bất động sản
                                        </label>
                                    </div>

                                    <div className="flex items-center my-4">
                                        <input
                                            id="information"
                                            type="checkbox"
                                            value=""
                                            className="w-4 h-4 text-amber-600  rounded border-gray-300 focus:ring-amber-500  focus:ring-2 "
                                            checked={reportContent.reason.includes(
                                                "information"
                                            )}
                                            onClick={(e) => {
                                                if (e.target.checked) {
                                                    setReportContent({
                                                        ...reportContent,
                                                        reason: [
                                                            ...reportContent.reason,
                                                            "information",
                                                        ],
                                                    });
                                                } else {
                                                    setReportContent({
                                                        ...reportContent,
                                                        reason: reportContent.reason.filter(
                                                            (item) =>
                                                                item !==
                                                                "information"
                                                        ),
                                                    });
                                                }
                                            }}
                                        />
                                        <label
                                            htmlFor="information"
                                            className="ml-2 text-sm text-neutral-900 "
                                        >
                                            Thông tin của bất động sản: giá,
                                            diện tích, mô tả,...
                                        </label>
                                    </div>

                                    <div className="flex items-center my-4">
                                        <input
                                            id="images"
                                            type="checkbox"
                                            value=""
                                            checked={reportContent.reason.includes(
                                                "images"
                                            )}
                                            className="w-4 h-4 text-amber-600  rounded border-gray-300 focus:ring-amber-500  focus:ring-2 "
                                            onClick={(e) => {
                                                if (e.target.checked) {
                                                    setReportContent({
                                                        ...reportContent,
                                                        reason: [
                                                            ...reportContent.reason,
                                                            "images",
                                                        ],
                                                    });
                                                } else {
                                                    setReportContent({
                                                        ...reportContent,
                                                        reason: reportContent.reason.filter(
                                                            (item) =>
                                                                item !==
                                                                "images"
                                                        ),
                                                    });
                                                }
                                            }}
                                        />
                                        <label
                                            htmlFor="images"
                                            className="ml-2 text-sm text-neutral-900 "
                                        >
                                            Hình ảnh và video
                                        </label>
                                    </div>

                                    <div className="flex items-center my-4">
                                        <input
                                            id="duplicate"
                                            type="checkbox"
                                            value=""
                                            checked={reportContent.reason.includes(
                                                "duplicate"
                                            )}
                                            className="w-4 h-4 text-amber-600  rounded border-gray-300 focus:ring-amber-500  focus:ring-2 "
                                            onClick={(e) => {
                                                if (e.target.checked) {
                                                    setReportContent({
                                                        ...reportContent,
                                                        reason: [
                                                            ...reportContent.reason,
                                                            "duplicate",
                                                        ],
                                                    });
                                                } else {
                                                    setReportContent({
                                                        ...reportContent,
                                                        reason: reportContent.reason.filter(
                                                            (item) =>
                                                                item !==
                                                                "duplicate"
                                                        ),
                                                    });
                                                }
                                            }}
                                        />
                                        <label
                                            htmlFor="duplicate"
                                            className="ml-2 text-sm text-neutral-900 "
                                        >
                                            Tin đăng bị trùng lặp
                                        </label>
                                    </div>

                                    <div className="flex items-center my-4">
                                        <input
                                            id="fake"
                                            type="checkbox"
                                            value=""
                                            checked={reportContent.reason.includes(
                                                "fake"
                                            )}
                                            className="w-4 h-4 text-amber-600  rounded border-gray-300 focus:ring-amber-500  focus:ring-2 "
                                            onClick={(e) => {
                                                if (e.target.checked) {
                                                    setReportContent({
                                                        ...reportContent,
                                                        reason: [
                                                            ...reportContent.reason,
                                                            "fake",
                                                        ],
                                                    });
                                                } else {
                                                    setReportContent({
                                                        ...reportContent,
                                                        reason: reportContent.reason.filter(
                                                            (item) =>
                                                                item !== "fake"
                                                        ),
                                                    });
                                                }
                                            }}
                                        />
                                        <label
                                            htmlFor="fake"
                                            className="ml-2 text-sm text-neutral-900 "
                                        >
                                            Tin đăng không có thật
                                        </label>
                                    </div>

                                    <div className="flex items-center my-4">
                                        <input
                                            id="sold"
                                            type="checkbox"
                                            value=""
                                            checked={reportContent.reason.includes(
                                                "sold"
                                            )}
                                            className="w-4 h-4 text-amber-600  rounded border-gray-300 focus:ring-amber-500  focus:ring-2 "
                                            onClick={(e) => {
                                                if (e.target.checked) {
                                                    setReportContent({
                                                        ...reportContent,
                                                        reason: [
                                                            ...reportContent.reason,
                                                            "sold",
                                                        ],
                                                    });
                                                } else {
                                                    setReportContent({
                                                        ...reportContent,
                                                        reason: reportContent.reason.filter(
                                                            (item) =>
                                                                item !== "sold"
                                                        ),
                                                    });
                                                }
                                            }}
                                        />
                                        <label
                                            htmlFor="sold"
                                            className="ml-2 text-sm text-neutral-900 "
                                        >
                                            Bất động sản đã bán/cho thuê
                                        </label>
                                    </div>

                                    <div className="flex items-center my-4">
                                        <input
                                            id="contact"
                                            type="checkbox"
                                            value=""
                                            checked={reportContent.reason.includes(
                                                "contact"
                                            )}
                                            className="w-4 h-4 text-amber-600  rounded border-gray-300 focus:ring-amber-500  focus:ring-2 "
                                            onClick={(e) => {
                                                if (e.target.checked) {
                                                    setReportContent({
                                                        ...reportContent,
                                                        reason: [
                                                            ...reportContent.reason,
                                                            "contact",
                                                        ],
                                                    });
                                                } else {
                                                    setReportContent({
                                                        ...reportContent,
                                                        reason: reportContent.reason.filter(
                                                            (item) =>
                                                                item !==
                                                                "contact"
                                                        ),
                                                    });
                                                }
                                            }}
                                        />
                                        <label
                                            htmlFor="contact"
                                            className="ml-2 text-sm text-neutral-900 "
                                        >
                                            Không liên lạc được
                                        </label>
                                    </div>

                                    <div className="my-4">
                                        <label
                                            htmlFor="report-content"
                                            className="text-sm text-neutral-900"
                                        >
                                            Phản hồi khác
                                        </label>
                                        <textarea
                                            id="report-content"
                                            rows="4"
                                            className="bg-gray-50 block p-2.5 w-full text-sm text-neutral-900 rounded-lg border border-gray-300 focus:ring-amber-500 focus:border-blue-500"
                                            placeholder="Nội dung báo cáo"
                                            value={reportContent.content}
                                            onChange={(e) => {
                                                setReportContent({
                                                    ...reportContent,
                                                    content: e.target.value,
                                                });
                                            }}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex items-center justify-between">
                        <button
                            onClick={() => {
                                setIsShow(false);
                                setReportFail(null);
                                setReportContent({
                                    reason: [],
                                    content: "",
                                });
                            }}
                            type="button"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 border-amber-600 text-base font-medium text-neutral-700 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                            Hủy
                        </button>

                        <button
                            type="button"
                            onClick={(e) => {
                                if (reportContent.reason.length === 0) {
                                    setReportFail(
                                        "Vui lòng chọn ít nhất một lý do báo cáo"
                                    );
                                    return;
                                }
                                handleReport(e);
                            }}
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-amber-500 text-base font-medium text-white hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                            Gửi báo cáo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
