import styles from "./Sidebar.module.css";
import imageUser from "../../assets/image/testimonials-4.png";
import { MdDashboard } from "react-icons/md";
import { FaRegUser, FaRegImage, FaStore, FaRegAddressBook } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import React from 'react';
import {Link} from "react-router-dom";


function Sidebar() {
    return(
        <div className={`d-flex justify-content-between flex-column py-3 ps-3 pe-4 vh-100 ${styles['container']}`}>
            <div>
                <a href="#" className={`${styles['sidebar_logo']}`}>
                    <h3 className={`pb-3 pt-2 ${styles['sidebar__title']}`}>GeaRent<span className={styles.sidebar__dot}>.</span></h3>
                </a>
                <hr className="text-white mt-2" />
                <ul className={`nav nav-pills flex-column mt-3 ${styles['sidebar__container']}`}>
                    <li className="nav-item p-3">
                        <a href="" className="p-1 text-decoration-none">
                            {/* <img src={imageUser} alt="user" className={`fs-4 me-4 ${styles['image']}`}/> */}
                            <span className="fs-5 text-white"><strong>Admin</strong></span>
                        </a>
                    </li>
                    <hr className="text-white mt-2" />
                    <Link to="/dashboard/" className={`text-decoration-none ${styles['sidebar__link']}`}>
                        <li className={`nav-item p-3 ${styles['sidebar__item']}`}>
                            <span className="p-1">
                                <MdDashboard className={`fs-4 me-4 ${styles['icon']}`} />
                                <span className="fs-5"><strong>Beranda</strong></span>
                            </span>
                        </li>
                    </Link>
                    <Link to="/dashboard/users/" className={`text-decoration-none ${styles['sidebar__link']}`}>
                        <li className={`nav-item p-3 ${styles['sidebar__item']}`}>
                            <span className={`p-1`}>
                                <FaRegUser className={`fs-4 me-4 ${styles['icon']}`} />
                                <span className="fs-5"><strong>Users</strong></span>
                            </span>
                        </li>
                    </Link>
                    <Link to="/dashboard/toko/" className={`text-decoration-none ${styles['sidebar__link']}`}>
                        <li className={`nav-item p-3 ${styles['sidebar__item']}`}>
                            <span className={`p-1`}>
                                <FaStore className={`fs-4 me-4 ${styles['icon']}`} />
                                <span className="fs-5"><strong>Toko</strong></span>
                            </span>
                        </li>
                    </Link>
                    <Link to="/dashboard/alamat/" className={`text-decoration-none ${styles['sidebar__link']}`}>
                        <li className={`nav-item p-3 ${styles['sidebar__item']}`}>
                            <span className={`p-1`}>
                                <FaRegAddressBook className={`fs-4 me-4 ${styles['icon']}`} />
                                <span className="fs-5"><strong>Alamat</strong></span>
                            </span>
                        </li>
                    </Link>
                    <Link to="/dashboard/barang/" className={`text-decoration-none ${styles['sidebar__link']}`}>
                        <li className={`nav-item p-3 ${styles['sidebar__item']}`} >
                            <span className="p-1">
                                <IoCartOutline className={`fs-4 me-4 ${styles['icon']}`} />
                                <span className="fs-5"><strong>Barang</strong></span>
                            </span>
                        </li>
                    </Link>
                    <Link to="/dashboard/gambar/" className={`text-decoration-none ${styles['sidebar__link']}`}>
                        <li className={`nav-item p-3 ${styles['sidebar__item']}`}>
                            <span className={`p-1`}>
                                <FaRegImage className={`fs-4 me-4 ${styles['icon']}`} />
                                <span className="fs-5"><strong>Gambar Barang</strong></span>
                            </span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;