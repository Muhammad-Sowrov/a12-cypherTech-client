const ServiceCard = ({ item }) => {
  const { _id, service_name, description, image, price, duration_hours } = item;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image} className="h-80" alt="Shoes" />
        </figure>
        <div className="card-body h-48">
          <h2 className="card-title">
            {service_name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{description}</p>
          <div className="flex gap-5">
            <p className="font-bold">Price: ${price}</p>
            <p className="font-bold">Duration: {duration_hours}h</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
