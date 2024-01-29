import logo from '../assets/logo.svg'
import dash from '../assets/dash.svg'
import Document from '../assets/Document.svg'
import Notification from '../assets/Notification.svg'
import Setting from '../assets/Setting.svg'
import Ticket from '../assets/Ticket.svg'
import Calendar from '../assets/Calendar.svg'
import Chart from '../assets/Chart.svg'
import Excel from '../assets/Excel.svg'
import Icon  from '../assets/Icon.svg'


function Second() {
  return (
    <div className="flex h-screen">
      {/* Left side with 20% width */}
      <div className="w-1/5 bg-white p-5">
      <div className='absolute top-10 left-10 flex'>
        <img src={logo} alt="" className='' />
        <h1 className="text-2xl font-bold ml-2 ">BASE</h1>
        </div>
        
        <div className='mt-20 ml-3'>
            <div className='flex '>
                 <img src={dash} alt="" />
                 <p className='ml-2 nunito'> Dashboard</p>
            </div>
            <div className='flex my-9'>
                <img src={Chart} alt="" />
                <p className='ml-2  upload-color nunito'>Upload</p>
            </div>

            <div className='flex my-9'>
                  <img src={Ticket} alt="" />
                <p className='ml-2 nunito'>Invoice</p>
            </div>
            <div className='flex my-9'>
                <img src={Document} alt="" />   
                <p className='ml-2 nunito'>Schedule</p>
            </div>
            <div className='flex my-9'>
                 <img src={Calendar} alt="" />   
                <p className='ml-2 nunito'>Calendar</p>
            </div>
            <div className='flex my-9'>
                  <img src={Notification} alt="" />
                <p className='ml-2 nunito'>notification</p>
            </div>
            <div className='flex my-9'>
            <img src={Setting} alt="" />
                <p className='ml-2 nunito'>Setings</p>
            </div>
            
        </div>



      </div>

      {/* Right side with 80% width */}
      <div className="w-4/5 p-5 ">
        <h1 className='figtree text-3xl font-bold'>Upload CSV</h1>
        <div className='px-60 mt-28  '>
        <div className='bg-white pt-24 pb-5'>
            <img src={Excel} alt=""  className='pl-60'/>
            <p className='pl-20 pt-4 text-xl'>
                Drop your excel sheet here or <span className='upload-color'>browse</span>
            </p>
            <div className='button-color ml-1 mr-1 mt-20 rounded-xl text-white font-bold mons text-xl py-5 mx-20 flex' >
                <img src={Icon} alt="" className='ml-12' />
            <button className=''>
              Upload
            </button>
            </div>

            
            
        </div>

        
        </div>
      </div>
    </div>
  );
}

export default Second;
