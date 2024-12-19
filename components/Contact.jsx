import React from "react";
import { FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <div className="bg-gray-100 py-16 px-5">
      <div className="container mx-auto">
        <h2 className="text-3xl text-green-600 font-bold text-center">
          Kontak Kami
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Hubungi kami untuk informasi lebih lanjut atau pertanyaan.
        </p>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-8">
          {/* Google Maps Section */}
          <div className="w-full md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.4875574838175!2d108.5372854!3d-6.710195499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ee217af90f9eb%3A0xe2e79b46868b87eb!2sUniversitas%20Muhammadiyah%20Cirebon!5e0!3m2!1sid!2sid!4v1734599118201!5m2!1sid!2sid"
              width="100%"
              height="350"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>

          {/* Contact Form Section */}
          <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl text-green-600 font-semibold mb-6">
              Kirim Pesan
            </h3>
            <div>
              <ul className="space-y-5">
                <li>
                  <span>📍</span> Jl. Tuparev No.70, Kedungjaya, Kec. Kedawung,
                  Kabupaten Cirebon, Jawa Barat 45153
                </li>
                <li>
                  <span>📧</span> info@tanganberbagi.org
                </li>
                <li>
                  <span>📞</span> +62 857-0042-9802
                </li>
                <li className="flex items-center gap-3">
                  <FaInstagram />{" "}
                  <a href="https://www.instagram.com/riyaaaaanhdyt/">
                    <span className="underline">@riyaaaaanhdyt</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
