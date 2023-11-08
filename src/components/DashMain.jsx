import React from 'react'
import DashTable from './DashTable'
import MainDashCards from '../components/MainDashCards'
import { Pie } from 'react-chartjs-2';
import { useState } from 'react';
import { useEffect } from 'react';

import { Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function DashMain() {

// display UsersCards

const [users, setUsers] = useState([]);


const fetchUsers = () => {
  axios({
    method:"GET",
    url:"https://holiday-planner-4lnj.onrender.com/api/v1/auth/users",
    headers:{
      Authorization: `Bearer ${token}`,
    },
  }).then((response) =>{
    setUsers(response.data);
    console.log(response)
  })
  .catch((error) =>{
    console.log(error)
    alert("Error showed up!!!");
  })
};

useEffect(() =>{
  fetchUsers()
}, []);



// 

// display ToursCards

const [tours, setTours] = useState([]);


let token = localStorage.getItem("token");

const fetchTours = () => {
  axios({
    method:"GET",
    url:"https://holiday-planner-4lnj.onrender.com/api/v1/tour/",
    headers:{
      Authorization: `Bearer ${token}`,
    },
  }).then((response) =>{
    setTours(response.data);
    console.log(response)
  })
  .catch((error) =>{
    console.log(error)
    alert("Error showed up!!!");
  })
};

useEffect(() =>{
  fetchTours()
}, []);

// 

// display BookingCards

const [fetch, setIsFetch] = useState();
const [booking, setBooking] = useState([]);


const fetchBooking = () => {
  setIsFetch(true);
  axios({
    method:"GET",
    url:"https://holiday-planner-4lnj.onrender.com/api/v1/booking/view",
    headers:{
      Authorization: `Bearer ${token}`,
    },
  }).then((response) =>{
    setBooking(response.data);
    console.log(response)
  })
  .catch((error) =>{
    console.log(error)
    alert("Error showed up!!!");
    toast.error(error.message);
  });
};

useEffect(() =>{
  fetchBooking()
}, []);


// 
  const [year, setYear] = useState([]);
  // const [count, setCount] = useState("");


  const fetchYear = () =>{
    axios({
      method: "GET",
      url:'https://holiday-planner-4lnj.onrender.com/api/v1/count?year=2023',
    }).then((response) =>{
      setYear(response.data)
      // setCount(response.data)
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() =>{
    fetchYear();
  }, [])
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Rating Of Web-Activity',
      },
    },
    maintaninAspectRatio: false
  };
  // function totalTour(tour){
  //   result = sum(count);
  // }
  // let allTours = count;
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Rate Of Users',
        // data: [80, 33.3, 63, 43, 77, 29, 54, 65, 90, 5, 21,69],
        data: year.map((umwaka) => umwaka.count),
        backgroundColor: '#C29D59',
      },
    ],
  }
  const pieData = {
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Rate Of Tours',
        data: [19, 29, 30, 50, 40, 37, 21, 91, 43, 65, 87, 73],
        backgroundColor: [
          'rgba(250, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(250, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }
  return (
    <>
    <div className="dashMain">
        {/* <h1>Welcome To The DashBoard...</h1> */}
    <div className="cardsContainer">
      <MainDashCards title='users' amount= {users.length} />
      <MainDashCards title='tours' amount= {tours.length} />
      <MainDashCards title='booking' amount= {booking.length} />
    </div>
        <div className="chartContainer">
          <div className="barChart">
            <Bar data={data} options={options} className='chart'/>;
          </div>
          <div className="pieChart">
            <Pie data={pieData} className='chart pie'/>;
          </div>
        </div>
    </div>
    </>
  )
}
