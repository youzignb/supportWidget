// our script must be added on the body and not on the head, so that we can append our html dom to it.
// not body is required to be appended on the head under must.
// ensure to minify your code
// how did you take care of name spaces

    var YouzignWidget = (function (window, undefined) {
        let entry = document.getElementsByTagName('script')[0];

        let chat = document.createElement('script');
        chat.async = true;
        chat.src = "https://code-eu1.jivosite.com/widget/Pbq73bC8eR";
        entry.parentNode.insertBefore(chat, entry);

        function loadCssStyle (resolve) {
            let cssLink = document.createElement('link');
            cssLink.rel = 'stylesheet';
            cssLink.type = 'text/css';
            cssLink.href = 'https://cdn.jsdelivr.net/gh/youzignb/supportWidget@f83331a4bb14f45b2c4fe6908458e0b00613b8e6/widget2.css';

            let entry = document.getElementsByTagName('script')[0];
            entry.parentNode.insertBefore(cssLink, entry);
            resolve();
        }

        function isCssReady (resolve) {
            let readyElem = document.createElement('span');
            readyElem.id = 'youzign-css-ready';
            readyElem.style = 'color: #ffffff';

            let entry = document.getElementsByTagName('body')[0];
            entry.appendChild(readyElem);

            (function poll () {
                let targetElem = document.getElementById('youzign-css-ready');

                if ((/rgb\(18, 52, 86\)|#FFFFFF/i).test(window.getComputedStyle(targetElem).getPropertyValue('color')) === false) {
                    setTimeout(() => {
                        poll();
                    }, 500)
                } else {
                    resolve();
                }
            })();
        }

        function loadHtmlTemplate (resolve) {
            let Youzignhtml = `<div class="youzign_widget-popup closed">
                <svg width="270" height="270" viewBox="0 0 270 270" fill="none" class="widgetBg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C2.23858 0 0 2.23857 0 5V156.255C52 242.426 216.5 301.021 270 252.191V5C270 2.23858 267.761 0 265 0H5ZM265.039 270H4.96052C4.97367 270 4.98683 270 5 270H265C265.013 270 265.026 270 265.039 270Z" fill="url(#paint0_linear_177_87)"/>
                    <defs>
                    <linearGradient id="paint0_linear_177_87" x1="107.299" y1="315.993" x2="10.7717" y2="-3.25688" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#7909F2"/>
                    <stop offset="1" stop-color="#472F5C"/>
                    </linearGradient>
                    </defs>
                </svg>
                
                <div class="youzign_popup-content">
                    <h1>Need help?</h1>
                    <p>Search the docs or get in touch!</p>
                    <div class="youzign_widget-buttons">
                        <button id="docs-btn" onclick="openDocs()">
                            <svg width="50" height="63" viewBox="0 0 50 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 6.25V56.25C0 57.9076 0.65848 59.4973 1.83058 60.6694C3.00268 61.8415 4.5924 62.5 6.25 62.5H43.75C45.4076 62.5 46.9973 61.8415 48.1694 60.6694C49.3415 59.4973 50 57.9076 50 56.25V19.8188C49.9999 18.9861 49.8334 18.1619 49.5104 17.3945C49.1873 16.6271 48.7142 15.932 48.1188 15.35L34.2438 1.78125C33.0761 0.639555 31.508 0.000203248 29.875 0H6.25C4.5924 0 3.00268 0.65848 1.83058 1.83058C0.65848 3.00268 0 4.5924 0 6.25V6.25Z" fill="url(#paint0_linear_185_118)"/>
                                <path d="M43.75 18.75L31.25 6.25V18.75H43.75Z" fill="white"/>
                                <rect x="9.375" y="28.125" width="31.25" height="6.25" fill="white"/>
                                <rect x="9.375" y="40.625" width="31.25" height="6.25" fill="white"/>
                                <defs>
                                <linearGradient id="paint0_linear_185_118" x1="25" y1="0" x2="25" y2="62.5" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#780AEE"/>
                                <stop offset="1" stop-color="#B26AFF"/>
                                </linearGradient>
                                </defs>
                            </svg> 

                            <span>Docs</span>
                        </button>

                        <button id="contact-btn" onclick="jivo_api.open();">
                            <svg width="53" height="63" viewBox="0 0 53 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.025 62.5L52.5 31.5L0.025 0.5L0 24.6111L37.5 31.5L0 38.3889L0.025 62.5Z" fill="url(#paint0_linear_186_120)"/>
                                <defs>
                                <linearGradient id="paint0_linear_186_120" x1="26.25" y1="0.5" x2="26.25" y2="62.5" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#B26AFF"/>
                                <stop offset="1" stop-color="#8747CC"/>
                                </linearGradient>
                                </defs>
                            </svg>                            

                            <span>Contact</span>
                        </button>
                    </div>
                </div>
            </div>

            <button class="youzign_widget-icon closed">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="chat-icon">
                    <path d="M16 8C16 11.866 12.418 15 8 15C7.20765 15.0011 6.41859 14.8982 5.653 14.694C5.069 14.99 3.728 15.558 1.472 15.928C1.272 15.96 1.12 15.752 1.199 15.566C1.553 14.73 1.873 13.616 1.969 12.6C0.744 11.37 0 9.76 0 8C0 4.134 3.582 1 8 1C12.418 1 16 4.134 16 8ZM5 8C5 7.73478 4.89464 7.48043 4.70711 7.29289C4.51957 7.10536 4.26522 7 4 7C3.73478 7 3.48043 7.10536 3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8C3 8.26522 3.10536 8.51957 3.29289 8.70711C3.48043 8.89464 3.73478 9 4 9C4.26522 9 4.51957 8.89464 4.70711 8.70711C4.89464 8.51957 5 8.26522 5 8V8ZM9 8C9 7.73478 8.89464 7.48043 8.70711 7.29289C8.51957 7.10536 8.26522 7 8 7C7.73478 7 7.48043 7.10536 7.29289 7.29289C7.10536 7.48043 7 7.73478 7 8C7 8.26522 7.10536 8.51957 7.29289 8.70711C7.48043 8.89464 7.73478 9 8 9C8.26522 9 8.51957 8.89464 8.70711 8.70711C8.89464 8.51957 9 8.26522 9 8V8ZM12 9C12.2652 9 12.5196 8.89464 12.7071 8.70711C12.8946 8.51957 13 8.26522 13 8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1054 7.48043 11 7.73478 11 8C11 8.26522 11.1054 8.51957 11.2929 8.70711C11.4804 8.89464 11.7348 9 12 9V9Z" fill="white"/>
                </svg>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="close-icon">
                    <path d="M9 0.25C11.3206 0.25 13.5462 1.17187 15.1872 2.81282C16.8281 4.45376 17.75 6.67936 17.75 9C17.75 11.3206 16.8281 13.5462 15.1872 15.1872C13.5462 16.8281 11.3206 17.75 9 17.75C6.67936 17.75 4.45376 16.8281 2.81282 15.1872C1.17187 13.5462 0.25 11.3206 0.25 9C0.25 6.67936 1.17187 4.45376 2.81282 2.81282C4.45376 1.17187 6.67936 0.25 9 0.25V0.25ZM9 7.93875L6.9675 5.90625C6.82677 5.76552 6.6359 5.68646 6.43688 5.68646C6.23785 5.68646 6.04698 5.76552 5.90625 5.90625C5.76552 6.04698 5.68646 6.23785 5.68646 6.43688C5.68646 6.6359 5.76552 6.82677 5.90625 6.9675L7.93875 9L5.90625 11.0325C5.83657 11.1022 5.78129 11.1849 5.74358 11.276C5.70587 11.367 5.68646 11.4646 5.68646 11.5631C5.68646 11.6617 5.70587 11.7593 5.74358 11.8503C5.78129 11.9413 5.83657 12.0241 5.90625 12.0938C5.97593 12.1634 6.05866 12.2187 6.1497 12.2564C6.24075 12.2941 6.33833 12.3135 6.43688 12.3135C6.53542 12.3135 6.633 12.2941 6.72405 12.2564C6.81509 12.2187 6.89782 12.1634 6.9675 12.0938L9 10.0612L11.0325 12.0938C11.1022 12.1634 11.1849 12.2187 11.276 12.2564C11.367 12.2941 11.4646 12.3135 11.5631 12.3135C11.6617 12.3135 11.7593 12.2941 11.8503 12.2564C11.9413 12.2187 12.0241 12.1634 12.0938 12.0938C12.1634 12.0241 12.2187 11.9413 12.2564 11.8503C12.2941 11.7593 12.3135 11.6617 12.3135 11.5631C12.3135 11.4646 12.2941 11.367 12.2564 11.276C12.2187 11.1849 12.1634 11.1022 12.0938 11.0325L10.0612 9L12.0938 6.9675C12.1634 6.89782 12.2187 6.81509 12.2564 6.72405C12.2941 6.633 12.3135 6.53542 12.3135 6.43688C12.3135 6.33833 12.2941 6.24075 12.2564 6.1497C12.2187 6.05866 12.1634 5.97593 12.0938 5.90625C12.0241 5.83657 11.9413 5.78129 11.8503 5.74358C11.7593 5.70587 11.6617 5.68646 11.5631 5.68646C11.4646 5.68646 11.367 5.70587 11.276 5.74358C11.1849 5.78129 11.1022 5.83657 11.0325 5.90625L9 7.93875Z" fill="white"/>
                </svg>
            </button>`;

            let div = document.createElement('div');
            let entry = document.querySelector('#youzign-script');
            div.innerHTML = Youzignhtml;
            entry.parentNode.insertBefore(div, entry);

            resolve();
        }

        let promise1 = new Promise((resolve, reject) => {
            loadCssStyle(resolve);
        });

        let promise2 = promise1.then(() => {
            return new Promise((resolve, reject) => {
                isCssReady(resolve);
            })
        })

        let promise3 = promise2.then(() => {
            return new Promise((resolve, reject) => {
                loadHtmlTemplate(resolve);
            })
        })

        promise3.then(() => {
            let widgetButton = document.querySelector(".youzign_widget-icon");
            let widgetPopup = document.querySelector(".youzign_widget-popup");
            widgetButton.onclick = function () {
                widgetButton.classList.toggle("closed");
                widgetPopup.classList.toggle("closed");
            }
        })
    })(window);

    function openDocs() {
        let link = document.createElement('a');
        link.href = "https://zsuite.supporthero.io/";
        link.target = "_blank";
        link.click();
    }

    function jivo_onLoadCallback(){
        // Create a DIV element for the label
        window.jivo_cstm_widget = document.createElement('div');
        jivo_cstm_widget.setAttribute('id', 'jivo_custom_widget');
        document.body.appendChild(jivo_cstm_widget);
    }
