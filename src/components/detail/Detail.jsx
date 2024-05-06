import "./detail.css";

function Detail() {
  return (
    <>
      <div className="detail">
        <div className="user">
          <img src="/assets/avatar.png" alt="" />
          <h2>Jane Doe</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="info">
          <div className="option">
            <div className="title">
              <span>Chat settings</span>
              <img src="/assets/arrowUp.png" alt="" />
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Privacy & Help</span>
              <img src="/assets/arrowUp.png" alt="" />
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Shared Photos</span>
              <img src="/assets/arrowDown.png" alt="" />
            </div>
            <div className="photos">
              <div className="photo-item">
                <div className="photo-detail">
                  <img
                    src="https://www.gemoo-resource.com/tools/img/image_urlgenerator_step1@2x.png"
                    alt=""
                  />
                  <span>Photo name</span>
                </div>
                <img src="/assets/download.png" alt="" className="icon" />
              </div>
              <div className="photo-item">
                <div className="photo-detail">
                  <img
                    src="https://www.gemoo-resource.com/tools/img/image_urlgenerator_step1@2x.png"
                    alt=""
                  />
                  <span>Photo name</span>
                </div>
                <img src="/assets/download.png" alt="" className="icon" />
              </div>
              <div className="photo-item">
                <div className="photo-detail">
                  <img
                    src="https://www.gemoo-resource.com/tools/img/image_urlgenerator_step1@2x.png"
                    alt=""
                  />
                  <span>Photo name</span>
                </div>
                <img src="/assets/download.png" alt="" className="icon" />
              </div>
              <div className="photo-item">
                <div className="photo-detail">
                  <img
                    src="https://www.gemoo-resource.com/tools/img/image_urlgenerator_step1@2x.png"
                    alt=""
                  />
                  <span>Photo name</span>
                </div>
                <img src="/assets/download.png" alt="" className="icon" />
              </div>
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Shared Files</span>
              <img src="/assets/arrowUp.png" alt="" />
            </div>
          </div>
          <button>Block User</button>
        </div>
      </div>
    </>
  );
}

export default Detail;
