import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

interface interfaceProps {
  history: any;
}
const Search = (props: interfaceProps) => {
  const { history } = props;

  const [keyword, setKeyword] = useState("");
  const handleSearch = (e: any) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };
  return (
    <>
      <Form onSubmit={handleSearch} inline>
        <Form.Control
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Products..."
          className="mr-sm-2 ml-sm-5"
        ></Form.Control>
        <Button type="submit" variant="outline-success" className="p-2">
          Search
        </Button>
      </Form>
    </>
  );
};
export default Search;
