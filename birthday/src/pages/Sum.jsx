import React, { useEffect, useState } from "react";
import axios from "axios";
import './sum.css';


const Sum = () => {
  const [wishes, setWishes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [wish, setWish] = useState("");

  useEffect(() => {
    const fetchWishes = async () => {
      try {
        const response = await axios.get("http://localhost:5555/wishes");
        console.log("API Response:", response.data); 
        setWishes(response.data.data || []);
      } catch (error) {
        console.error("Error fetching wishes:", error);
      }
    };

    fetchWishes();
  }, []);

  const handleAddWish = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5555/wishes", {
        title,
        wish,
      });
      setWishes([...wishes, response.data]);
      setTitle("");
      setWish("");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding wish:", error);
    }
  };

  const handleDeleteWish = async (id) => {
    try {
      await axios.delete(`http://localhost:5555/wishes/${id}`);
      setWishes(wishes.filter((wish) => wish._id !== id));
    } catch (error) {
      console.error("Error deleting wish:", error);
    }
  };

  return (
    <div>
      <h1>Lets Create Birthday Wishes For You...</h1>
      <button className="create-button" onClick={() => setIsModalOpen(true)}>
        Create Wish
      </button>
      <div className="w">
        <h2>Wishes😍 🥰 :-</h2>
        <ul>
          {wishes.map((wish) => (
            <li key={wish._id}>
              <strong>{wish.title}</strong>: {wish.wish}
              <button
                onClick={() => handleDeleteWish(wish._id)}
                className="delete-button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
            <form onSubmit={handleAddWish}>
              <div>
                <label>Title:</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Wish:</label>
                <input
                  type="text"
                  value={wish}
                  onChange={(e) => setWish(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Add Wish</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sum;
