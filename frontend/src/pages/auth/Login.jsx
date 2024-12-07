import React, { useContext, useState } from 'react'
import './Login.css'
import AuthContext from '../../context/AuthContext';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { loginUser } = useContext(AuthContext);
    return (
        <div className="login">
            <div className="login-left">
                <div className="ll-header">
                    <div className="ll-heading">
                        404 Found
                    </div>
                </div>
                <div className="anima">
                    <div className="box-out">
                        <div className="in-box b1">
                            <svg viewBox="0 0 110 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="Vector"
                                    d="M90.4419 32.412C89.2713 32.0016 88.0907 31.6214 86.9013 31.2718C87.1011 30.4376 87.285 29.6135 87.4483 28.8039C90.1287 15.5092 88.3764 4.79869 82.3913 1.27228C76.6528 -2.10837 67.268 1.41672 57.79 9.84508C56.8559 10.6772 55.9425 11.5333 55.0507 12.4126C54.4537 11.8279 53.8462 11.2546 53.2284 10.6929C43.2949 1.68103 33.3382 -2.11715 27.3595 1.41936C21.6262 4.81054 19.9285 14.8792 22.3416 27.4789C22.5817 28.7268 22.8528 29.9682 23.1546 31.202C21.7452 31.6112 20.3852 32.0467 19.0837 32.5104C7.43746 36.6593 0 43.1612 0 49.9053C0 56.8708 7.98445 63.8573 20.1145 68.0937C21.0979 68.4357 22.0895 68.7527 23.0884 69.0442C22.764 70.3731 22.476 71.7109 22.2247 73.0562C19.9242 85.4373 21.7207 95.268 27.4386 98.6376C33.3442 102.118 43.2562 98.5411 52.9074 89.9204C53.69 89.2196 54.4554 88.4989 55.2028 87.759C56.1686 88.7111 57.1601 89.6355 58.1763 90.5311C67.5254 98.7509 76.7585 102.07 82.4708 98.6912C88.3708 95.2012 90.2885 84.6404 87.7989 71.7918C87.6028 70.7852 87.3829 69.7836 87.1393 68.7878C87.8354 68.5771 88.5186 68.3602 89.1847 68.1345C101.795 63.8657 110 56.9639 110 49.9053C110 43.1366 102.322 36.5909 90.4419 32.412ZM87.707 63.5772C87.1054 63.7805 86.4883 63.9768 85.8593 64.1677C84.4671 59.6645 82.5885 54.8762 80.2893 49.9286C82.4832 45.0991 84.2896 40.3719 85.6427 35.898C86.7681 36.2308 87.8599 36.5816 88.9127 36.9518C99.0919 40.5326 105.301 45.8262 105.301 49.9053C105.301 54.2501 98.5952 59.8906 87.707 63.5772ZM83.1892 72.7243C84.2901 78.4056 84.4469 83.5424 83.7177 87.5583C83.0629 91.1669 81.7455 93.5724 80.1161 94.5361C76.6498 96.5864 69.2364 93.9214 61.2412 86.8914C60.2961 86.0587 59.3737 85.1993 58.4753 84.3142C61.5751 80.8506 64.6727 76.8241 67.696 72.352C73.0138 71.8699 78.0377 71.0814 82.5937 70.0053C82.8131 70.9067 83.0117 71.8133 83.1892 72.7243ZM37.5014 94.1818C34.1146 95.4036 31.417 95.4388 29.7864 94.4781C26.3166 92.4335 24.8742 84.5399 26.8417 73.9519C27.0756 72.7007 27.3434 71.4564 27.6448 70.2204C32.1505 71.239 37.1379 71.9713 42.4682 72.413C45.5121 76.789 48.6991 80.8111 51.911 84.3331C51.2284 85.008 50.5297 85.6656 49.8154 86.3053C45.5473 90.1171 41.2706 92.8216 37.5014 94.1818ZM21.6348 63.5504C16.271 61.677 11.8413 59.2425 8.80516 56.5859C6.07664 54.1988 4.69949 51.8284 4.69949 49.9053C4.69949 45.8126 10.6709 40.5923 20.6306 37.0444C21.8393 36.6141 23.1043 36.208 24.417 35.8269C25.7937 40.4018 27.5993 45.1852 29.7782 50.0221C27.5709 54.9307 25.7396 59.7905 24.3495 64.4193C23.4378 64.1525 22.5326 63.8628 21.6348 63.5504ZM26.9534 26.5565C24.8862 15.7617 26.2591 7.61868 29.7142 5.57492C33.394 3.39814 41.5314 6.50175 50.1084 14.2834C50.6677 14.792 51.218 15.3109 51.7589 15.8398C48.5629 19.3465 45.4051 23.3387 42.3882 27.6888C37.2148 28.1787 32.2627 28.9655 27.7097 30.0197C27.4292 28.8721 27.177 27.717 26.9534 26.5565ZM74.4025 38.5284C73.3271 36.6303 72.2118 34.7562 71.0574 32.9073C74.5671 33.3608 77.9298 33.9627 81.0876 34.6986C80.1397 37.8035 78.9581 41.0494 77.5672 44.3773C76.5505 42.4063 75.4954 40.4563 74.4025 38.5284ZM55.0529 19.2714C57.2202 21.6708 59.391 24.3494 61.5261 27.2559C57.1948 27.0469 52.8564 27.046 48.525 27.2532C50.6623 24.3735 52.8516 21.6984 55.0529 19.2714ZM35.579 38.5613C34.4998 40.4737 33.4644 42.4116 32.4736 44.3734C31.1055 41.0573 29.9346 37.7965 28.9786 34.6476C32.117 33.9302 35.4638 33.3437 38.9512 32.8985C37.7839 34.7587 36.6595 36.6471 35.579 38.5613ZM39.0513 67.2538C35.4484 66.8428 32.0513 66.2866 28.9137 65.5885C29.8848 62.3835 31.0814 59.0533 32.4792 55.6661C33.4739 57.6293 34.5136 59.5684 35.5975 61.4817C36.7121 63.4486 37.8662 65.3751 39.0513 67.2538ZM55.1826 80.8774C52.9551 78.4222 50.7336 75.7059 48.5641 72.7845C50.6705 72.8688 52.8176 72.9118 55 72.9118C57.2421 72.9118 59.4584 72.8604 61.64 72.7612C59.498 75.7353 57.3354 78.4556 55.1826 80.8774ZM77.6115 55.4931C79.0818 58.9176 80.3211 62.2302 81.305 65.3804C78.1159 66.1241 74.6724 66.723 71.0441 67.1677C72.2067 65.2845 73.3326 63.3778 74.421 61.4487C75.5276 59.488 76.5914 57.5022 77.6115 55.4931ZM70.3506 59.0498C68.6843 62.0074 66.9244 64.9088 65.0736 67.7495C61.721 67.9921 58.361 68.1126 55 68.1108C51.5767 68.1108 48.247 68.0019 45.0407 67.7894C43.1416 64.9553 41.3481 62.0488 39.664 59.0761C37.9879 56.1192 36.4227 53.0983 34.971 50.0199C36.419 46.9409 37.9799 43.9185 39.6503 40.9594C41.32 37.9994 43.0988 35.1058 44.9836 32.2838C48.2548 32.0309 51.6093 31.8992 54.9996 31.8992C58.4053 31.8992 61.7646 32.0322 65.0349 32.2869C66.9007 35.1046 68.6685 37.9888 70.3351 40.9339C72.0111 43.8866 73.5926 46.8941 75.0771 49.9519C73.6078 53.0409 72.0313 56.0755 70.3506 59.0498ZM80.0443 5.43179C83.7276 7.60244 85.1602 16.3557 82.8459 27.8345C82.6981 28.5669 82.5322 29.3128 82.3518 30.0693C77.7876 28.9927 72.832 28.1924 67.6436 27.6949C64.6211 23.297 61.4891 19.2986 58.3451 15.8372C59.1691 15.0256 60.0127 14.2351 60.8751 13.4663C68.9962 6.24535 76.5862 3.39418 80.0443 5.43179ZM55 39.8688C60.4248 39.8688 64.8227 44.3624 64.8227 49.9053C64.8227 55.4483 60.4248 59.9419 55 59.9419C49.5752 59.9419 45.1773 55.4483 45.1773 49.9053C45.1773 44.3624 49.5752 39.8688 55 39.8688Z"
                                    fill="#C5EEE6" />
                            </svg>
                        </div>
                        <div className="in-box b2">
                            <div className="fix2 fix">
                                <svg xmlns="http://www.w3.org/2000/svg" width="106" height="106" viewBox="0 0 106 106"
                                    fill="none">
                                    <path
                                        d="M71.1818 69.6667C71.1818 64.4048 56.9364 60.1429 39.3636 60.1429M71.1818 69.6667C71.1818 74.9286 56.9364 79.1905 39.3636 79.1905C21.7909 79.1905 7.54545 74.9286 7.54545 69.6667M71.1818 69.6667V93.1762C71.1818 98.6 56.9364 103 39.3636 103C21.7909 103 7.54545 98.6048 7.54545 93.1762V69.6667M71.1818 69.6667C88.5636 69.6667 103 64.9667 103 60.1429V12.5238M39.3636 60.1429C21.7909 60.1429 7.54545 64.4048 7.54545 69.6667M39.3636 60.1429C19.2818 60.1429 3 55.4429 3 50.619V26.8095M39.3636 17.2857C19.2818 17.2857 3 21.5476 3 26.8095M3 26.8095C3 32.0714 19.2818 36.3333 39.3636 36.3333C39.3636 41.1571 54.15 45.8571 71.5318 45.8571C88.9091 45.8571 103 41.1571 103 36.3333M103 12.5238C103 7.2619 88.9091 3 71.5318 3C54.15 3 40.0636 7.2619 40.0636 12.5238M103 12.5238C103 17.7857 88.9091 22.0476 71.5318 22.0476C54.1545 22.0476 40.0636 17.7857 40.0636 12.5238M40.0636 12.5238V60.9333"
                                        stroke="#C5EEE6" strokeWidth="5" />
                                </svg>
                            </div>
                        </div>
                        <div className="in-box b3">
                            <div className="fix3 fix">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
                                    <path
                                        d="M49.9996 3.32776L50.913 0.127575C50.316 -0.0425251 49.6833 -0.0425251 49.0863 0.127575L49.9996 3.32776ZM3.33295 16.6619L2.41962 13.4617C1.66299 13.6774 1.00704 14.1537 0.567817 14.8065C0.128592 15.4593 -0.0655953 16.2464 0.0196135 17.0286L3.33295 16.6619ZM9.99962 76.6654L6.68629 77.0321C6.74751 77.585 6.94612 78.1138 7.26401 78.5703C7.5819 79.0267 8.00896 79.3964 8.50629 79.6456L9.99962 76.6654ZM49.9996 96.6666L48.5063 99.6468C48.9698 99.8791 49.4812 100 49.9996 100C50.5181 100 51.0294 99.8791 51.493 99.6468L49.9996 96.6666ZM89.9997 76.6654L91.493 79.6456C91.9903 79.3964 92.4174 79.0267 92.7353 78.5703C93.0532 78.1138 93.2518 77.585 93.313 77.0321L89.9997 76.6654ZM96.6663 16.6619L99.9797 17.0286C100.067 16.2453 99.8732 15.4566 99.4338 14.8024C98.9944 14.1483 98.3375 13.6709 97.5797 13.455L96.6663 16.6619ZM49.9996 19.9954L53.053 18.662L49.9996 11.6816L46.9463 18.662L49.9996 19.9954ZM49.0863 0.127575L2.41962 13.4617L4.24628 19.8621L50.913 6.52795L49.0863 0.127575ZM0.0196135 17.0219L6.68629 77.0254L13.313 76.2921L6.64628 16.2885L0.0196135 17.0219ZM8.50629 79.6456L48.5063 99.6468L51.493 93.6797L11.493 73.6786L8.50629 79.6456ZM51.493 99.6468L91.493 79.6456L88.5063 73.6786L48.5063 93.6797L51.493 99.6468ZM93.313 77.0254L99.9797 17.0219L93.353 16.2885L86.6863 76.2921L93.313 77.0254ZM97.5797 13.4484L50.913 0.114241L49.0863 6.52795L95.753 19.8621L97.5797 13.4484ZM29.7196 74.6653L53.053 21.3288L46.9463 18.662L23.613 71.9985L29.7196 74.6653ZM46.9463 21.3288L70.2797 74.6653L76.3863 71.9985L53.053 18.662L46.9463 21.3288ZM33.333 59.9978H66.6663V53.3307H33.333V59.9978Z"
                                        fill="#C5EEE6" />
                                </svg>
                            </div>

                        </div>
                        <div className="in-box b4">
                            <div className="fix4 fix">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 148 100" fill="none">
                                    <path
                                        d="M11.1681 30.2731C10.8782 30.2731 10.8104 30.0166 10.9522 29.6151L12.4692 26.102C12.6111 25.7117 12.9687 25.4551 13.2586 25.4551H38.9859C39.2696 25.4551 39.3436 25.8455 39.2017 26.2358L37.9746 29.6151C37.8327 30.0166 37.4689 30.3958 37.2531 30.3958L11.1681 30.2731ZM0.290063 42.2623C0.000230002 42.2623 -0.07377 42.0058 0.07423 41.6154L1.58506 38.0912C1.7269 37.7008 2.09073 37.4443 2.38056 37.4443H35.2366C35.5264 37.4443 35.6682 37.8347 35.5942 38.225L35.0207 41.3478C34.9467 41.872 34.6631 42.1285 34.3732 42.1285L0.290063 42.2623ZM17.7294 54.2515C17.4396 54.2515 17.3656 53.8611 17.5136 53.4708L18.5187 50.2142C18.6606 49.8239 18.9504 49.4335 19.2402 49.4335H33.6517C33.9416 49.4335 34.0834 49.8239 34.0834 50.348L33.9416 53.4708C33.9416 53.995 33.6517 54.3853 33.4359 54.3853L17.7294 54.2515ZM92.5249 27.931C87.9862 30.0166 84.8844 31.578 80.4197 33.6635C79.3344 34.1766 79.2666 34.3104 78.3231 32.3587C77.2501 30.1393 76.4546 28.7117 74.9437 27.4069C70.3989 23.3696 66.0021 24.5406 61.9012 29.3586C56.9987 35.0911 54.4766 43.5672 54.5506 54.1177C54.6184 64.5455 58.5836 73.1442 64.2754 74.5829C69.1779 75.754 73.2787 72.6312 76.5286 65.9953C77.1761 64.5455 77.7496 62.9841 78.4711 61.155H64.5652C63.0544 61.155 62.6906 59.4598 63.1962 57.2516C64.1336 53.2143 65.8602 46.4334 66.8716 43.043C67.026 42.4149 67.2789 41.8825 67.5989 41.5118C67.919 41.1411 68.2922 40.9483 68.6722 40.9574H94.8991C94.7572 44.4817 94.7572 47.9948 94.4674 51.5191C93.7209 60.7973 91.6887 69.5832 88.5597 77.0588C83.3736 89.4384 76.5964 97.1338 68.0247 99.2082C60.9639 100.903 54.4026 98.4275 48.6429 90.6206C43.3087 83.3155 40.2809 73.6684 39.4916 61.6792C38.5542 47.4706 40.8606 34.7008 45.6151 23.4923C50.7334 11.3804 57.5044 3.68501 65.7924 0.963738C72.5634 -1.26681 79.0507 0.183044 84.8844 7.33194C88.7077 11.9046 91.4396 18.1501 93.2464 25.7116C93.6781 26.8827 93.3882 27.5407 92.5249 27.9422M116.378 100C109.816 99.7323 103.835 96.3419 98.7902 88.5238C94.5938 82.1276 91.8277 73.1884 91.0079 63.3744C89.7129 48.6528 91.9452 35.6153 96.8477 24.0164C102.108 11.5031 108.447 4.98987 117.025 2.2686C124.376 -0.0734697 131.295 1.20909 137.56 8.90448C143.252 15.9307 146.785 25.4551 147.723 37.9574C148.944 55.5564 146.138 69.8876 139.435 82.1445C134.68 90.8771 128.84 96.3419 122.137 98.8178C120.195 99.487 118.252 99.5985 116.378 100ZM133.521 47.3591C133.453 45.6527 133.453 44.3479 133.311 43.043C132.016 30.1393 125.455 22.8565 118.61 25.7116C111.907 28.4441 107.584 36.1395 105.999 48.3852C104.704 58.5564 107.442 68.8504 112.628 73.0327C116.593 76.1555 120.552 75.754 124.376 72.252C130.068 66.8987 133.163 58.5565 133.527 47.348L133.521 47.3591Z"
                                        fill="#C5EEE6" fillOpacity="0.75" />
                                </svg>
                            </div>
                        </div>
                        <div className="in-box b5">
                            <div className="fix5 fix">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M7.32 7.32C0 14.65 0 26.43 0 50C0 73.57 0 85.355 7.32 92.675C14.65 100 26.43 100 50 100C73.57 100 85.355 100 92.675 92.675C100 85.36 100 73.57 100 50C100 26.43 100 14.645 92.675 7.32C85.36 0 73.57 0 50 0C26.43 0 14.645 0 7.32 7.32ZM22.12 37.6C22.7567 36.8364 23.6705 36.3569 24.6606 36.2669C25.6507 36.1769 26.6361 36.4838 27.4 37.12L28.785 38.27C31.81 40.79 34.385 42.935 36.165 44.91C38.06 47.01 39.535 49.415 39.535 52.5C39.535 55.585 38.06 57.995 36.165 60.09C34.385 62.065 31.81 64.21 28.785 66.73L27.4 67.88C27.0237 68.2092 26.5853 68.4599 26.1106 68.6172C25.636 68.7745 25.1347 68.8353 24.6362 68.796C24.1377 68.7567 23.6521 68.6181 23.208 68.3884C22.7638 68.1587 22.3701 67.8424 22.05 67.4583C21.7299 67.0742 21.4899 66.6299 21.344 66.1516C21.1981 65.6733 21.1494 65.1707 21.2006 64.6733C21.2518 64.1759 21.4021 63.6938 21.6424 63.2553C21.8827 62.8168 22.2083 62.4308 22.6 62.12L23.77 61.145C27.065 58.395 29.22 56.595 30.6 55.065C31.91 53.615 32.035 52.93 32.035 52.5C32.035 52.07 31.91 51.39 30.6 49.935C29.215 48.405 27.065 46.6 23.77 43.855L22.6 42.88C21.8364 42.2433 21.3569 41.3295 21.2669 40.3394C21.1769 39.3493 21.4838 38.3639 22.12 37.6ZM78.75 65C78.75 65.9946 78.3549 66.9484 77.6517 67.6516C76.9484 68.3549 75.9946 68.75 75 68.75H50C49.0054 68.75 48.0516 68.3549 47.3484 67.6516C46.6451 66.9484 46.25 65.9946 46.25 65C46.25 64.0054 46.6451 63.0516 47.3484 62.3484C48.0516 61.6451 49.0054 61.25 50 61.25H75C75.9946 61.25 76.9484 61.6451 77.6517 62.3484C78.3549 63.0516 78.75 64.0054 78.75 65Z"
                                        fill="#C5EEE6" />
                                </svg>
                            </div>
                        </div>
                        <div className="in-box b6">
                            <div className="fix6 fix">
                                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="90" viewBox="0 0 80 90"
                                    fill="none">
                                    <path
                                        d="M77.4398 69.4864L53.3355 37.5268V6.42857H60.0025V0H20.0009V6.42857H26.6678V37.5268L2.56353 69.4864C1.10958 71.4132 0.236809 73.6903 0.0417814 76.0658C-0.153246 78.4412 0.337076 80.8223 1.45849 82.9457C2.57991 85.0691 4.2887 86.8519 6.39578 88.097C8.50286 89.342 10.9261 90.0006 13.3973 90H66.6027C69.0739 90.0006 71.4971 89.342 73.6042 88.097C75.7113 86.8519 77.4201 85.0691 78.5415 82.9457C79.6629 80.8223 80.1533 78.4412 79.9582 76.0658C79.7632 73.6903 78.8904 71.4132 77.4365 69.4864H77.4398ZM33.3347 39.6161V6.42857H46.6686V39.6161L55.5789 51.4286H24.4244L33.3347 39.6161ZM66.606 83.5714H13.4006C12.1599 83.5701 10.9436 83.2383 9.88611 82.6126C8.82859 81.9869 7.97093 81.0916 7.40779 80.0255C6.84465 78.9594 6.59793 77.7641 6.69486 76.5713C6.79178 75.3786 7.2286 74.2349 7.95707 73.2664L19.5775 57.8571H60.4258L72.0496 73.2664C72.7781 74.2349 73.2149 75.3786 73.3118 76.5713C73.4087 77.7641 73.162 78.9594 72.5989 80.0255C72.0357 81.0916 71.1781 81.9869 70.1206 82.6126C69.063 83.2383 67.8468 83.5701 66.606 83.5714Z"
                                        fill="#C5EEE6" />
                                </svg>
                            </div>
                        </div>
                        <div className="in-box b7">
                            <div className="fix7 fix">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"
                                    fill="none">
                                    <path
                                        d="M54.6876 5.17241V13.7931H60.8439C62.7439 13.7931 64.6127 14.3448 66.2627 15.3862L74.3253 20.4621C74.5628 20.6138 74.8253 20.6897 75.1003 20.6897H89.063C90.3062 20.6897 91.4985 21.2346 92.3776 22.2046C93.2566 23.1746 93.7505 24.4903 93.7505 25.8621C93.7505 27.2339 93.2566 28.5495 92.3776 29.5195C91.4985 30.4895 90.3062 31.0345 89.063 31.0345H86.3942L99.5881 63.3931C99.978 64.3504 100.095 65.416 99.9228 66.4482C99.7509 67.4805 99.2984 68.4306 98.6256 69.1724L95.313 65.5172L98.6193 69.1793L98.6131 69.1931L98.6006 69.2069L98.5631 69.2483L98.5256 69.2828L98.4631 69.3517L98.1818 69.6276C96.8693 70.8414 95.4255 71.8828 93.8943 72.731C90.9755 74.3448 86.7504 75.8621 81.2504 75.8621C76.8723 75.9191 72.5426 74.8469 68.6065 72.731C67.0732 71.8832 65.6344 70.8417 64.3189 69.6276L64.0377 69.3517L63.9377 69.2483L63.9002 69.2069L63.8752 69.1793V69.1724C63.2023 68.4306 62.7499 67.4805 62.5779 66.4482C62.406 65.416 62.5228 64.3504 62.9126 63.3931L76.1128 31.0345H75.1003C73.194 31.0345 71.3252 30.4897 69.6752 29.4414L61.6126 24.3655C61.3772 24.215 61.1097 24.1365 60.8376 24.1379H54.6876V89.6552H70.3127C71.556 89.6552 72.7482 90.2001 73.6273 91.1701C74.5064 92.1402 75.0003 93.4558 75.0003 94.8276C75.0003 96.1994 74.5064 97.515 73.6273 98.485C72.7482 99.4551 71.556 100 70.3127 100H29.6873C28.444 100 27.2517 99.4551 26.3727 98.485C25.4936 97.515 24.9997 96.1994 24.9997 94.8276C24.9997 93.4558 25.4936 92.1402 26.3727 91.1701C27.2517 90.2001 28.444 89.6552 29.6873 89.6552H45.3124V24.1379H39.1624C38.8903 24.1365 38.6228 24.215 38.3874 24.3655L30.331 29.4483C28.6748 30.4828 26.806 31.0345 24.8997 31.0345H23.8872L37.0873 63.3931C37.4772 64.3504 37.594 65.416 37.4221 66.4482C37.2501 67.4805 36.7977 68.4306 36.1248 69.1724L32.8123 65.5172L36.1186 69.1793L36.1123 69.1931L36.0998 69.2069L36.0623 69.2483L35.9623 69.3517L35.6811 69.6276C34.3686 70.8414 32.9248 71.8828 31.3935 72.731C28.4747 74.3448 24.2497 75.8621 18.7496 75.8621C14.3715 75.9191 10.0419 74.8469 6.10574 72.731C4.57249 71.8832 3.13367 70.8417 1.81819 69.6276L1.53693 69.3517L1.43693 69.2483L1.39943 69.2069L1.37443 69.1793V69.1724C0.701561 68.4306 0.249123 67.4805 0.0772065 66.4482C-0.0947102 65.416 0.0220293 64.3504 0.411921 63.3931L13.6121 31.0345H10.937C9.69383 31.0345 8.50153 30.4895 7.62244 29.5195C6.74336 28.5495 6.24949 27.2339 6.24949 25.8621C6.24949 24.4903 6.74336 23.1746 7.62244 22.2046C8.50153 21.2346 9.69383 20.6897 10.937 20.6897H24.8997C25.1737 20.691 25.4432 20.6125 25.681 20.4621L33.7311 15.3793C35.3873 14.3448 37.2561 13.7931 39.1624 13.7931H45.3124V5.17241C45.3124 3.8006 45.8063 2.48498 46.6854 1.51497C47.5645 0.544949 48.7568 0 50 0C51.2432 0 52.4355 0.544949 53.3146 1.51497C54.1937 2.48498 54.6876 3.8006 54.6876 5.17241ZM73.094 63.6345C74.8753 64.5655 77.5816 65.5172 81.2504 65.5172C84.9192 65.5172 87.6254 64.5655 89.4067 63.6345L81.2504 43.6345L73.094 63.6345ZM10.5933 63.6345C12.3746 64.5655 15.0808 65.5172 18.7496 65.5172C22.4184 65.5172 25.1247 64.5655 26.906 63.6345L18.7496 43.6345L10.5933 63.6345Z"
                                        fill="#C5EEE6" />
                                </svg>
                            </div>
                        </div>
                        <div className="in-box b8">
                            <div className="fix8 fix">
                                <svg xmlns="http://www.w3.org/2000/svg" width="113" height="93" viewBox="0 0 113 93"
                                    fill="none">
                                    <path
                                        d="M7.0625 13.7125C13.3128 11.0865 22.2751 8.25481 30.9903 7.37477C40.3834 6.42377 48.3499 7.82189 52.9688 12.7118V81.8799C46.3653 78.1184 37.9963 77.6003 30.2769 78.381C21.9432 79.2327 13.5388 81.6528 7.0625 84.1367V13.7125ZM60.0312 12.7118C64.6501 7.82189 72.6166 6.42377 82.0098 7.37477C90.7249 8.25481 99.6872 11.0865 105.938 13.7125V84.1367C99.4541 81.6528 91.0568 79.2256 82.7231 78.3881C74.9967 77.6003 66.6347 78.1113 60.0312 81.8799V12.7118ZM56.5 6.29602C49.5434 0.284797 39.4582 -0.609434 30.2769 0.313186C19.5843 1.39904 8.79281 5.08242 2.06931 8.15545C1.4524 8.4374 0.929251 8.8918 0.562323 9.46439C0.195396 10.037 0.000187661 10.7036 0 11.3846L0 89.4524C0.000163582 90.0462 0.148575 90.6304 0.43164 91.1515C0.714704 91.6727 1.12337 92.1141 1.62021 92.4355C2.11705 92.7568 2.68618 92.9477 3.27547 92.9907C3.86476 93.0337 4.45536 92.9274 4.99319 92.6816C11.2223 89.8428 21.2581 86.4291 30.9832 85.4426C40.9343 84.4348 49.2751 86.06 53.7456 91.6667C54.0765 92.0812 54.4958 92.4157 54.9725 92.6455C55.4492 92.8753 55.9712 92.9947 56.5 92.9947C57.0288 92.9947 57.5508 92.8753 58.0275 92.6455C58.5042 92.4157 58.9235 92.0812 59.2544 91.6667C63.7249 86.06 72.0658 84.4348 82.0098 85.4426C91.7419 86.4291 101.785 89.8428 108.007 92.6816C108.545 92.9274 109.135 93.0337 109.725 92.9907C110.314 92.9477 110.883 92.7568 111.38 92.4355C111.877 92.1141 112.285 91.6727 112.568 91.1515C112.851 90.6304 113 90.0462 113 89.4524V11.3846C113 10.7036 112.805 10.037 112.438 9.46439C112.071 8.8918 111.548 8.4374 110.931 8.15545C104.207 5.08242 93.4157 1.39904 82.7231 0.313186C73.5418 -0.616531 63.4566 0.284797 56.5 6.29602Z"
                                        fill="#fff" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <h4 className="tag-line">
                        Unlocking Knowledge,
                        Empowering Success.
                    </h4>
                </div>
            </div>

            <div className="login-right">
                <div className="ll-header-1">
                    <h2 className="ll-heading-1">
                        AISC Learning Management System
                    </h2>
                </div>


                <div className="login-form">
                    <div className="inside-login">
                        <h2>LOGIN</h2>
                        <div className="linput-box">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" placeholder="Enter email..."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                        </div>
                        <div className="linput-box">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Enter password..."
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                        </div>

                        <div className="lbtn-fp">
                            <button className=""
                                onClick={() => {
                                    loginUser(email, password)
                                }}
                            >
                                LOGIN
                            </button>

                            <a href="">
                                <small>
                                    Forget Password ?
                                </small>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Login