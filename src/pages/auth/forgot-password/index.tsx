import {useNavigate} from "react-router-dom";

const ForgotPassword = () => {
    const navigate = useNavigate()
    return (
        <div className='flex h-screen justify-center items-center '>
            <div className='border rounded-lg h-7/12 xl:w-1/4 lg:w-2/4 sm:w-3/4 md:w-3/4'>
                <div className='flex flex-col mx-8 my-12 '>
                    <div className='justify-center items-center flex'>
                        <b>Logo</b>
                    </div>
                    <form action="">
                        <div className='flex flex-col  my-2'>
                            <div className='flex flex-col '>
                                <label htmlFor="">Mail</label>
                                <input className='border p-2 rounded-lg my-2' type="email"/>
                            </div>
                            <button type='submit' disabled={true}
                                    className={`flex justify-center text-white w-full p-2 border rounded-lg items-center my-5 disabled:bg-opacity-50 bg-green-700 `}>
                                Onay Kodu Gönder
                            </button>
                            <div className='flex justify-center items-center'>
                                <button type='button' className='rounded-full border p-2'  onClick={() => navigate(-1)}>
                                    <img src="/assets/svg/arrow-left.svg" width={25} alt=""/>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
