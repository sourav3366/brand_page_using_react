const Content = () => {
    return (
      <main className="content container">
        <div className="content-description">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
  
          <div className="content-btn">
            <button>Shop Now </button>
            <button className="secondary-btn">Category</button>
          </div>
  
          <div className="shopping">
            <p>Also Available On</p>
  
            <div className="brand-icons">
              <img src="/images/amazon.png" alt="amazon-logo" />
              <img src="/images/flipkart.png" alt="flipkart-logo" />
            </div>
          </div>
        </div>
        <div className="content-image">
          <img src="/images/shoe_image.png" alt="content-image" />
        </div>
      </main>
    );
  };
  
  export default Content;