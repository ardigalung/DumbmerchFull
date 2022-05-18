import React from 'react'
import img1 from '../assets/jam.jpg'
import img2 from '../assets/handspree.jpg'
import '../components/Css/ReturnProduct.css'

const ReturnProduct = () => {
    return (
        <div>
            <div className='navbar-return'>
                <div className='back-card'>
                    <h4 style={{ textAlign: 'center' }}>Pengembalian barang</h4>
                    <p >Bukti Kerusakan</p>
                    <button className='bukti'>Upload</button>
                    <div>
                        <img src={img1} alt='g1'></img>
                        <img src={img2} alt='g1'></img>
                    </div>
                    <p className='desp'>Deskripsi Kerusakan</p>
                    <textarea placeholder='keluhan...'></textarea>
                    <button className='btn2'>Kirim</button>
                    <hr></hr>

                    <div>
                        <h4 style={{ textAlign: 'center' }}>Status Pengembalian</h4>
                        <p>Sedang diproses</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReturnProduct