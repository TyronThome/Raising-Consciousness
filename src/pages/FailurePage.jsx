const FailurePage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        <span className="gradient-animation">Payment Failed</span>
      </h1>
      <p className="text-lg text-center mb-8">
        Unfortunately, the payment was unsuccessful. Please try again or contact
        support.
      </p>
    </div>
  );
};

export default FailurePage;
