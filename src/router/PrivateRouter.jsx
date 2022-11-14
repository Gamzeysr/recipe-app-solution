import React from 'react'
import { Outlet, Navigate } from "react-router-dom"

const PrivateRouter = () => {
  const user = true;

  return (
    <div>
      {user ? <Outlet /> : <Navigate to="/login" />}
      {/* 👆Burada diyorum ki kullanıcım varsa Outlete yönlendirecek eğer user yoksa geri login sauyfasına git login ol öğle gel diyorum .Ve geri yönlendirme yapıcagım için Navigate i kullanıyorum. Navigate to="/login" diyerek kullanıcıyı login sayfasına geri yönlendirmiş oldum. */}
    </div>
  )
}

export default PrivateRouter

//!✨ Kullanıcının sayfaya giriş yapmadan  önce buraya yönlendridiğmiz kısım burası
//! 🎉🎀Kullanıcının izin verdiğimiz müddetce girecek oldugu kısım 