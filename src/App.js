import './App.css';
import profileImg from '../src/assets/png/profile.png'
import gTick from '../src/assets/png/Icon.png'
import viewIcon from '../src/assets/png/viewIcon.png'
import house from '../src/assets/png/house.png'
import gate from '../src/assets/png/gate.png'
import logo2 from '../src/assets/png/logo2.png'
import Navbar from './components/Navbar';

function App() {

  const profileDetails = {
    firstName: 'Victor',
    lastName: 'Adebowale',
    timeStamp: '01/04/2023 09:22am',
    country: 'Nigeria',
    phoneNumber: '0902 234 5678'
  }
  const addressDetails = {
    address: '25 Abule-Oja road, Akoka, Yaba',
    state: 'Lagos',
    lga: 'Somolu',
    landmark: 'Univeristy of Lagos',
    mapUrl: '0902 234 5678',
    electricBillUrl: ''
  }
  const verificationList = [
    'Valid address',
    'Address building',
    'Customer resides at the declared address'
  ]
  return (
    <div className="App">
      <Navbar />
      <div className='Wrapper'>
        <div className='Container'>
          <div id='row1'>
            <div className='White-container white-card1'>
              <div id='row3'>
                <p className='card-title'>CUSTOMER INFORMATION</p>
              </div>
              <div id='row4'>
                <div id='profile-container'>
                  <img src={profileImg} id='profileImg' alt='profile' />
                  <div>
                    <p className='bold-text1 text-align-center'>12345H</p>
                    <p className='text'>CUSTOMER NUMBER</p>
                  </div>
                </div>
                <div id='profile-details-container'>
                  <div id='pd-left'>
                    <div>
                      <p className='bold-text2'>{profileDetails.firstName}</p>
                      <p className='text'>FIRST NAME</p>
                    </div>
                    <div>
                      <p className='bold-text2'>{profileDetails.country}</p>
                      <p className='text'>COUNTRY</p>
                    </div>
                    <div>
                      <p className='bold-text2'>{profileDetails.lastName}</p>
                      <p className='text'>LAST NAME</p>
                    </div>
                    <div>
                      <p className='bold-text2'>{profileDetails.phoneNumber}</p>
                      <p className='text'>PHONE NUMBER</p>
                    </div>
                    <div>
                      <p className='bold-text2'>{profileDetails.timeStamp}</p>
                      <p className='text'>VERIFICATION TIME STAMP</p>
                    </div>
                  </div>
                  <div>

                  </div>
                </div>
              </div>
            </div>
            <div className='White-container white-card1'>
              <div id='row5'>
                <p className='card-title'>VERIFICATION STATUS</p>
                <div id='g-badge'>
                  <p>Verified</p>
                </div>
              </div>
              <div id='row6'>
                {verificationList.map((item, index) => {
                  return <div className='verification-list-container'>
                    <p className='verification-item'>{item}</p>
                    <img src={gTick} alt='green-tick' />
                  </div>
                })}
              </div>
            </div>
          </div>
          <div id='row2'>
            <div className='White-container white-card2'>
              <div id='row7'>
                <p className='card-title'>ADDRESS INFORMATION</p>
              </div>
              <div id='row8'>
                <div>
                  <p className='bold-text2'>{addressDetails.address}</p>
                  <p className='text'>CURRENT ADDRESS</p>
                </div>
                <div>
                  <p className='bold-text2'>{addressDetails.state}</p>
                  <p className='text'>STATE</p>
                </div>
                <div>
                  <p className='bold-text2'>{addressDetails.lga}</p>
                  <p className='text'>LGA</p>
                </div>
                <div>
                  <p className='bold-text2'>{addressDetails.landmark}</p>
                  <p className='text'>NEARBY LANDMARK</p>
                </div>
                <div>
                  <div className='Map-container'>
                    <p>View Map URL</p>
                    <img src={viewIcon} alt='eye icon'/>
                  </div>
                  <p className='text'>MAP URL</p>
                </div>
                <div>
                  <div className='Map-container'>
                    <p>View Map URL</p>
                    <img src={viewIcon} alt='eye icon' />
                  </div>
                  <p className='text'>ELECTRICITY BILL URL</p>
                </div>
              </div>
            </div>
            <div className='White-container white-card2'>
              <div id='row9'>
                <div id='row10'>
                  <p className='card-title'>BUILDING IMAGE</p>
                  <img src={house} alt='a house' />
                </div>
                <div id='row11'>
                  <p className='card-title'>NEARBY LANDMARK</p>
                  <img src={gate} alt='unilag gate' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='Wrapper'>
          <div className='White-container last-card'>
            <div id='row12'>
              <p className='card-title'>CERTIFICATION</p>
              <div className='Certification-container'>
                <div id='certification-left'>
                  <p>I<span id='underline'></span>hereby certify that the information presented for the above named customer for address verification is true and accurate.</p>
                </div>
                <div id='certification-right'>
                  <div id='signature-container'>
                    <span id='underline2'></span>
                    <p className='text'>SIGNATURE & DATE</p>
                  </div>
                  <div>
                    <img src={logo2} alt='Certificate logo' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
