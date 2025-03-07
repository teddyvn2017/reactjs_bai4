import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import AlertComponent from '../components/AlertComponent'; 
import SuccessNotification from '../components/SuccessNotification';

//npm install axios

const RegisterPage = () => {
    //const [name, setName] = useState('');
    //const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    //const [termsAccepted, setTermsAccepted] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [savedSuccessfully, setSavedSuccessfully] = useState(false);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== retypePassword) {
           
            setAlertMessage("Passwords don't match!");
            setShowAlert(true);
        }

        // if (!termsAccepted) {
        //     // alert("Please accept the Terms and Conditions!");
        //     // return;

        //     setAlertMessage("Please accept the Terms and Conditions!");
        //     setShowAlert(true);
        //     return;
        // }

        try {
            //gọi API
            const response = await axios.post('/api/dang-ky', { username, password });
           
            if (response.data === true) {              
                // Xử lý khi API request thành công, hiển thị thông báo
                setSavedSuccessfully(true);
               
            } else {
                console.log('API request failed');
                // Xử lý khi API request không thành công
            }
            

            // Xử lý phản hồi từ API, ví dụ: thông báo người dùng đã được tạo thành công
        } catch (error) {
            console.error('Error:', error);
            // Xử lý lỗi nếu có
        }

    }

  return (
    <div><section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">       
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Create and account
                </h1>

                {/* Sử dụng component thông báo  */}
                {showAlert && (
                    <AlertComponent message={alertMessage} onClose={() => setShowAlert(false)} /> 
                )}

                {savedSuccessfully && <SuccessNotification message=".Dữ liệu đã được lưu thành công!" />}


                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input type="email" name="username"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full focus:border-mau_nen_primary focus:outline-none"
                                placeholder="name@company.com" required="" onChange={(e) => setUsername(e.target.value)}                                    
                            />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full  focus:border-mau_nen_primary focus:outline-none" 
                        required="" onChange={(e) => setPassword(e.target.value)}     />
                    </div>
                    <div>
                        <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                        <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full focus:border-mau_nen_primary focus:outline-none" 
                        required="" onChange={(e) => setRetypePassword(e.target.value)}   />
                    </div>
                  
                    <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account? <a href="/dang-nhap" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                    </p>

                    <button type="submit" className='text-mau_trang bg-mau_nen_primary  py-2 text-[.75rem] rounded w-full'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  </section></div>
  )
}

export default RegisterPage