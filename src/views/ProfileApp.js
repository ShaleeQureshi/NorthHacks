import React from "react";
import Typical from "react-typical";
import * as firebase from "firebase";

import { Container, Row } from "react-bootstrap";

// Importing my Components
import Navigation from "../components/navigation";
import Jumbo from "../components/jumbo";
import Card from "../components/cards";
import Footer from "../components/footer";

class ProfileApp extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          c1: "",
          c2: "",
          c3: "",
        },
      ],
    };
  }

  getData() {
    const currentUser = firebase.auth().currentUser;
    const data = [];
    return firebase
      .database()
      .ref("/users/" + currentUser["uid"])
      .on("value", (snapshot) => {
        const allData = snapshot.val();
        const completeData = {
          c1: allData.email,
          c2: allData.teamName,
          c3: allData.teamSize,
        };
        data.push(completeData);
        this.setState({ data });
      });
  }

  submitData(event) {
    event.preventDefault();
    const file = event.target.files[0];
    const dt = new Date();
    if (dt.getDate() < 23 || dt.getDate() > 26) {
      alert("The DropBox is Currently Closed!");
      return;
    } else {
      const storage = firebase
        .storage()
        .ref(
          "/" +
            this.state.data[0]["c1"] +
            "/" +
            this.state.data[0]["c2"] +
            "/" +
            file.name
        );
      const task = storage.put(file);
      task.on(
        "state_changed",
        function progress(snapshot) {
          const uploader = document.getElementById("progBar");
          const percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          uploader.value = percentage;
        },
        function error(error) {
          console.log(error);
          alert(
            "An error has occured with your file upload!\nYour File may be too large make sure it does not exceed 100mb!\nIf you file is too large post it on a GitHub Repository and submit a textfile with a link to it!"
          );
        },
        function complete() {
          alert("File Uploaded!");
        }
      );
    }
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="bg-home">
        <div className="wrapper">
          <Navigation />
          <Jumbo
            elements={
              <div className="landing-txt light-text text-center">
                <h1>Welcome</h1>
                <hr className="jumbo-underline" />
                <Typical
                  steps={[this.state.data[0]["c2"], 100]}
                  loop={1}
                  wrapper="p"
                />
              </div>
            }
          />
          <section>
            <Container>
              <Row className="justify-content-around">
                <Card
                  bg="dark"
                  textColor="light"
                  styleCard="21rem"
                  customClass="light-text"
                  header=" "
                  title="Team Info"
                  optional={
                    <div>
                      <p>Email: {this.state.data[0]["c1"]}</p>
                      <p>Team Name: {this.state.data[0]["c2"]}</p>
                      <p>Team Size: {this.state.data[0]["c3"]}</p>
                    </div>
                  }
                />
                <Card
                  bg="dark"
                  textColor="light"
                  styleCard="21rem"
                  customClass="light-text"
                  header=" "
                  title="DropBox"
                  text="Upload your file to the DropBox below"
                  optional={
                    <div>
                      <div style={{ fontSize: "12px" }}>
                        <p>
                          DropBox will be open from Oct 23 12am - Oct 26 12am
                        </p>
                        <p>(100MB Max, submit ZIPPED files when possible)</p>
                      </div>
                      <progress
                        value="0"
                        max="100"
                        id="progBar"
                        className="w-100"
                      />
                      <input
                        type="file"
                        id="fileSubmission"
                        onChange={(event) => {
                          this.submitData(event);
                        }}
                      />
                    </div>
                  }
                />
                <Card
                  bg="dark"
                  textColor="light"
                  styleCard="21rem"
                  customClass="light-text"
                  header="Help"
                  title="Need help?"
                  text="Contact us if you run into any problems"
                  optional={
                    <p>
                      Email us at :{" "}
                      <a href="mailto:north.hackscompetition@gmail.com">
                        north.hackscompetition@gmail.com
                      </a>
                    </p>
                  }
                />
              </Row>
            </Container>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}
export default ProfileApp;
