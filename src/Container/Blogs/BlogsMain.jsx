import React from "react";
import Container from "../../Components/Container";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    image: "/Blogs/img1.svg",
    date: "Июль 14, 2025 • 11 min",
    title: "Для каких целей используется стабилизатор напряжений?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed. A condimentum tempus a egestas sodales diam cras.",
  },
  {
    id: 2,
    image: "/Blogs/img2.svg",
    date: "Июль 15, 2025 • 15 min",
    title: "Почему настенные стабилизаторы безопасные?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed. A condimentum tempus a egestas sodales diam cras.",
  },
  {
    id: 3,
    image: "/Blogs/img3.svg",
    date: "Июль 16, 2025 • 20 min",
    title: "Меры безопасность при использовании стабилизаторов",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed. A condimentum tempus a egestas sodales diam cras.",
  },
  {
    id: 4,
    image: "/Blogs/img4.svg",
    date: "Июль 14, 2025 • 11 min",
    title: "Для каких целей используется стабилизатор напряжений?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed. A condimentum tempus a egestas sodales diam cras.",
  },
  {
    id: 5,
    image: "/Blogs/img9.svg",
    date: "Июль 16, 2025 • 20 min",
    title: "Меры безопасность при использовании стабилизаторов",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed. A condimentum tempus a egestas sodales diam cras.",
  },
  {
    id: 6,
    image: "/Blogs/img6.svg",
    date: "Июль 15, 2025 • 15 min",
    title: "Почему настенные стабилизаторы безопасные?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed. A condimentum tempus a egestas sodales diam cras.",
  },
  {
    id: 7,
    image: "/Blogs/img7.svg",
    date: "Июль 15, 2025 • 15 min",
    title: "Почему настенные стабилизаторы безопасные?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed. A condimentum tempus a egestas sodales diam cras.",
  },
  {
    id: 8,
    image: "/Blogs/img8.svg",
    date: "Июль 14, 2025 • 11 min",
    title: "Меры безопасность при использовании стабилизаторов",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed. A condimentum tempus a egestas sodales diam cras.",
  },
];

function BlogsMain() {
  return (
    <Container>
      <Link to={"/blogs/detail"}>
        <div>
          <h1 className="text-center text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] font-bold text-[#0067B3]">
            Andeli blog
          </h1>
          <p className="text-center text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#605C59] mt-2">
            Полезные статьи про элекстрические оборудования
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] sm:gap-[32px] lg:gap-y-[48px] pt-[40px] sm:pt-[60px] lg:pt-[84px] px-4 sm:px-6 lg:px-0">
          {data.map((blog) => (
            <BlogCard data={blog} />
          ))}
        </div>
      </Link>
    </Container>
  );
}

export default BlogsMain;
