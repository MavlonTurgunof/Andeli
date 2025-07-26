import React from "react";
import Container from "../src/Components/Container";

function AboutUsPage() {
  return (
    <Container>
      <div className="my-8 px-4 sm:px-6 lg:px-[100px] xl:px-[180px] max-w-[1440px] mx-auto">
        {/* Title */}
        <h1 className="text-[28px] sm:text-[32px] font-bold mb-4">О нас</h1>

        {/* Banner */}
        <img
          src="/img/AboutUsBanner.svg"
          alt="About Us Banner"
          className="w-full h-auto rounded-md mb-6"
        />

        {/* Intro Paragraph */}
        <h2 className="text-[20px] sm:text-[22px] lg:text-[26px] font-medium text-[#434343] mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices dui
          diam arcu pharetra at laoreet pellentesque. Imperdiet sit ut ornare
          nulla risus id fames nascetur urna. Eros in neque tincidunt.
        </h2>

        {/* Main Paragraph */}
        <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-normal text-[#434343] leading-relaxed">
          Vel leo proin facilisis metus sit ut cursus sagittis. Diam donec mus
          malesuada et ac vulputate. Aenean lacinia suspendisse et mattis
          adipiscing id dictum commodo nunc. Feugiat lorem cras ut cras enim
          neque, elit, facilisi habitasse. Facilisis faucibus nunc congue urna
          diam. Vitae, diam justo, massa, elit. In et nibh ut in diam tellus at
          tellus diam. Amet aliquet at a aliquam ac suspendisse euismod. Lectus
          sit in ut erat in. Et nulla a magna amet, amet. Sodales malesuada
          laoreet bibendum neque amet turpis non. Ac arcu lacus turpis elementum
          imperdiet. Euismod purus, libero scelerisque vitae, libero fermentum
          urna, nunc. Leo id aliquet potenti enim sed maecenas sed ornare. Risus
          nam mauris etiam nibh maecenas nibh interdum mauris suspendisse.
          Volutpat, enim interdum facilisi mauris vitae id. Vel malesuada sit
          etiam dolor. Ullamcorper habitant vitae, nec pretium ullamcorper
          viverra integer praesent tincidunt. At erat sagittis tellus ultricies
          in a. Massa, libero morbi morbi sed non sed. In et neque lectus
          ultricies leo eros. Auctor in elementum accumsan malesuada gravida
          neque cursus pellentesque nunc. Dui nullam odio neque varius massa
          praesent. Neque, porta vel, morbi nulla at tincidunt. Neque, et
          ultrices duis fermentum, tincidunt sem sed. Erat accumsan dui enim
          nisl morbi feugiat. Ac eget lorem sit nulla sed fusce etiam. Elementum
          nibh in eu sed. Nibh non semper amet sit hac tristique orci. Quis
          velit vitae amet magnis nec in nunc. Amet vitae id cras nibh. Sed
          ipsum, lacinia in sit vitae. Duis luctus convallis risus purus
          sollicitudin purus id eu. Faucibus mattis eget ullamcorper eu
          suspendisse elit elit lacus purus. Tortor felis.
        </p>
      </div>
    </Container>
  );
}

export default AboutUsPage;
