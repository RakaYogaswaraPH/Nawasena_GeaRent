import {Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LoginAdmin from "./pages/LoginAdmin";
import HomeDashboard from "./pages/dashboard/HomeDashboard";
import BarangDashboard from "./pages/dashboard/Barang";
import GambarDashboard from "./pages/dashboard/Gambar";
import UsersDashboard from "./pages/dashboard/Users";
import TambahBarang from "./pages/TambahBarang";
import TokoDashboard from "./pages/dashboard/Toko";
import AlamatDashboard from "./pages/dashboard/Alamat";
import AddImage from "./pages/dashboard/AddImage";
import AddBarang from "./pages/dashboard/AddBarang";
import AddAlamat from "./pages/dashboard/AddAlamat";
import AddToko from "./pages/dashboard/AddToko";
import EditGambar from "./pages/dashboard/EditGambar";
import EditBarang from "./pages/dashboard/EditBarang";
import EditAlamat from "./pages/dashboard/EditAlamat";
import EditToko from "./pages/dashboard/EditToko";
import EditPengguna from "./pages/dashboard/EditPengguna";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/barang" element={<TambahBarang />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/_login" element={<LoginAdmin />}/>
          <Route path="/dashboard/" element={<HomeDashboard />}/>
          <Route path="/dashboard/users/" element={<UsersDashboard />}/>
          <Route path="/dashboard/users/edit-user/" element={<EditPengguna />}/>
          <Route path="/dashboard/toko/" element={<TokoDashboard />}/>
          <Route path="/dashboard/toko/tambah-toko/" element={<AddToko />}/>
          <Route path="/dashboard/toko/edit-toko/" element={<EditToko />}/>
          <Route path="/dashboard/alamat/" element={<AlamatDashboard />}/>
          <Route path="/dashboard/alamat/tambah-alamat/" element={<AddAlamat />}/>
          <Route path="/dashboard/alamat/edit-alamat/" element={<EditAlamat />}/>
          <Route path="/dashboard/barang/" element={<BarangDashboard />}/>
          <Route path="/dashboard/barang/tambah-barang/" element={<AddBarang />}/>
          <Route path="/dashboard/barang/edit-barang/" element={<EditBarang />}/>
          <Route path="/dashboard/gambar/" element={<GambarDashboard />}/>
          <Route path="/dashboard/gambar/tambah-gambar/" element={<AddImage />}/>
          <Route path="/dashboard/gambar/edit-gambar/" element={<EditGambar />}/>
        </Routes>
    </div>
  )
}

export default App;
