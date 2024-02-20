import Sidebar from "../menu-item/sidebar";

export const MainLayout = () => {
    return (
        <div className='flex flex-row'>
            <div className=''>
                <Sidebar/>
            </div>
            <div>
                main
            </div>
        </div>
    )
}
