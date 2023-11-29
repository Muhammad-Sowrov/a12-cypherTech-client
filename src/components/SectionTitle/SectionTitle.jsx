const SectionTitle = ({ heading }) => {
  return (
    <div>
      <div className="mx-auto text-center md:w-3/12 my-8">
        <h2 className="text-3xl font-bold uppercase border-y-4 py-4">
          {heading}
        </h2>
      </div>
    </div>
  );
};

export default SectionTitle;
