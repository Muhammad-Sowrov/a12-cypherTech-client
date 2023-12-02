import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("https://cypher-tech-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, []);
  //   console.log(service);

  return (
    <div>
      <SectionTitle heading={"Service"}></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
        {service.map((item) => (
          <ServiceCard key={item._id} item={item}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
