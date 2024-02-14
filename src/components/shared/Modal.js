import React from "react";

const Modal = ({ closeModal, isOpen }) => {
  return (
    <div
      id="default-modal"
      tabindex="-1"
      aria-hidden="true"
      className={`${
        isOpen ? "block" : "hidden"
      } bg-black bg-opacity-30 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen max-h-full`}
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full mx-auto">
        <div className="relative bg-gray-200 rounded-lg shadow">
          <div className="flex items-center gap-2 justify-between p-4 md:p-5 rounded-t">
            <svg
              className="w-6 h-6 text-gray-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Z"
              />
            </svg>
            <h3 className="text-xl font-bold text-gray-800">
              Appointment Information
            </h3>
            <div className="flex items-center ms-auto gap-6">
              <h3 className="text-sm text-gray-400">
                Confirmation #306-1C68C317
              </h3>
              <button
                type="button"
                className="text-gray-400 border border-slate-500 rounded-full bg-transparent hover:bg-gray-200 hover:text-gray-900 text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-hide="default-modal"
                onClick={closeModal}
                data-testid="close-button"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
          </div>

          <div className="p-4 md:p-5 space-y-4">
            <div className="flex w-full">
              <div className="w-full">
                <h3 className="text-xl text-start font-semibold text-gray-800">
                  Wed, Jan 24, 2024 | 9:30 AM
                </h3>
                <p className="text-md text-start text-gray-800">John Smith</p>
                <p className="text-md text-start text-gray-800">
                  General Test | 30 min
                </p>
                <p className="text-md text-start text-gray-800">
                  1615 Dufferin St. Suit #106, Toronto, ON
                </p>
                <div className="flex gap-1 items-center">
                  <svg
                    className="svg-icon text-blue-800"
                    style={{
                      width: "1.3em",
                      height: "1.3em",
                      verticalAlign: "middle",
                      fill: "currentColor",
                      overflow: "hidden",
                    }}
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M497.50016 528.95744l39.89504 284.24192c1.26976 9.05216 8.37632 16.1792 17.44896 17.44896 0.96256 0.14336 1.90464 0.2048 2.84672 0.2048 8.02816 0 15.40096-4.68992 18.71872-12.16512l272.81408-614.4c3.44064-7.76192 1.76128-16.81408-4.23936-22.79424-6.00064-6.00064-15.0528-7.63904-22.79424-4.23936l-614.4 272.81408c-8.33536 3.72736-13.23008 12.4928-11.96032 21.56544 1.26976 9.05216 8.37632 16.1792 17.44896 17.44896L497.50016 528.95744zM790.20032 236.25728 568.0128 736.62464l-32.09216-228.63872c-1.26976-9.05216-8.37632-16.1792-17.44896-17.44896l-228.63872-32.09216L790.20032 236.25728z" />
                  </svg>
                  <p className="text-md text-start text-blue-800 underline">
                    Directions
                  </p>
                </div>
                <button
                  data-modal-target="default-modal"
                  data-modal-toggle="default-modal"
                  className="flex items-center gap-2 justify-center text-white bg-blue-700 mt-8 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm min-w-56 py-2.5 text-center"
                  type="button"
                >
                  <span> Add to Calendar</span>
                  <svg
                    className="w-5 h-5 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Z"
                    />
                  </svg>
                </button>
                <button
                  data-modal-target="default-modal"
                  data-modal-toggle="default-modal"
                  className="flex items-center gap-2 justify-center text-white bg-red-700 mt-3 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm min-w-56 py-2.5 text-center"
                  type="button"
                >
                  <span>Cancel Appointment</span>
                  <svg
                    className="w-5 h-5 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                    />
                  </svg>
                </button>
              </div>
              <div className="w-full">
                <img
                  src="https://seeklogo.com/images/L/logo-com-hr-logo-5636A4D2D5-seeklogo.com.png"
                  className="w-1/2 mx-auto"
                />
                <div className="flex items-center justify-around mt-4 px-7">
                  <div className="flex gap-1 items-center">
                    <svg
                      className="w-4 h-5 text-blue-800"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.5 3A3.5 3.5 0 0 0 14 7L8.1 9.8A3.5 3.5 0 0 0 2 12a3.5 3.5 0 0 0 6.1 2.3l6 2.7-.1.5a3.5 3.5 0 1 0 1-2.3l-6-2.7a3.5 3.5 0 0 0 0-1L15 9a3.5 3.5 0 0 0 6-2.4c0-2-1.6-3.5-3.5-3.5Z" />
                    </svg>

                    <p className="text-sm text-start text-blue-800 underline">
                      Share by Email
                    </p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <svg
                      className="w-4 h-4 text-blue-800"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16.4 18H19c.6 0 1-.4 1-1v-5c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v5c0 .6.4 1 1 1h2.6m9.4-7V5c0-.6-.4-1-1-1H8a1 1 0 0 0-1 1v6h10ZM7 15h10v4c0 .6-.4 1-1 1H8a1 1 0 0 1-1-1v-4Z"
                      />
                    </svg>
                    <p className="text-sm text-start text-blue-800 underline">
                      Print Details
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full bg-white rounded-lg py-6 px-4">
              <h3 className="text-xl text-start font-semibold text-gray-800">
                Location Information
              </h3>

              <div className="flex items-center mt-5 gap-2 justify-between py-2 px-3 rounded-t bg-red-100">
                <svg
                  className="w-5 h-5 text-red-800 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 13v-2a1 1 0 0 0-1-1h-.8l-.7-1.7.6-.5a1 1 0 0 0 0-1.5L17.7 5a1 1 0 0 0-1.5 0l-.5.6-1.7-.7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.8l-1.7.7-.5-.6a1 1 0 0 0-1.5 0L5 6.3a1 1 0 0 0 0 1.5l.6.5-.7 1.7H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.8l.7 1.7-.6.5a1 1 0 0 0 0 1.5L6.3 19a1 1 0 0 0 1.5 0l.5-.6 1.7.7v.8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.8l1.7-.7.5.6a1 1 0 0 0 1.5 0l1.4-1.4a1 1 0 0 0 0-1.5l-.6-.5.7-1.7h.8a1 1 0 0 0 1-1Z"
                  />
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  />
                </svg>
                <h3 className="font-semibold text-sm text-red-800">
                  Service Description
                </h3>
                <p className="text-sm text-red-800">Today</p>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-red-200 hover:text-red-900 text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  data-modal-hide="default-modal"
                >
                  <svg
                    className="w-6 h-6 text-red-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 12h14m-7 7V5"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div className="flex items-center gap-2 mt-4 justify-between py-2 px-3 rounded-t bg-yellow-100">
                <svg
                  className="w-5 h-5 text-yellow-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 11h2v5m-2 0h4m-2.6-8.5h0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h3 className="font-semibold text-sm text-yellow-800">
                  Civic Holiday Weekend Closures
                </h3>
                <p className="text-sm text-yellow-800">Dec 21 - 31</p>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-yellow-200 hover:text-yellow-900 text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  data-modal-hide="default-modal"
                >
                  <svg
                    className="w-6 h-6 text-yellow-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 12h14m-7 7V5"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div className="flex w-full mt-5">
                <div className="w-full">
                  <table className="table-auto w-2/3">
                    <thead>
                      <tr>
                        <th colSpan={2} className="text-start pb-3">
                          Hours of Operation
                        </th>
                      </tr>
                    </thead>
                    <tbody className="border-l-2 border-l-gray-700">
                      <tr>
                        <td className="pl-2 text-left">Mon</td>
                        <td className="pl-2 text-left">8:00 AM - 7:00 PM</td>
                      </tr>
                      <tr>
                        <td className="pl-2 text-left font-semibold">Tues</td>
                        <td className="pl-2 text-left font-semibold">
                          8:00 AM - 7:00 PM
                        </td>
                      </tr>
                      <tr>
                        <td className="pl-2 text-left">Wed</td>
                        <td className="pl-2 text-left">8:00 AM - 7:00 PM</td>
                      </tr>
                      <tr>
                        <td className="pl-2 text-left">Thu</td>
                        <td className="pl-2 text-left">8:00 AM - 7:00 PM</td>
                      </tr>
                      <tr>
                        <td className="pl-2 text-left">Fri</td>
                        <td className="pl-2 text-left">8:00 AM - 7:00 PM</td>
                      </tr>
                      <tr>
                        <td className="pl-2 text-left">Sat</td>
                        <td className="pl-2 text-left">8:00 AM - 7:00 PM</td>
                      </tr>
                      <tr>
                        <td className="pl-2 text-left">Sun</td>
                        <td className="pl-2 text-left">Closed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="w-full">
                  <table className="table-auto w-2/3">
                    <thead>
                      <tr>
                        <th colSpan={2} className="text-start pb-3">
                          Contact
                        </th>
                      </tr>
                    </thead>
                    <tbody className="border-l-2 border-l-gray-700">
                      <tr>
                        <td className="pl-2 text-left">Phone</td>
                        <td className="pl-2 text-left">1-877-849-3637</td>
                      </tr>
                      <tr>
                        <td className="pl-2 text-left">Fax</td>
                        <td className="pl-2 text-left">1-877-849-3637</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-start mt-5 text-gray-700">
                * In order to provide continuing education for our staff, this
                location will be closed on the 2<sup>nd</sup> Wednesday of every
                month.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
