import React, { useState } from "react";

const Navbar = () => {
  const [is, setIs] = useState(false);
  return (
    <div className="bg-video">
      <div>
        <div className="container">
          <div>
            <img
              src="https://avatars.mds.yandex.net/i?id=4200a4915d1dcb5675e0412464785de6a8c9f77b-7593536-images-thumbs&n=13"
              alt=""
              width="127.5"
            />
            <ul className="flex list-none gap-10 cursor-pointer">
              <li>Menyu</li>
              <li>Manzil</li>
              <li>Sharhlar</li>
            </ul>
          </div>
          <div>
            <div className="uui-navbar07_menu-right">
              <div className="uui-navbar07_button-wrapper">
                <div className="text-hide">
                  Заказывайте по телефону или через телеграм бот:
                </div>
                <a
                  href="tel:+998**********"
                  className="phone-link w-inline-block"
                >
                  <img
                    src="https://assets-global.website-files.com/64a42814fb04147ed08f663a/64a43375c4e161abf6a354eb_Phone.svg"
                    loading="lazy"
                    alt=""
                  />
                  <div className="text-block-20">+998 ** *** ** **</div>
                </a>
                <a
                  href="tel:+998**********"
                  className="phone-link w-inline-block"
                >
                  <img
                    src="https://assets-global.website-files.com/64a42814fb04147ed08f663a/64a43375c4e161abf6a354eb_Phone.svg"
                    loading="lazy"
                    alt=""
                  />
                  <div className="text-block-21">+998 ** *** ** **</div>
                </a>
                <div className="telegram-wrap-nav">
                  <a
                    href="https://t.me/chorbogosh_bot"
                    target="_blank"
                    className="telegram-button w-inline-block"
                  >
                    <img
                      src="https://assets-global.website-files.com/64a42814fb04147ed08f663a/64a4346e2c51f907b3c6fbd7_Telegram.svg"
                      loading="lazy"
                      alt=""
                    />
                    <div>Buyurtma</div>
                  </a>
                  {/* <div className="social-mob-wrap hide-tablet">
                    <a
                      href="https://www.instagram.com/registanosh/"
                      target="_blank"
                      className="link-social-mob w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/64a42814fb04147ed08f663a/64a66c083d1c004d94ad2ad9_Instagram.svg"
                        loading="lazy"
                        alt=""
                        className="image-18"
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/registanosh/"
                      target="_blank"
                      className="link-social-mob w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/64a42814fb04147ed08f663a/64a66c4e2958e739370e3b30_Facebook.svg"
                        loading="lazy"
                        alt=""
                        className="image-19"
                      />
                    </a>
                    <a
                      href="https://t.me/regiosh_bot/"
                      target="_blank"
                      className="link-social-mob w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/64a42814fb04147ed08f663a/64a66c57254f51aa74d9d990_Telegram.svg"
                        loading="lazy"
                        alt=""
                        className="image-20"
                      />
                    </a>
                    <a href="#" className="link-social-mob w-inline-block">
                      <img
                        src="https://assets-global.website-files.com/64a42814fb04147ed08f663a/64a66c608508ed5a8b55e8ed_84684.svg"
                        loading="lazy"
                        alt=""
                        className="image-21"
                      />
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div id="menu-img" className="mobile">
              <img onClick={()=>setIs(!is)} className="open_modal" src="https://avatars.mds.yandex.net/i?id=64f0423b1cf0e4644549052531152e79957306dc-12548355-images-thumbs&n=13" alt="salom" width={"50px"} />
            </div>
        </div>
      </div>
      <div className={is?"container text-white":"container-none"}>
        <h1>Menu</h1>
        <h1>Manzil</h1>
        <h1>Sharhlar</h1>
        <h3>Telefon orqali yoki telegram bot orqali buyurtma qiling</h3>
        <h2 className="font-bold">+998 ** *** ** **</h2>
        <h2 className="font-bold">+998 ** *** ** **</h2>
        <div className="telegram-wrap-nav">
                  <a
                    href="https://t.me/Bekisfirst_bot/"
                    target="_blank"
                    className="telegram-button w-inline-block"
                  >
                    <img
                      src="https://assets-global.website-files.com/64a42814fb04147ed08f663a/64a4346e2c51f907b3c6fbd7_Telegram.svg"
                      loading="lazy"
                      alt=""
                    />
                    <div>Buyurtma</div>
                  </a>
                  <div className="social-mob-wrap hide-tablet">
                    <a
                      href="https://www.instagram.com/registanosh/"
                      target="_blank"
                      className="link-social-mob w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/64a42814fb04147ed08f663a/64a66c083d1c004d94ad2ad9_Instagram.svg"
                        loading="lazy"
                        alt=""
                        className="image-18"
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/registanosh/"
                      target="_blank"
                      className="link-social-mob w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/64a42814fb04147ed08f663a/64a66c4e2958e739370e3b30_Facebook.svg"
                        loading="lazy"
                        alt=""
                        className="image-19"
                      />
                    </a>
                    <a
                      href="https://t.me/regiosh_bot/"
                      target="_blank"
                      className="link-social-mob w-inline-block"
                    >
                      <img
                        src="https://assets-global.website-files.com/64a42814fb04147ed08f663a/64a66c57254f51aa74d9d990_Telegram.svg"
                        loading="lazy"
                        alt=""
                        className="image-20"
                      />
                    </a>
                    <a href="#" className="link-social-mob w-inline-block">
                      <img
                        src="https://assets-global.website-files.com/64a42814fb04147ed08f663a/64a66c608508ed5a8b55e8ed_84684.svg"
                        loading="lazy"
                        alt=""
                        className="image-21"
                      />
                    </a>
                  </div>
                </div>
      </div>
      <script src="main.js"></script>
    </div>
  );
};

export default Navbar;
