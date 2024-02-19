const Login = () => {
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
                            <div className='flex flex-col'>
                                <label htmlFor="">Parola</label>
                                <input className='border p-2 rounded-lg my-2' type="password"/>
                            </div>
                            <button type='submit' disabled={true}
                                    className={`flex justify-center text-white w-full p-2 border rounded-lg items-center my-5 disabled:bg-opacity-50 bg-green-700 `}>
                                Giriş Yap
                            </button>
                            <div className='text-sm my-2' >
                                Parolanızı mı unuttunuz? <a className='font-semibold' href="/auth/forgot-password">Şifremi Unutttum</a>
                            </div>
                            <div className='text-sm my-2'>
                                Hesabınız yok mu ? <a className='font-semibold' href="/auth/register">Hesap Oluştur</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
