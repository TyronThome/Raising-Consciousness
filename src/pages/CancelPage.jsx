const CancelPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        <span className="gradient-animation">Payment Cancelled</span>
      </h1>
      <p className="text-lg text-center mb-8">
        You have cancelled the payment. If this was a mistake, you can try
        again.
      </p>
    </div>
  );
};

export default CancelPage;
