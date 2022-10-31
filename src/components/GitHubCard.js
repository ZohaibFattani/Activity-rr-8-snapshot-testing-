import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import renderer from 'react-test-renderer'


const GitHubCard = () => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://placekitten.com/200/300" />
        <Card.Body>
          <Card.Title>ZohaibFattani</Card.Title>
          <Card.Text>
            Learning to become a software developer.
          </Card.Text>
          <Button variant="primary" href="https://github.com/ZohaibFattani">Check out my GitHub</Button>
        </Card.Body>
      </Card>
    </div>
  );
};


export default GitHubCard;