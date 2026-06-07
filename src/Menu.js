import React, { useState } from "react";
import "./Menu.css";

const menuData = [
  {
    id: 1,
    name: "Idli",
    category: "Breakfast",
    price: 50,
    image:
       "https://media.istockphoto.com/id/1024549286/photo/idly-sambar-or-idli-with-sambhar-and-green-red-chutney-popular-south-indian-breakfast.jpg?s=612x612&w=0&k=20&c=pLE9fkx7E502vOhRZ0bwc6R9z2QgJzhRwd0F-6-nGT0="
  },
  {
    id: 2,
    name: "Dosa",
    category: "Breakfast",
    price: 70,
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Sandwich",
    category: "Breakfast",
    price: 80,
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Meals",
    category: "Lunch",
    price: 120,
    image:
      "https://as2.ftcdn.net/v2/jpg/09/66/10/19/1000_F_966101965_lrriuTIBOvp4gG023worndfxpOoP6ast.jpg",
  },
  {
    id: 5,
    name: "Lemon Rice",
    category: "Lunch",
    price: 80,
    image:
      "https://www.indianveggiedelight.com/wp-content/uploads/2023/03/lemon-rice-stovetop-featured.jpg",
  },
  {
    id: 6,
    name: "Curd Rice",
    category: "Lunch",
    price: 70,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/curd-rice-thayir-sadam-500x500.jpg",
  },
  {
    id: 7,
    name: "Biryani",
    category: "Dinner",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    name: "Chapati Curry",
    category: "Dinner",
    price: 150,
    image:
      "https://flavorsofadiva.com/wp-content/uploads/2022/08/10-1-768x1024.jpg",
  },
  {
    id: 9,
    name: "Salad",
    category: "Dinner",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=600&q=80",
  },
];

function Menu() {
  const [filter, setFilter] = useState("Breakfast");
  const [selectedItems, setSelectedItems] = useState([]);

  const filteredItems = menuData.filter(
    (item) => item.category === filter
  );

  const handleSelect = (dish) => {
    setSelectedItems((prev) =>
      prev.includes(dish)
        ? prev.filter((item) => item !== dish)
        : [...prev, dish]
    );
  };

  const totalPrice = menuData
    .filter((item) => selectedItems.includes(item.name))
    .reduce((sum, item) => sum + item.price, 0);

  const makeOrder = () => {
    if (selectedItems.length === 0) {
      alert("Please select at least one dish");
      return;
    }

    const confirmOrder = window.confirm(
      `Selected Dishes:\n${selectedItems.join(
        "\n"
      )}\n\nTotal Amount: ₹${totalPrice}\n\nConfirm Order?`
    );

    if (confirmOrder) {
      alert("✅ Order Received Successfully!");
      setSelectedItems([]);
    }
  };

  return (
    <div className="container">
      <h1>🍽 Food Menu</h1>

      <div className="buttons">
        <button onClick={() => setFilter("Breakfast")}>
          Breakfast
        </button>
        <button onClick={() => setFilter("Lunch")}>
          Lunch
        </button>
        <button onClick={() => setFilter("Dinner")}>
          Dinner
        </button>
      </div>

      <h3>Selected Items: {selectedItems.length}</h3>
      <h2>Total: ₹{totalPrice}</h2>

      <div className="menu-grid">
        {filteredItems.map((item) => (
          <div
            className={`card ${
              selectedItems.includes(item.name)
                ? "selected"
                : ""
            }`}
            key={item.id}
          >
            <img
              src={item.image}
              alt={item.name}
              className="dish-image"
            />

            <h2>{item.name}</h2>
            <p>₹ {item.price}</p>

            <label>
              <input
                type="checkbox"
                checked={selectedItems.includes(item.name)}
                onChange={() => handleSelect(item.name)}
              />
              Select
            </label>
          </div>
        ))}
      </div>

      <button className="order-btn" onClick={makeOrder}>
        Make Order
      </button>
    </div>
  );
}

export default Menu;