import styles from "./CardDashboard.module.css";
import React from 'react';

function CardDashboard() {
    return(
        <div className={`p-5 ${styles['container']}`}>
        <div className={`p-4 ${styles['card']}`}>
            <h2 className={`${styles['title']}`}>Selamat Datang Admin</h2>
            <div className={`w-100 ${styles['welcome__description']}`}>
                <p>Selamat datang di dashboard Gearent. Dashboard ini digunakan untuk monitoring produk atau barang sewaan pada toko-toko yang sudah terdaftar.</p>
            </div>
        </div>
    </div>
    );
}

export default CardDashboard;