import React from 'react';
import styles from "./TableUser.module.css";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TableUser() {
    return(
        <div className={`p-5 ${styles['container']}`}>
            <div className={`p-4 ${styles['card']}`}>
                <h2 className={`${styles['title']}`}>Daftar Users</h2>
                <table className={`table caption-top ${styles['table__container']}`}>
                    <thead>
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Password</th>
                            <th scope="col">Status Toko</th>
                            <th scope="col">Profile</th>
                            <th scope="col">Created_at</th>
                            <th scope="col">Updated_at</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>dandirasyid</td>
                            <td>$2y$10$iTSlKpwFGmHmeZEf0bzkA</td>
                            <td>1</td>
                            <td>image.jpg</td>
                            <td>2023-12-03 20:43:22</td>
                            <td>2023-12-03 20:43:22</td>
                            <td>
                                <Link to="/dashboard/users/edit-user/">
                                    <Button variant="success" className="me-2 mb-2" >Edit</Button>
                                </Link>
                                <Button variant="danger" className="me-1 mb-2" >Delete</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>rakayogaswara</td>
                            <td>827ccb0eea8a706c4c34a16891f84e7b</td>
                            <td>1</td>
                            <td>image.jpg</td>
                            <td>2023-12-03 20:43:22</td>
                            <td>2023-12-03 20:43:22</td>
                            <td>
                                <Button variant="success" className="me-2 mb-2" >Edit</Button>
                                <Button variant="danger" className="me-1 mb-2" >Delete</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>alieff</td>
                            <td>827ccb0eea8a706c4c34a16891f84e7b</td>
                            <td>1</td>
                            <td>image.jpg</td>
                            <td>2023-12-01 20:43:22</td>
                            <td>2023-12-03 21:40:12</td>
                            <td>
                                <Button variant="success" className="me-2 mb-2" >Edit</Button>
                                <Button variant="danger" className="me-1 mb-2" >Delete</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>fikriazz</td>
                            <td>$2y$10$15jQmB60wzMWW77u</td>
                            <td>0</td>
                            <td>image.jpg</td>
                            <td>2023-12-01 20:43:22</td>
                            <td>2023-12-03 21:40:12</td>
                            <td>
                                <Button variant="success" className="me-2 mb-2" >Edit</Button>
                                <Button variant="danger" className="me-1 mb-2" >Delete</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>farhannn</td>
                            <td>$2y$10$15jQmB60wzMWW77u</td>
                            <td>0</td>
                            <td>image.jpg</td>
                            <td>2023-12-01 10:43:00</td>
                            <td>2023-12-03 19:40:35</td>
                            <td>
                                <Button variant="success" className="me-2 mb-2" >Edit</Button>
                                <Button variant="danger" className="me-1 mb-2" >Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TableUser;