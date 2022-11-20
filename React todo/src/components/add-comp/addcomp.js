import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";
import "./addcomp.css";
import "../../App.css";

function Add() {
  const [val, setVal] = useState("");
  const [data, setData] = useState([]);
  const [editVal, setEditVal] = useState("");
  const [editFlag, setEditFlag] = useState(false);
  const [arrIndex, setarrIndex] = useState("");
  const [check, setCheck] = useState(true);
  const [flag, setFlag] = useState(0);

  const fetchData = async () => {
    const uId = localStorage.getItem("userId");
    const response = await fetch(`todo/getuseritem/${uId}`, {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, [flag]);

  async function addRow() {
    const uId = localStorage.getItem("userId");
    const apiData = { Item: val, userId: uId };

    await fetch("todo/additem", {
      method: "POST",
      body: JSON.stringify(apiData),
      headers: { "Content-type": "application/json;charset=UTF-8" },
    }).then((response) => response.json());
    fetchData()
    setFlag(!flag);
  }

  async function Remove(index) {
    await fetch(`todo/${index}`, {
      method: "DELETE",
      body: JSON.stringify({ id: index }),
      headers: { "Content-type": "application/json" },
    }).then((response) => response.json());
    setFlag(!flag);
  }

  async function editRow() {
    await fetch(`todo/${arrIndex}`, {
      method: "PATCH",
      body: JSON.stringify({ Item: editVal }),
      headers: { "Content-type": "application/json" },
    }).then((response) => response.json());

    setFlag(!flag);
    setEditFlag(!editFlag);
    setCheck(true);
  }

  function Edit(index) {
    setEditFlag(!editFlag);
    setarrIndex(index);
    setCheck(false);
  }

  const navigateTo = useNavigate();
  const Logout = () => {
    navigateTo("/");
    localStorage.setItem("auth", false)
    localStorage.setItem("userId", "");
  };

  return (
    <>
      <div>
        <div className="main">
          <Stack direction="column" spacing={2}>
            <div className="additem">
              <span>Add new item</span>
              <TextField
                id="addName"
                label="Add"
                variant="outlined"
                value={val}
                onChange={(e) => setVal(e.target.value)}
              />
              <Button variant="text" onClick={addRow}>
                Add
              </Button>
              <br />
            </div>
            {editFlag && (
              <>
                <TextField
                  id="editName"
                  variant="outlined"
                  value={editVal}
                  onChange={(e) => setEditVal(e.target.value)}
                />
                <Button variant="text" onClick={() => editRow()}>
                  Update
                </Button>
                <br />
              </>
            )}
            {data.map((item, index) => (
              <div className="maincard" key={item.id}>
                <Card variant="outlined">
                  {index + 1} {item.Item}
                  <button
                    className="btn-react"
                    disabled={!check}
                    onClick={() => Remove(item.id)}
                  >
                    Remove{" "}
                  </button>
                  <button
                    className="btn-react"
                    value={val}
                    onClick={() => Edit(item.id)}
                  >
                    Edit{" "}
                  </button>
                </Card>
              </div>
            ))}

            <div className="editbox"></div>
            <div className="signbtn">
              <Button variant="outlined" onClick={Logout}>
                Signout
              </Button>
              <br />
            </div>
          </Stack>
        </div>
      </div>
    </>
  );
}

export default Add;
