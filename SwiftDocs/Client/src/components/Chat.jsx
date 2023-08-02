import React from "react";
import "./Scss/Chats.scss";

const Chat = () => {
    return (
        <div className="h-screen overflow-y-auto">
            <div className="app-container">
                <div className="app-left scrollbar-hide">
                    <div className="app-left-header">
                        <div className="app-logo">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="50"
                                height="50"
                                viewBox="0 0 100 100"
                            >
                                <g>
                                    <circle
                                        cx="77"
                                        cy="13"
                                        r="1"
                                        fill="#f1bc19"
                                    ></circle>
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="37"
                                        fill="#e4e4f9"
                                    ></circle>
                                    <circle
                                        cx="83"
                                        cy="15"
                                        r="4"
                                        fill="#f1bc19"
                                    ></circle>
                                    <circle
                                        cx="87"
                                        cy="24"
                                        r="2"
                                        fill="#8889b9"
                                    ></circle>
                                    <circle
                                        cx="81"
                                        cy="76"
                                        r="2"
                                        fill="#fbcd59"
                                    ></circle>
                                    <circle
                                        cx="15"
                                        cy="63"
                                        r="4"
                                        fill="#fbcd59"
                                    ></circle>
                                    <circle
                                        cx="25"
                                        cy="87"
                                        r="2"
                                        fill="#8889b9"
                                    ></circle>
                                    <circle
                                        cx="18.375"
                                        cy="54.5"
                                        r="2.5"
                                        fill="#fff"
                                    ></circle>
                                    <circle
                                        cx="77.5"
                                        cy="30.5"
                                        r="1.5"
                                        fill="#fff"
                                    ></circle>
                                    <g>
                                        <path className="path-1"
                                            fill="#1fb0f7"
                                            d="M34.259,71.706c1.208-1.745,1.978-3.69,2.417-5.044c0.197-0.61-0.078-1.258-0.655-1.539 C28.421,61.409,23.7,54.629,23.7,47.428c0-11.37,11.349-20.62,25.3-20.62s25.3,9.25,25.3,20.62S62.951,68.048,49,68.048 c-2.136,0-4.269-0.221-6.339-0.658c-0.086-0.018-0.175-0.027-0.262-0.027c-0.324,0-0.633,0.126-0.869,0.354 C39.847,69.345,37.149,70.822,34.259,71.706z"
                                        ></path>
                                        <path className="path-2"
                                            fill="#472b29"
                                            d="M49,27.508c13.564,0,24.6,8.936,24.6,19.92S62.564,67.348,49,67.348 c-2.087,0-4.172-0.216-6.195-0.643c-0.133-0.028-0.27-0.042-0.405-0.042c-0.506,0-0.987,0.195-1.356,0.55 c-1.252,1.211-3.101,2.337-5.174,3.179c0.68-1.286,1.158-2.546,1.472-3.515c0.301-0.93-0.135-1.956-1.013-2.384 C28.859,60.844,24.4,54.464,24.4,47.428C24.4,36.444,35.436,27.508,49,27.508 M49,26.108c-14.359,0-26,9.545-26,21.32 c0,7.793,5.103,14.604,12.714,18.323c0.259,0.126,0.385,0.42,0.296,0.695c-0.458,1.411-1.254,3.397-2.511,5.122 c-0.292,0.401-0.004,0.938,0.442,0.938c0.053,0,0.108-0.008,0.165-0.024c3.117-0.897,6.061-2.473,7.912-4.263 c0.106-0.102,0.241-0.157,0.383-0.157c0.039,0,0.078,0.004,0.117,0.012c2.073,0.437,4.244,0.673,6.483,0.673 c14.359,0,26-9.545,26-21.32S63.359,26.108,49,26.108L49,26.108z"
                                        ></path>
                                    </g>
                                    <g>
                                        <path
                                            fill="#472b29"
                                            d="M62.16,34.882c-0.09,0-0.181-0.024-0.263-0.075c-3.706-2.302-8.166-3.519-12.897-3.519 c-3.814,0-7.546,0.819-10.791,2.368c-0.249,0.119-0.548,0.013-0.667-0.236c-0.119-0.249-0.014-0.548,0.236-0.667 c3.378-1.613,7.258-2.466,11.221-2.466c4.918,0,9.561,1.269,13.424,3.67c0.235,0.146,0.307,0.454,0.161,0.689 C62.491,34.798,62.327,34.882,62.16,34.882z"
                                        ></path>
                                    </g>
                                    <g>
                                        <path
                                            fill="#472b29"
                                            d="M28.268,44.197c-0.048,0-0.097-0.007-0.145-0.022c-0.265-0.08-0.414-0.359-0.333-0.624 c1.092-3.599,3.559-6.77,7.132-9.172c0.229-0.154,0.54-0.093,0.694,0.136c0.154,0.229,0.093,0.54-0.136,0.694 c-3.38,2.272-5.708,5.256-6.732,8.632C28.681,44.058,28.483,44.197,28.268,44.197z"
                                        ></path>
                                    </g>
                                    <g>
                                        <path
                                            fill="#eff6fb"
                                            d="M66.915,73.689c-1.412-0.48-2.751-1.148-3.827-1.915c-0.195-0.138-0.422-0.211-0.658-0.211 c-0.088,0-0.176,0.01-0.262,0.03c-1.37,0.321-2.772,0.483-4.167,0.483c-8.437,0-15.3-5.667-15.3-12.633 c0-6.966,6.863-12.633,15.3-12.633s15.3,5.667,15.3,12.633c0,4.274-2.606,8.229-6.971,10.578 c-0.527,0.284-0.756,0.908-0.535,1.452C66.124,72.286,66.5,73.028,66.915,73.689z"
                                        ></path>
                                        <path
                                            fill="#472b29"
                                            d="M58,47.51c8.05,0,14.6,5.353,14.6,11.933c0,4.012-2.468,7.736-6.601,9.961 c-0.843,0.452-1.21,1.455-0.854,2.332c0.08,0.196,0.162,0.388,0.246,0.576c-0.69-0.332-1.334-0.707-1.899-1.109 c-0.313-0.223-0.681-0.341-1.063-0.341c-0.142,0-0.284,0.017-0.422,0.049c-1.319,0.309-2.667,0.465-4.008,0.465 c-8.05,0-14.6-5.354-14.6-11.934S49.95,47.51,58,47.51 M58,46.11c-8.837,0-16,5.97-16,13.333c0,7.364,7.163,13.333,16,13.333 c1.501,0,2.95-0.18,4.327-0.502c0.034-0.008,0.069-0.012,0.103-0.012c0.089,0,0.176,0.028,0.251,0.082 c1.293,0.921,2.943,1.708,4.671,2.217c0.047,0.014,0.093,0.021,0.136,0.021c0.358,0,0.593-0.43,0.361-0.755 c-0.608-0.853-1.068-1.784-1.407-2.617c-0.089-0.218,0.011-0.46,0.218-0.572C71.071,68.264,74,64.145,74,59.443 C74,52.08,66.837,46.11,58,46.11L58,46.11z"
                                        ></path>
                                    </g>
                                    <g>
                                        <circle
                                            cx="51.5"
                                            cy="59.5"
                                            r="2.5"
                                            fill="#472b29"
                                        ></circle>
                                    </g>
                                    <g>
                                        <circle
                                            cx="58.5"
                                            cy="59.5"
                                            r="2.5"
                                            fill="#472b29"
                                        ></circle>
                                    </g>
                                    <g>
                                        <circle
                                            cx="65.5"
                                            cy="59.5"
                                            r="2.5"
                                            fill="#472b29"
                                        ></circle>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <h1>QuickChat</h1>
                    </div>
                    <div className="app-profile-box">
                        <img
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
                            alt="profile"
                        />
                        <div className="app-profile-box-name">
                            Pam Beesly Halpert
                            <button className="app-setting">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    className="feather feather-settings"
                                    viewBox="0 0 24 24"
                                >
                                    <defs />
                                    <circle cx="12" cy="12" r="3" />
                                    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                                </svg>
                            </button>
                        </div>
                        <p className="app-profile-box-title">UI Designer</p>

                    </div>
                    <div className="chat-list-wrapper">
                        <div className="chat-list-header">
                            Active Conversations{" "}
                            <span className="c-number">4</span>
                            <svg
                                className="list-header-arrow"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="3"
                                class="feather feather-chevron-up"
                                viewBox="0 0 24 24"
                            >
                                <defs />
                                <path d="M18 15l-6-6-6 6" />
                            </svg>
                        </div>
                        <ul className="chat-list active">
                            <li className="chat-list-item active">
                                <img
                                    src="https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                                    alt="chat"
                                />
                                <span className="chat-list-name">
                                    Dwight Schrute
                                </span>
                            </li>
                            <li className="chat-list-item">
                                <img
                                    src="https://images.unsplash.com/photo-1566465559199-50c6d9c81631?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                                    alt="chat"
                                />
                                <span className="chat-list-name">
                                    Andy Bernard
                                </span>
                            </li>
                            <li className="chat-list-item">
                                <img
                                    src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80"
                                    alt="chat"
                                />
                                <span className="chat-list-name">
                                    Michael Scott
                                </span>
                            </li>
                            <li className="chat-list-item">
                                <img
                                    src="https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80"
                                    alt="chat"
                                />
                                <span className="chat-list-name">
                                    Holy Flax
                                </span>
                            </li>
                            <li className="chat-list-item">
                                <img
                                    src="https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                                    alt="chat"
                                />
                                <span className="chat-list-name">
                                    Jim Halpert
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="chat-list-wrapper">
                        <div className="chat-list-header active">
                            Achived Conversations{" "}
                            <span className="c-number">3</span>
                            <svg
                                className="list-header-arrow"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="3"
                                class="feather feather-chevron-up"
                                viewBox="0 0 24 24"
                            >
                                <defs />
                                <path d="M18 15l-6-6-6 6" />
                            </svg>
                        </div>
                        <ul className="chat-list">
                            <li className="chat-list-item">
                                <img
                                    src="https://images.unsplash.com/photo-1542042457485-a4c7afd74cd5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1270&q=80"
                                    alt="chat"
                                />
                                <span className="chat-list-name">
                                    Toby Flenderson
                                </span>
                            </li>
                            <li className="chat-list-item">
                                <img
                                    src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                                    alt="chat"
                                />
                                <span className="chat-list-name">
                                    Kelly Kapoor
                                </span>
                            </li>
                            <li className="chat-list-item">
                                <img
                                    src="https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                                    alt="chat"
                                />
                                <span className="chat-list-name">
                                    Roy Andersson
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="app-main">
                    <div className="chat-wrapper">
                        <div className="message-wrapper reverse">
                            <img
                                className="message-pp"
                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                                alt="profile-pic"
                            />
                            <div className="message-box-wrapper">
                                <div className="message-box">
                                    Neque porro quisquam est, qui dolorem ipsum
                                    quia dolor sit amet, consectetur
                                </div>
                                <span>9h ago</span>
                            </div>
                        </div>
                        <div className="message-wrapper reverse">
                            <img
                                className="message-pp"
                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                                alt="profile-pic"
                            />
                            <div className="message-box-wrapper">
                                <div className="message-box">
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.
                                </div>
                                <span>9h ago</span>
                            </div>
                        </div>
                        <div className="message-wrapper">
                            <img
                                className="message-pp"
                                src="https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80"
                                alt="profile-pic"
                            />
                            <div className="message-box-wrapper">
                                <div className="message-box">
                                    Nemo enim ipsam voluptatem quia voluptas sit
                                    aspernatur aut odit aut fugit, sed quia
                                    consequuntur magni dolores eos qui ratione
                                    voluptatem sequi nesciunt. Neque porro
                                    quisquam est, qui dolorem ipsum quia dolor
                                    sit amet, consectetur
                                </div>
                                <span>9h ago</span>
                            </div>
                        </div>
                        <div className="message-wrapper">
                            <img
                                className="message-pp"
                                src="https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80"
                                alt="profile-pic"
                            />
                            <div className="message-box-wrapper">
                                <div className="message-box">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit
                                </div>
                                <span>9h ago</span>
                            </div>
                        </div>
                        <div className="message-wrapper reverse">
                            <img
                                className="message-pp"
                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                                alt="profile-pic"
                            />
                            <div className="message-box-wrapper">
                                <div className="message-box">
                                    Lorem ipsum dolor sit amet
                                </div>
                                <span>9h ago</span>
                            </div>
                        </div>
                        <div className="message-wrapper reverse">
                            <img
                                className="message-pp"
                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                                alt="profile-pic"
                            />
                            <div className="message-box-wrapper">
                                <div className="message-box">
                                    Lorem ipsum dolor
                                </div>
                                <span>9h ago</span>
                            </div>
                        </div>
                        <div className="message-wrapper">
                            <img
                                className="message-pp"
                                src="https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80"
                                alt="profile-pic"
                            />
                            <div className="message-box-wrapper">
                                <div className="message-box">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit
                                </div>
                                <span>9h ago</span>
                            </div>
                        </div>
                        <div className="message-wrapper">
                            <img
                                className="message-pp"
                                src="https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80"
                                alt="profile-pic"
                            />
                            <div className="message-box-wrapper">
                                <div className="message-box">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit
                                </div>
                                <span>9h ago</span>
                            </div>
                        </div>
                        <div className="message-wrapper">
                            <img
                                className="message-pp"
                                src="https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80"
                                alt="profile-pic"
                            />
                            <div className="message-box-wrapper">
                                <div className="message-box">
                                    Lorem ipsum dolor sit amet
                                </div>
                                <span>9h ago</span>
                            </div>
                        </div>
                        <div className="message-wrapper reverse">
                            <img
                                className="message-pp"
                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                                alt="profile-pic"
                            />
                            <div className="message-box-wrapper">
                                <div className="message-box">
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.
                                </div>
                                <span>9h ago</span>
                            </div>
                        </div>
                    </div>
                    <div className="chat-input-wrapper">
                        <button className="chat-attachment-btn">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                className="feather feather-paperclip"
                                viewBox="0 0 24 24"
                            >
                                <defs />
                                <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                            </svg>
                        </button>
                        <div className="input-wrapper">
                            <input
                                type="text"
                                className="chat-input"
                                placeholder="Enter your message here"
                            />
                            <button className="emoji-btn">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    className="feather feather-smile"
                                    viewBox="0 0 24 24"
                                >
                                    <defs />
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
                                </svg>
                            </button>
                        </div>
                        <button className="chat-send-btn">Send</button>
                    </div>
                </div>
                <div className="app-right">
                    <div className="app-profile-box">
                        <img
                            src="https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                            alt="profile"
                        />
                        <p className="app-profile-box-title name">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-user"
                            >
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                            Dwight Scrute
                        </p>
                        <p className="app-profile-box-title mail">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-mail"
                            >
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            dwightscrute@test.com
                        </p>

                    </div>
                    <div className="app-activity-box">
                        <div className="activity-info-boxes">
                            <div className="activity-info-box time">
                                <div className="info-icon-wrapper">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="feather feather-clock"
                                        viewBox="0 0 24 24"
                                    >
                                        <defs />
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 6v6l4 2" />
                                    </svg>
                                </div>
                                <div className="info-text-wrapper">
                                    <span className="info-text-upper">13h</span>
                                    <span className="info-text-bottom">
                                        Time
                                    </span>
                                </div>
                            </div>
                            <div className="activity-info-box atendee">
                                <div className="info-icon-wrapper">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="feather feather-users"
                                        viewBox="0 0 24 24"
                                    >
                                        <defs />
                                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                                    </svg>
                                </div>
                                <div className="info-text-wrapper">
                                    <span className="info-text-upper">32</span>
                                    <span className="info-text-bottom">
                                        Atendeed
                                    </span>
                                </div>
                            </div>
                            <div className="activity-info-box meeting">
                                <div className="info-icon-wrapper">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="feather feather-calendar"
                                        viewBox="0 0 24 24"
                                    >
                                        <defs />
                                        <rect
                                            width="18"
                                            height="18"
                                            x="3"
                                            y="4"
                                            rx="2"
                                            ry="2"
                                        />
                                        <path d="M16 2v4M8 2v4M3 10h18" />
                                    </svg>
                                </div>
                                <div className="info-text-wrapper">
                                    <span className="info-text-upper">122</span>
                                    <span className="info-text-bottom">
                                        Meetings
                                    </span>
                                </div>
                            </div>
                            <div className="activity-info-box reject">
                                <div className="info-icon-wrapper">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="feather feather-x-square"
                                        viewBox="0 0 24 24"
                                    >
                                        <defs />
                                        <rect
                                            width="18"
                                            height="18"
                                            x="3"
                                            y="3"
                                            rx="2"
                                            ry="2"
                                        />
                                        <path d="M9 9l6 6M15 9l-6 6" />
                                    </svg>
                                </div>
                                <div className="info-text-wrapper">
                                    <span className="info-text-upper">12</span>
                                    <span className="info-text-bottom">
                                        Rejected
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="activity-info-header">
                            <span className="info-header-bold">
                                Current Week
                            </span>
                            <span className="info-header-light">Activity</span>
                        </div>
                        <div className="activity-days-wrapper">
                            <div className="day">
                                <div className="chart"></div>
                                <span>MON</span>
                            </div>
                            <div className="day">
                                <div className="chart"></div>
                                <span>TUE</span>
                            </div>
                            <div className="day current">
                                <div className="chart"></div>
                                <span>WED</span>
                            </div>
                            <div className="day">
                                <div className="chart"></div>
                                <span>THU</span>
                            </div>
                            <div className="day">
                                <div className="chart"></div>
                                <span>FRI</span>
                            </div>
                            <div className="day">
                                <div className="chart"></div>
                                <span>SAT</span>
                            </div>
                            <div className="day">
                                <div className="chart"></div>
                                <span>SUN</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Chat;
