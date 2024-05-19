import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Profil.css';
import budiImage from "../assets/budi.jpeg";
import muizImage from "../assets/muiz.jpg";
import dhaviImage from "../assets/dhavi.jpeg";

const Profile = ({ image, name, description }) => (
  <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
    <div className="profile-box card h-100">
      <img className="profile-image card-img-top" src={image} alt={name} />
      <div className="card-body text-center">
        <h3 className="profile-name card-title">{name}</h3>
        <p className="profile-description card-text">{description}</p>
      </div>
    </div>
  </div>
);

const ProfileContainer = () => {
  return (
    <div className="profile-container container">
      <div className="row">
        <Profile
          image={muizImage}
          name="Muhammad Mu'iz Isman"
          description="@muiz_isman51"
        />
        <Profile
          image={dhaviImage}
          name="Ahmad Dhavi Fauzan Yudistira"
          description="@ahmaddhavii"
        />
        <Profile
          image={budiImage}
          name="Budhi Laksono Dharmawansyah"
          description="@bl_darmawan"
        />
      </div>
    </div>
  );
};

export default ProfileContainer;
