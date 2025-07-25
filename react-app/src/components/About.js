import React from 'react';
import Header from './Header';
import Footer from './Footer';

const About = () => {
  return (
    <div className="bg-[#fffce0] font-sans overflow-x-hidden">
      <Header />
      <main className="pt-[145px] w-full mx-auto text-center px-20 text-lg">
        <h1 className="md:text-4xl text-xl font-semibold mb-4 text-center">SAG haqida</h1>

        <img
          src="https://sag-ashy.vercel.app/assets/sag-kQzYaMs2.jpeg"
          alt="SAG Building"
          className="w-full lg:h-96 mx-auto mb-6 mt-12"
        />

        <p className="text-3xl text-gray-700 font-semibold mt-[85px] mb-20">
          Bizning missiyamiz — bilimlarning inson uchun qimmatini, <br />
          ahamiyatini va haqiqiy rolini namoyish etish.
        </p>


        <div className="flex flex-col md:flex-row gap-6 mb-24 items-start">
          <img
            src="https://sag-ashy.vercel.app/assets/sagAbout-C6NN6jd4.png"
            alt="SAG Interior"
            className="w-full lg:h-[382px] md:w-1/3"
          />
          <div className="w-full md:w-2/3 text-gray-700 text-base md:text-lg">
            <div className="max-w-[721px]">
              <h2 className="text-left font-semibold md:text-2xl text-xl pb-4">
                SAG haqida qisqacha
              </h2>
              <p className="text-left max-w-[721px] leading-relaxed">
                 SAG qamqor kompaniyasi 2000-yilda asoslangan bo'lib, ushbu o'tgan uzog' yillik davrlar
                 davomida mijozlar uchun xizmat ko'rsatib kelmoqda. Kompaniyamiz MDH davlatlari ichida
                 bilim ishlab chiqarish quvvati bo'yicha mutlaq yetakchilik qilmoqda. Shuningdek, xalqaro
                 standartlarga to'liq javob beruvchi bilimlarimiz dunyoning 15 ga yaqin mamlakatlarda ham
                 o'z mijozlariga xizmat ko'rsatmoqda.
               </p>
            </div>
          </div>
        </div>



        <div className="bg-[#cca57a] text-white w-full px-6 py-16">
          <div className="max-w-[1330px] mx-auto">
            <h1 className="text-left text-2xl font-bold mb-6">Ishlab chiqarish hajmi</h1>
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="flex-1 text-lg">
                <div className="flex justify-between py-5 border-b border-white/20">
                  <div>2000-yil</div><div>10 000 000 mln.m²</div>
                </div>
                <div className="flex justify-between py-5 border-b border-white/20">
                  <div>2005-yil</div><div>20 000 000 mln.m²</div>
                </div>
              </div>
              <div className="flex-1 text-lg">
                <div className="flex justify-between py-5 border-b border-white/20">
                  <div>2010-yil</div><div>30 000 000 mln.m²</div>
                </div>
                <div className="flex justify-between py-5 border-b border-white/20">
                  <div>2020-yil</div><div>50 000 000 mln.m²</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-36 px-4">
          <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3 w-full text-left text-gray-600 text-[18px] leading-relaxed">
              <h2 className="text-xl font-semibold mb-4">Ishlab chiqarish haqida</h2>
              <p>
                SAG doimo mijozlari uchun sifat nazorati...<br />
                SAP tizimidan foydalanib keladi...<br />
                sun'iy intellekt texnologiyalardan foydalanmoqda...
              </p>
            </div>
            <div className="md:w-1/3 w-full">
              <img
                src="https://sag-ashy.vercel.app/assets/sagAbout2-Ccf0n3Hc.png"
                alt="Production Facility"
                className="w-full h-[400px] object-cover rounded-md"
              />
            </div>
          </div>
        </section>

        <div className="w-full bg-[#cca57a] mt-12 mb-20 px-6">
          <div className="max-w-[1500px] mx-auto py-16 flex flex-col gap-6">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              <img src="https://sag-ashy.vercel.app/assets/sag-kQzYaMs2.jpeg" alt="Gallery 1" className="w-full h-[372px] object-cover rounded" />
              <img src="https://sag-ashy.vercel.app/assets/about2-B8b11e3B.png" alt="Gallery 2" className="w-full h-[372px] object-cover rounded" />
              <img src="https://sag-ashy.vercel.app/assets/about3-0lUlqsC8.png" alt="Gallery 3" className="w-full h-[372px] object-cover rounded" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <img src="https://sag-ashy.vercel.app/assets/about4-DayheilR.png" alt="Gallery 4" className="w-full h-[372px] object-cover rounded" />
              <img src="https://sag-ashy.vercel.app/assets/about5-BW80B5FH.png" alt="Gallery 5" className="w-full h-[372px] object-cover rounded" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
