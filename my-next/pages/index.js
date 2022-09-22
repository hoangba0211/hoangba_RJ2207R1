import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from './layout'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'



export async function getStaticProps(context) {
  // fetch dữ liệu từ file system, API, DB,...
    const res = await axios.get('https://openweathermap.org/api/data/2.5/weather?q=hanoi&units=metric&appid=3552347ac562cebe4b37d842608b3d7a')
    // Giá trị của `props` sẽ được truyền tới component `Home`
    console.log(res);
    return {
      props: {data: res.data}
  }
}

export default function Home({data}) {

  
  return (
      <div>
          <table className='table table-striped'>
              <thead>
                  <tr>
                      <th>Date</th>
                      <th>Confirmed</th>
                      <th>Active</th>
                      <th>Recovered</th>
                      <th>Deaths</th>
                  </tr>
              </thead>
              <tbody>
                {
                  data.map((value,index)=>{
                    return (
                      <tr key={index}>
                          <td>{value.Date.slice(0,10)}</td>
                          <td>{value.Confirmed}</td>
                          <td>{value.Active}</td>
                          <td>{value.Recovered}</td>
                          <td>{value.Deaths}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
          </table>
      </div>
  )
}
