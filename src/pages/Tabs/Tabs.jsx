import { useState } from "react";
import "./Tabs.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          FAQ 1
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          FAQ 2
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          FAQ 3
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          FAQ 4
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          FAQ 5
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Is the Pet I See on Wecare website or app  Still Adoptable?</h2>
          <hr />
          <p>
          Across the 11,000 shelter and rescue groups in wecare’s North American network, each is responsible for updating adoptable pet listings. To learn about a specific pet, please contact the shelter or rescue directly by going to the Pet Profile page and clicking the “Ask About” button.
          Thank you for using Petfinder! We’re here to help you every step of the way from “just looking” at over 250,000 adoptable pets, to bringing your pet home, to living a long and happy life with your new family member.


Thinkstock

The following links will take you to some of the most frequently asked questions about adopting a pet that you see on Petfinder. If you can’t find the answer below, please contact us (see the bottom of this page) with any additional questions you have.
            
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>How Often is wecare Updated?</h2>
          <hr />
          <p>
          Because each shelter and rescue group is responsible for keeping its adoptable pet listings current, Petfinder is continuously updated.Thank you for using Petfinder! We’re here to help you every step of the way from “just looking” at over 250,000 adoptable pets, to bringing your pet home, to living a long and happy life with your new family member.


Thinkstock

The following links will take you to some of the most frequently asked questions about adopting a pet that you see on Petfinder. If you can’t find the answer below, please contact us (see the bottom of this page) with any additional questions you have.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>How Do I Meet a Pet I See on Petfinder?</h2>
          <hr />
          <p>
          Once you find a pet youre interested in adopting, youll probably want to meet him or her. Go to the Pet Profile page by clicking on the pets picture or name on a search results page. This takes you to the pets detail page. Click “Ask About” to directly contact the shelter or rescue to inquire further.
          </p>
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <h2>How Will I Know If I’ve Been Approved to Adopt a Pet?</h2>
          <hr />
          <p>
          After submitting an adoption inquiry, the shelter or rescue group with the pet you’re interested in will contact you. You may also reach out to the shelter or rescue group directly to follow up.Thank you for using Petfinder! We’re here to help you every step of the way from “just looking” at over 250,000 adoptable pets, to bringing your pet home, to living a long and happy life with your new family member.


Thinkstock

The following links will take you to some of the most frequently asked questions about adopting a pet that you see on Petfinder. If you can’t find the answer below, please contact us (see the bottom of this page) with any additional questions you have.
          </p>
        </div>
        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
          <h2>How Long Will It Take to Hear Back from the Adoption Group?</h2>
          <hr />
          <p>
          Petfinder is a community and, like all communities, each individual or organization is a little bit different. Some days you might send in an inquiry and get a response within a few minutes and other groups may take a few days or a week. Don’t be afraid to follow up with the shelter or rescue group.Thank you for using Petfinder! We’re here to help you every step of the way from “just looking” at over 250,000 adoptable pets, to bringing your pet home, to living a long and happy life with your new family member.


Thinkstock

The following links will take you to some of the most frequently asked questions about adopting a pet that you see on Petfinder. If you can’t find the answer below, please contact us (see the bottom of this page) with any additional questions you have.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;