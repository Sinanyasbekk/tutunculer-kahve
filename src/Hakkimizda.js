import React from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/hakkimizda.css";
import Header from "./Header";

const Hakkimizda = () => {
  const navigate = useNavigate();
  return (
    <div className="hakkimizda-container">
      <Header />
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>1960'lı Yılların Başında</h3>
            <p>
              Servisimiz, 1960’lı yılların başında İsmet Tütüncüler (nam-ı diğer
              Uzun İsmet) ve bir ortağı ile Gaziantep’in Şehreküstü bölgesinde
              Yıldız Lokumları adıyla başladı.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content1">
            <h3>Daha Sonra</h3>
            <p>
              Gaziantep’in önde gelen şekerleme markalarından birisi olan Yıldız
              Şekerleme, daha sonra operasyonlarına diğer gıda sektörlerinde de
              faaliyet göstererek devam etti.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>2000'li Yılların Sonunda</h3>
            <p>
              2000’li yılların sonunda, Tütüncüler ailesinin bir kolu, yıllardan
              süregelen gıda sektör tecrübesini devam ettirmek amacıyla
              Tütüncüler Gıda Kahve şirketini faaliyete geçirdi.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content1">
            <h3>Günümüzde</h3>
            <p>
              Güzel Türkiye’mizin otantik kahve tatlarını Antep Dibek,
              Diyarbakır Dibek, ve Hisarzade markaları adı altında birleştiren
              şirketimiz, halen bir aile şirketi olarak Gaziantep’te üretimine
              devam etmektedir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hakkimizda;
